import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug, getAllPosts } from '../lib/content'
import { useTheme } from '../context/ThemeContext'
import { PreBlock, InlineCode } from '../components/CodeBlock'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { theme, toggleTheme } = useTheme()
  const [copiedLink, setCopiedLink] = useState(false)

  const post = useMemo(() => {
    return slug ? getPostBySlug(slug) : undefined
  }, [slug])

  const allPosts = useMemo(() => getAllPosts(), [])

  // Find next and previous posts
  const { prevPost, nextPost } = useMemo(() => {
    if (!post) return { prevPost: null, nextPost: null }
    const currentIndex = allPosts.findIndex(p => p.slug === post.slug)
    const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null
    const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
    return { prevPost: prev, nextPost: next }
  }, [post, allPosts])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col items-center justify-center p-6 text-center">
        <div className="glass-panel p-10 rounded-2xl max-w-md w-full">
          <div className="text-4xl mb-3">📄</div>
          <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Journal Entry Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            The post you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/blog"
            className="btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5"
          >
            ← Back to All Entries
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-indigo-500 selection:text-white relative transition-colors duration-300">
      {/* Precision technical grid overlay */}
      <div className="tech-grid fixed inset-0 pointer-events-none opacity-40 dark:opacity-25" />

      {/* Atmospheric lighting blurs */}
      <div
        className="fixed pointer-events-none opacity-50 dark:opacity-30"
        style={{
          top: '-180px',
          left: '10%',
          width: '700px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, rgba(243,232,255,0.02) 50%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="fixed pointer-events-none opacity-50 dark:opacity-30"
        style={{
          top: '35%',
          right: '5%',
          width: '600px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(2,132,199,0.07) 0%, rgba(224,242,254,0.02) 50%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* ── Fixed Island Header ── */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="glass-nav max-w-5xl w-full rounded-2xl px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-xs font-mono">
            <Link to="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
              Portfolio
            </Link>
            <span className="text-slate-400">/</span>
            <Link to="/blog" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline shrink-0">
              Journal
            </Link>
            <span className="text-slate-400 hidden sm:inline">/</span>
            <span className="text-slate-400 truncate hidden sm:inline max-w-[200px]">
              {post.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/blog"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>←</span>
              <span className="hidden sm:inline">All</span>
              <span>Entries</span>
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-xs transition-all flex items-center justify-center cursor-pointer group"
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform duration-300"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Article Content ── */}
      <main className="pt-28 pb-20 px-6 max-w-3xl mx-auto">
        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-200/80 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {post.tags?.map(t => (
              <span key={t} className="tag-badge">
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15] mb-4">
            {post.title}
          </h1>

          {post.summary && (
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
              {post.summary}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{post.author || 'Rakibul Islam Emon'}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <button
              onClick={handleCopyLink}
              className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <span className="text-emerald-500">✓</span>
                  <span>Link Copied</span>
                </>
              ) : (
                <>
                  <span>🔗</span>
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Markdown Rendered Article */}
        <article className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              pre: PreBlock,
              code: InlineCode,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Post Footer & Author Card */}
        <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white font-mono font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
              RE
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                Rakibul Islam Emon
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                Final-year CSE student at Ahsanullah University of Science and Technology (AUST) and ICPC 2025 Dhaka Regional finalist (#44th Place). Writing about algorithms, distributed backends, and systems engineering.
              </p>
            </div>
            <Link
              to="/"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shrink-0"
            >
              View Portfolio ↗
            </Link>
          </div>

          {/* Next & Previous Post Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="glass-panel p-4 rounded-xl flex flex-col gap-1 group hover:border-indigo-400 transition-all text-left"
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase">← Previous Entry</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="glass-panel p-4 rounded-xl flex flex-col gap-1 group hover:border-indigo-400 transition-all text-right sm:ml-auto w-full"
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase">Next Entry →</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>

      {/* ── Clean Footer ── */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070b14] py-8 px-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-slate-200">Rakibul Islam Emon</span>
            <span>/</span>
            <span>Learning Journal</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/blog" className="hover:text-slate-900 dark:hover:text-white">
              All Entries
            </Link>
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white">
              Portfolio
            </Link>
            <a href="https://github.com/SHOEBILL04" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
