import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ErrorBoundary } from './components/ErrorBoundary'
import PortfolioPage from './pages/PortfolioPage'
import BlogListPage from './pages/BlogListPage'
import BlogPostPage from './pages/BlogPostPage'

/** Scroll to top when navigation changes */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    try {
      window.scrollTo(0, 0)
    } catch (e) {
      // ignore
    }
  }, [pathname])
  return null
}

export default function App() {
  // If user navigates directly to a pathname like /blog or /Portfolio/blog without hash, sync to hash route
  useEffect(() => {
    try {
      const pathname = window.location.pathname
      const blogMatch = pathname.match(/\/(blog(?:\/[^/?#]+)?)\/?$/)
      if (blogMatch && !window.location.hash) {
        window.location.hash = `#/${blogMatch[1]}`
      }
    } catch (e) {
      // ignore
    }
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<PortfolioPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

