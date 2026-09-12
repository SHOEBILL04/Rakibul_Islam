import { useState, type ReactNode } from 'react'

interface CodeProps {
  children?: ReactNode
  className?: string
  node?: any
}

export function PreBlock({ children }: { children?: ReactNode }) {
  const [copied, setCopied] = useState(false)

  // Extract code text from children
  const extractText = (elem: any): string => {
    if (!elem) return ''
    if (typeof elem === 'string') return elem
    if (Array.isArray(elem)) return elem.map(extractText).join('')
    if (elem.props?.children) return extractText(elem.props.children)
    return ''
  }

  const codeText = extractText(children)

  // Detect language from child code element
  let language = 'CODE'
  if (children && typeof children === 'object' && 'props' in children) {
    const codeClassName = (children as any).props?.className || ''
    const match = codeClassName.match(/language-(\w+)/)
    if (match) {
      language = match[1].toUpperCase()
      if (language === 'CPP') language = 'C++'
      if (language === 'JS') language = 'JavaScript'
      if (language === 'TS') language = 'TypeScript'
      if (language === 'PY') language = 'Python'
      if (language === 'SH') language = 'Bash'
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 bg-slate-900 shadow-lg text-xs font-mono">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-slate-800 text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </span>
          <span className="text-[11px] font-semibold text-slate-300 ml-1.5 tracking-wider">{language}</span>
        </div>

        <button
          onClick={handleCopy}
          className="text-[11px] px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✓</span>
              <span className="text-emerald-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto text-slate-100 leading-relaxed scrollbar-thin">
        <pre className="!bg-transparent !p-0 !m-0">{children}</pre>
      </div>
    </div>
  )
}

export function InlineCode({ children, className, ...props }: CodeProps) {
  // If it's already inside a pre (has language- class), render as is
  if (className?.includes('language-') || className?.includes('hljs')) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <code
      className="px-1.5 py-0.5 rounded text-[12px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 border border-slate-200/80 dark:border-slate-700/80"
      {...props}
    >
      {children}
    </code>
  )
}
