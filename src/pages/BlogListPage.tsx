import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts, getAllTags } from '../lib/content'
import { useTheme } from '../context/ThemeContext'

export default function BlogListPage() {
  const { theme, toggleTheme } = useTheme()
  const posts = useMemo(() => getAllPosts(), [])
  const tags = useMemo(() => ['All', ...getAllTags()], [])

  const [selectedTag, setSelectedTag] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesTag = selectedTag === 'All' || post.tags?.includes(selectedTag)
      const q = searchQuery.toLowerCase().trim()
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.tags?.some(t => t.toLowerCase().includes(q))
      return matchesTag && matchesQuery
    })
  }, [posts, selectedTag, searchQuery])

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
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              RE
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white leading-none flex items-center gap-1.5">
                Rakibul Islam Emon
                <span className="text-slate-400 dark:text-slate-600">/</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs">Journal</span>
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                Engineering notebook & writeups
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>←</span>
              <span>Portfolio</span>
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

      {/* ── Main Content Area ── */}
      <main className="pt-28 pb-20 px-6 max-w-4xl mx-auto">
        {/* Editorial Heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            LOCAL-FIRST DEVELOPER NOTEBOOK
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-3">
            Learning Journal & <span className="gradient-accent">Technical Notes</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
            Documenting algorithmic problem solving, competitive programming insights, distributed backend architecture, and continuous learning notes.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Tag Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  selectedTag === tag
                    ? 'bg-slate-900 dark:bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[200px] sm:w-64">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Posts List */}
        <div className="flex flex-col gap-4">
          {filteredPosts.length === 0 ? (
            <div className="glass-panel p-10 rounded-2xl text-center">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">No matching entries found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Try clearing your search query or selecting another topic tag.
              </p>
            </div>
          ) : (
            filteredPosts.map(post => (
              <article
                key={post.slug}
                className="interactive-card rounded-2xl p-6 relative group transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.tags?.map(t => (
                      <span key={t} className="tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-mono">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read journal entry</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>

                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    by {post.author || 'Rakibul Islam Emon'}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070b14] py-8 px-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-slate-200">Rakibul Islam Emon</span>
            <span>/</span>
            <span>Learning Journal</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-slate-900 dark:hover:text-white">
              Portfolio
            </Link>
            <a href="https://github.com/SHOEBILL04" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://codeforces.com/profile/SHOEBILL" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              Codeforces
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
