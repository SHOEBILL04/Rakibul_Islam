import fs from 'node:fs'
import path from 'node:path'
import { load } from 'js-yaml'

const DIST_DIR = path.resolve('dist')
const CONTENT_DIR = path.resolve('content/posts')

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { title: 'Untitled Post', summary: '', date: '' }
  try {
    const data = load(match[1]) || {}
    return {
      title: data.title || 'Untitled Post',
      summary: data.summary || '',
      date: data.date || '',
      tags: data.tags || [],
    }
  } catch (err) {
    return { title: 'Untitled Post', summary: '', date: '' }
  }
}

function escapeHtml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

async function generateStatic() {
  console.log('⚡ Starting static route generation for GitHub Pages...')

  const indexHtmlPath = path.join(DIST_DIR, 'index.html')
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html not found. Run vite build first.')
    process.exit(1)
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8')

  // 1. Ensure .nojekyll exists for GitHub Pages
  fs.writeFileSync(path.join(DIST_DIR, '.nojekyll'), '')
  console.log('✓ Created dist/.nojekyll')

  // 2. Create 404.html fallback for GitHub Pages with SPA redirect
  const spaRedirect404 = `
  <script>
    (function() {
      var p = window.location.pathname;
      var base = p.includes('/Portfolio') ? '/Portfolio' : '';
      var sub = p.replace(base, '').replace(/^\\//, '');
      window.location.replace(base + '/#' + (sub ? '/' + sub : '/') + window.location.search + window.location.hash);
    })();
  </script>
  `
  const html404 = baseHtml.replace('</head>', spaRedirect404 + '</head>')
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), html404)
  console.log('✓ Created dist/404.html (SPA fallback)')

  // 3. Create dist/blog/index.html with direct route redirect
  const blogDir = path.join(DIST_DIR, 'blog')
  fs.mkdirSync(blogDir, { recursive: true })

  const blogRedirectScript = `
  <script>
    (function() {
      var p = window.location.pathname;
      var base = p.includes('/Portfolio') ? '/Portfolio' : '';
      window.location.replace(base + '/#/blog' + window.location.search);
    })();
  </script>
  `
  let blogIndexHtml = baseHtml
    .replace(/<title>.*?<\/title>/i, '<title>Learning Journal & Technical Notes | Rakibul Islam Emon</title>')
    .replace('</head>', blogRedirectScript + '</head>')
  fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndexHtml)
  console.log('✓ Generated static route: /blog (dist/blog/index.html)')

  // 4. Scan content/posts and create dist/blog/[slug]/index.html
  if (fs.existsSync(CONTENT_DIR)) {
    const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
    console.log(`Found ${files.length} journal post(s) in content/posts/`)

    for (const file of files) {
      const slug = file.replace(/\.(md|mdx)$/, '')
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
      const meta = parseFrontmatter(raw)

      const postDir = path.join(blogDir, slug)
      fs.mkdirSync(postDir, { recursive: true })

      const postRedirectScript = `
  <script>
    (function() {
      var p = window.location.pathname;
      var base = p.includes('/Portfolio') ? '/Portfolio' : '';
      window.location.replace(base + '/#/blog/${slug}' + window.location.search);
    })();
  </script>
  `

      let postHtml = baseHtml
        .replace(
          /<title>.*?<\/title>/i,
          `<title>${escapeHtml(meta.title)} | Rakibul Islam Emon</title>`
        )
        .replace(
          /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
          `<meta name="description" content="${escapeHtml(meta.summary)}" />`
        )

      // Add OpenGraph meta tags
      if (!postHtml.includes('property="og:title"')) {
        postHtml = postHtml.replace(
          '</head>',
          `  <meta property="og:title" content="${escapeHtml(meta.title)}" />\n  <meta property="og:description" content="${escapeHtml(meta.summary)}" />\n${postRedirectScript}\n</head>`
        )
      } else {
        postHtml = postHtml
          .replace(
            /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
            `<meta property="og:title" content="${escapeHtml(meta.title)}" />`
          )
          .replace(
            /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
            `<meta property="og:description" content="${escapeHtml(meta.summary)}" />`
          )
          .replace('</head>', postRedirectScript + '</head>')
      }

      fs.writeFileSync(path.join(postDir, 'index.html'), postHtml)
      console.log(`✓ Generated static route: /blog/${slug} (dist/blog/${slug}/index.html)`)
    }
  }

  console.log('🎉 Static routes generation complete!')
}

generateStatic().catch(err => {
  console.error('Failed to generate static routes:', err)
  process.exit(1)
})
