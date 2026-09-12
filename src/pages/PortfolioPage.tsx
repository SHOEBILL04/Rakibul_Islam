import { useState, useEffect, useRef, type FC, type SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import {
  CodeforcesLogo,
  CodeChefLogo,
  AtCoderLogo,
  IcpcLogo,
  NationalContestLogo,
  CollaborativeLogo,
  IntraAustLogo,
  CppLogo,
  PythonLogo,
  JavaLogo,
  TypeScriptLogo,
  JavaScriptLogo,
  PhpLogo,
  SpringBootLogo,
  LaravelLogo,
  NodeLogo,
  ExpressLogo,
  ReactLogo,
  NextLogo,
  PostgreSqlLogo,
  MsSqlLogo,
  MySqlLogo,
  MongoDbLogo,
  PlPgSqlLogo,
  LinuxLogo,
  GitLogo,
} from '../logos'

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatCard {
  label: string
  value: number
  suffix: string
  prefix?: string
  subtext: string
}

interface Project {
  id: string
  title: string
  category: string
  desc: string
  tags: string[]
  github: string
  accentColor: string
}

interface Contest {
  rank: string
  event: string
  year: string
  type: 'icpc' | 'national' | 'collaborative' | 'intra'
  Icon: FC<SVGProps<SVGSVGElement>>
}

interface TechItem {
  name: string
  category: string
  badge: string
  Icon: FC<SVGProps<SVGSVGElement>>
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS: StatCard[] = [
  { label: 'Problems Solved', value: 1000, suffix: '+', subtext: 'Across Codeforces, CodeChef, AtCoder and others' },
  { label: 'ICPC Regional 2025', value: 44, suffix: 'th Place', subtext: 'Dhaka Regional Site Finalist' },
  { label: 'Academic CGPA', value: 3.63, suffix: ' / 4.00', subtext: 'AUST Computer Science & Eng.' },
  { label: 'Full-Stack Projects', value: 8, suffix: ' Built', subtext: 'University coursework & hackathons' },
]

const TECH_STACK: TechItem[] = [
  { name: 'C++', category: 'Languages', badge: 'Primary', Icon: CppLogo },
  { name: 'Python', category: 'Languages', badge: 'Core', Icon: PythonLogo },
  { name: 'Java', category: 'Languages', badge: 'OOP', Icon: JavaLogo },
  { name: 'TypeScript', category: 'Languages', badge: 'Modern', Icon: TypeScriptLogo },
  { name: 'JavaScript', category: 'Languages', badge: 'Web', Icon: JavaScriptLogo },
  { name: 'PHP', category: 'Languages', badge: 'Backend', Icon: PhpLogo },
  { name: 'Spring Boot', category: 'Backend', badge: 'Enterprise', Icon: SpringBootLogo },
  { name: 'Laravel', category: 'Backend', badge: 'MVC', Icon: LaravelLogo },
  { name: 'Node.js', category: 'Backend', badge: 'Runtime', Icon: NodeLogo },
  { name: 'Express.js', category: 'Backend', badge: 'REST', Icon: ExpressLogo },
  { name: 'React.js', category: 'Frontend', badge: 'SPA', Icon: ReactLogo },
  { name: 'Next.js', category: 'Frontend', badge: 'Full-Stack', Icon: NextLogo },
  { name: 'PostgreSQL', category: 'Databases', badge: 'Relational', Icon: PostgreSqlLogo },
  { name: 'MSSQL', category: 'Databases', badge: 'Enterprise', Icon: MsSqlLogo },
  { name: 'MySQL', category: 'Databases', badge: 'Relational', Icon: MySqlLogo },
  { name: 'MongoDB', category: 'Databases', badge: 'NoSQL', Icon: MongoDbLogo },
  { name: 'PL/pgSQL', category: 'Databases', badge: 'Stored Procs', Icon: PlPgSqlLogo },
  { name: 'Linux', category: 'DevOps', badge: 'Environment', Icon: LinuxLogo },
  { name: 'Git & GitHub', category: 'DevOps', badge: 'VCS', Icon: GitLogo },
]

const PROJECTS: Project[] = [
  {
    id: 'turfchai',
    title: 'TurfChai',
    category: 'Full-Stack Sports Reservation Platform',
    desc: 'Sports turf slot booking and venue scheduling engine with real-time slot conflict resolution and automated billing calculations.',
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'PL/pgSQL', 'React', 'CSS'],
    github: 'https://github.com/SHOEBILL04/TurfChai',
    accentColor: '#4f46e5',
  },
  {
    id: 'ecocycle',
    title: 'EcoCycle',
    category: 'Sustainability & Waste Logistics System',
    desc: 'Smart recycling tracking dashboard incentivizing urban waste management with real-time eco-points ledger and disposal logs.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/SHOEBILL04/EcoCycle',
    accentColor: '#059669',
  },
  {
    id: 'lantern',
    title: 'Lantern',
    category: 'Productivity & Habit Engine',
    desc: 'Student habit tracker featuring real-time interactive timers, token-based authentication, structured course file repositories, and streak analytics.',
    tags: ['Laravel', 'PHP', 'React', 'MySQL', 'REST API'],
    github: 'https://github.com/SHOEBILL04/lantern',
    accentColor: '#7c3aed',
  },
  {
    id: 'mela',
    title: 'Mela',
    category: 'Public Event Logistics & Allocation',
    desc: 'Fair & expo management system automating commercial stall leasing, logistics verification pipelines, and multi-tier role-based access control.',
    tags: ['Laravel', 'MSSQL', 'PHP', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/SHOEBILL04/MELA',
    accentColor: '#0284c7',
  },
]

const CONTESTS: Contest[] = [
  { rank: '44th Place', event: 'ICPC Dhaka Regional Site', year: '2025', type: 'icpc', Icon: IcpcLogo },
  { rank: '17th Place', event: 'BUBT IUPC Programming Contest', year: '2025', type: 'collaborative', Icon: CollaborativeLogo },
  { rank: '25th Place', event: 'NWU CSE Fest Programming Contest', year: '2025', type: 'national', Icon: NationalContestLogo },
  { rank: '82nd Place', event: 'CUET IUPC National Programming Contest', year: '2025', type: 'national', Icon: NationalContestLogo },
  { rank: '2nd Runner-up', event: 'Intra-AUST Programming Contest (Carnival 6.0)', year: '2025', type: 'intra', Icon: IntraAustLogo },
  { rank: 'Runner-up', event: 'Intra-AUST Programming Contest (PIC) Spring', year: '2025', type: 'intra', Icon: IntraAustLogo },
]

// ─── Custom Hooks ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1600, decimals = 0, inView = false) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration, decimals])

  return count
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ─── Sub-Components ───────────────────────────────────────────────────────────

/** Live Clock Widget showing Dhaka Local Time */
function LiveDhakaClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setTime(formatted)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="font-semibold text-slate-800 dark:text-slate-200">DHAKA, BD</span>
      <span className="text-slate-400 dark:text-slate-600">/</span>
      <span className="text-slate-700 dark:text-slate-300 font-medium">{time || '12:00:00 PM'}</span>
      <span className="text-slate-400 dark:text-slate-500 font-sans">(UTC+6)</span>
    </div>
  )
}

/** Interactive Code Studio Window Widget */
function InteractiveCodeStudio() {
  const [activeTab, setActiveTab] = useState<'cpp' | 'arch' | 'meta'>('cpp')
  const [executionOutput, setExecutionOutput] = useState<string | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const handleRunCode = () => {
    setIsRunning(true)
    setExecutionOutput(null)
    setTimeout(() => {
      setIsRunning(false)
      setExecutionOutput(
        '✓ Process exited with code 0\n[Verdict]: Accepted (AC) in 0.018s\nMemory: 3,420 KB | ICPC Dhaka 2025 Rank: #44\nStatus: 1,000+ Problems Solved | Ready to Deploy'
      )
    }, 600)
  }

  return (
    <div className="code-window rounded-xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col text-xs font-mono">
      {/* Window Top Bar */}
      <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-slate-500 text-[11px] ml-2">dev-studio@rakibul:~</span>
        </div>

        {/* Tab Selectors */}
        <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
          <button
            onClick={() => setActiveTab('cpp')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'cpp' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Algorithm.cpp
          </button>
          <button
            onClick={() => setActiveTab('arch')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'arch' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Architecture.ts
          </button>
          <button
            onClick={() => setActiveTab('meta')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'meta' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Profile.json
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 bg-[#0a0f1d] text-slate-300 leading-relaxed overflow-x-auto min-h-[200px]">
        {activeTab === 'cpp' && (
          <div>
            <div className="text-slate-500">// ICPC Template & Graph Optimization Algorithm</div>
            <div>
              <span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;bits/stdc++.h&gt;</span>
            </div>
            <div>
              <span className="text-purple-400">using namespace</span> std;
            </div>
            <div className="text-slate-500 mt-1.5">// Fast I/O & Dijkstra Shortest Path</div>
            <div>
              <span className="text-blue-400">void</span> <span className="text-yellow-300">solve</span>() &#123;
            </div>
            <div className="pl-4">
              <span className="text-blue-400">priority_queue</span>&lt;pair&lt;<span className="text-blue-400">long long</span>, <span className="text-blue-400">int</span>&gt;&gt; pq;
            </div>
            <div className="pl-4 text-slate-400">
              pq.<span className="text-yellow-300">push</span>(&#123;0, source&#125;);
            </div>
            <div className="pl-4">
              <span className="text-purple-400">while</span> (!pq.<span className="text-yellow-300">empty</span>()) &#123; <span className="text-slate-500">/* O((V + E) log V) */</span> &#125;
            </div>
            <div className="pl-4">
              cout &lt;&lt; <span className="text-emerald-300">"OPTIMAL_FOUND: ICPC 2025 Site Finalist\n"</span>;
            </div>
            <div>&#125;</div>
          </div>
        )}

        {activeTab === 'arch' && (
          <div>
            <div className="text-slate-500">// TurfChai & High-Throughput Booking Architecture</div>
            <div>
              <span className="text-purple-400">interface</span> <span className="text-yellow-300">SlotTransaction</span> &#123;
            </div>
            <div className="pl-4">
              turfId: <span className="text-blue-400">string</span>;
            </div>
            <div className="pl-4">
              timeWindow: [<span className="text-blue-400">Date</span>, <span className="text-blue-400">Date</span>];
            </div>
            <div className="pl-4">
              concurrencyLock: <span className="text-emerald-400">'SERIALIZABLE'</span>;
            </div>
            <div className="pl-4">
              auditLog: <span className="text-blue-400">boolean</span>;
            </div>
            <div>&#125;</div>
            <div className="mt-1.5 text-slate-500">// Zero double-booking with PostgreSQL PL/pgSQL atomicity</div>
            <div>
              <span className="text-purple-400">export const</span> <span className="text-yellow-300">verifySlotIntegrity</span> = (tx: <span className="text-yellow-300">SlotTransaction</span>) =&gt; &#123; ... &#125;;
            </div>
          </div>
        )}

        {activeTab === 'meta' && (
          <div>
            <div className="text-slate-500">// Engineer Meta Profile</div>
            <div>&#123;</div>
            <div className="pl-4">
              <span className="text-sky-300">"name"</span>: <span className="text-emerald-300">"Rakibul Islam Emon"</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"institution"</span>: <span className="text-emerald-300">"Ahsanullah University of Science and Technology"</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"department"</span>: <span className="text-emerald-300">"Computer Science & Engineering"</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"cgpa"</span>: <span className="text-amber-300">3.63</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"icpcRank"</span>: <span className="text-purple-300">"44th Place (Dhaka Regional)"</span>,
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"competitiveJudges"</span>: [<span className="text-emerald-300">"Codeforces"</span>, <span className="text-emerald-300">"CodeChef"</span>, <span className="text-emerald-300">"AtCoder"</span>],
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"status"</span>: <span className="text-emerald-400">"READY_TO_DEPLOY"</span>
            </div>
            <div>&#125;</div>
          </div>
        )}
      </div>

      {/* Terminal Footer & Run Button */}
      <div className="bg-slate-900 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <span className="animate-spin inline-block">↻</span> Executing...
              </>
            ) : (
              <>
                <span>▶</span> Run Simulation
              </>
            )}
          </button>
          <span className="text-[11px] text-slate-500 hidden sm:inline">Ctrl + Enter</span>
        </div>
        <span className="text-[11px] text-slate-400">GNU C++20 (64-bit)</span>
      </div>

      {/* Real-time Output Banner */}
      {executionOutput && (
        <div className="bg-slate-950 p-3 border-t border-emerald-500/40 text-emerald-400 font-mono text-[11px] whitespace-pre-line leading-relaxed">
          {executionOutput}
        </div>
      )}
    </div>
  )
}

/** TurfChai Mini Interactive Slot Booking UI */
function TurfChaiInteractivePreview() {
  const [selectedSlot, setSelectedSlot] = useState<string>('09:00 PM')
  const slots = [
    { time: '07:00 PM', status: 'Booked' },
    { time: '08:00 PM', status: 'Booked' },
    { time: '09:00 PM', status: 'Available' },
    { time: '10:00 PM', status: 'Available' },
  ]

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex flex-col gap-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          Field 01 — Arena Scheduler
        </span>
        <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[11px] bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
          Live Slot Engine
        </span>
      </div>

      {/* Slots grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {slots.map(s => {
          const isSelected = selectedSlot === s.time
          const isBooked = s.status === 'Booked'
          return (
            <button
              key={s.time}
              onClick={() => !isBooked && setSelectedSlot(s.time)}
              disabled={isBooked}
              className={`py-2 px-1 text-center rounded-lg text-[10px] font-mono transition-all ${
                isBooked
                  ? 'bg-slate-200/70 dark:bg-slate-800/60 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-800 line-through'
                  : isSelected
                  ? 'bg-indigo-600 text-white font-bold shadow-xs border border-indigo-700'
                  : 'bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 cursor-pointer'
              }`}
            >
              <div className="font-semibold">{s.time}</div>
              <div className="text-[9px] opacity-80">{isBooked ? 'Taken' : isSelected ? 'Selected' : 'Open'}</div>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800">
        <span>Selected: <b className="text-slate-800 dark:text-slate-200">{selectedSlot}</b></span>
        <span className="font-mono font-semibold text-indigo-600 dark:text-indigo-400">Rate: ৳2,200/hr</span>
      </div>
    </div>
  )
}

/** EcoCycle Mini Interactive Sustainability Gauge UI */
function EcoCycleInteractivePreview() {
  const [recycledKg, setRecycledKg] = useState(48)

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex flex-col gap-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          Sustainability Impact Metric
        </span>
        <span className="text-emerald-700 dark:text-emerald-300 font-mono font-semibold text-[11px] bg-emerald-100/60 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/60">
          Grade A
        </span>
      </div>

      {/* Progress Bar & Counter */}
      <div>
        <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mb-1">
          <span>Monthly Target Progress</span>
          <span className="font-mono font-bold text-slate-900 dark:text-white">{recycledKg}kg / 60kg</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(recycledKg / 60) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
          <span>Points:</span>
          <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">+{recycledKg * 10} EcoPts</span>
        </div>
        <button
          onClick={() => setRecycledKg(prev => (prev >= 60 ? 10 : prev + 6))}
          className="text-[10px] font-mono font-semibold px-2 py-1 bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded transition-colors cursor-pointer"
        >
          + Log 6kg Deposit
        </button>
      </div>
    </div>
  )
}

/** Lantern Mini Interactive Focus Timer UI */
function LanternInteractivePreview() {
  const [seconds, setSeconds] = useState(1500)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: any = null
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000)
    } else if (seconds === 0) {
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const formattedTime = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex flex-col gap-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-purple-600" />
          Pomodoro Study Engine
        </span>
        <span className="text-purple-700 dark:text-purple-300 font-mono font-semibold text-[11px] bg-purple-100/60 dark:bg-purple-950/60 px-2 py-0.5 rounded border border-purple-200/60 dark:border-purple-800/60">
          Day 14 Streak 🔥
        </span>
      </div>

      <div className="flex items-center justify-between bg-white dark:bg-slate-800/90 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
        <div>
          <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase">Current Sprint</div>
          <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">{formattedTime}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`px-3 py-1.5 rounded text-xs font-semibold font-mono transition-all cursor-pointer ${
              isActive
                ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                : 'bg-purple-600 text-white hover:bg-purple-500 shadow-xs'
            }`}
          >
            {isActive ? 'Pause' : 'Start Timer'}
          </button>
          <button
            onClick={() => { setIsActive(false); setSeconds(1500) }}
            className="p-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 text-xs font-mono cursor-pointer"
            title="Reset"
          >
            ↺
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span>Daily Goal:</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map(idx => (
            <span
              key={idx}
              className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[9px] ${
                idx <= 3 ? 'bg-purple-500 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
              }`}
            >
              ✓
            </span>
          ))}
        </div>
        <span className="ml-auto text-purple-600 dark:text-purple-400 font-mono font-medium">3/4 Done</span>
      </div>
    </div>
  )
}

/** Mela Mini Festival Stall Management Grid UI */
function MelaInteractivePreview() {
  const [selectedZone, setSelectedZone] = useState('Zone A')
  const zones: Record<string, { total: number; occupied: number; rate: string }> = {
    'Zone A': { total: 16, occupied: 15, rate: 'VIP Pavilion' },
    'Zone B': { total: 24, occupied: 18, rate: 'Commercial Hub' },
    'Food Court': { total: 12, occupied: 12, rate: 'Culinary Area' },
  }

  const current = zones[selectedZone]

  return (
    <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex flex-col gap-2.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sky-600" />
          Exhibition Logistics Dispatcher
        </span>
        <span className="text-sky-700 dark:text-sky-300 font-mono font-semibold text-[11px] bg-sky-100/60 dark:bg-sky-950/60 px-2 py-0.5 rounded border border-sky-200/60 dark:border-sky-800/60">
          MSSQL Backend
        </span>
      </div>

      {/* Zone Switcher */}
      <div className="flex gap-1 bg-slate-200/70 dark:bg-slate-800/80 p-0.5 rounded-lg">
        {Object.keys(zones).map(z => (
          <button
            key={z}
            onClick={() => setSelectedZone(z)}
            className={`flex-1 py-1 rounded text-[10px] font-mono font-semibold transition-all cursor-pointer ${
              selectedZone === z
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {z}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] bg-white dark:bg-slate-800/90 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
        <div>
          <span className="text-slate-500 dark:text-slate-400">Tier: </span>
          <b className="text-slate-800 dark:text-slate-200">{current.rate}</b>
        </div>
        <div className="text-right">
          <span className="text-slate-500 dark:text-slate-400">Allocation: </span>
          <b className={current.occupied === current.total ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}>
            {current.occupied}/{current.total} {current.occupied === current.total ? '(Full)' : '(Available)'}
          </b>
        </div>
      </div>
    </div>
  )
}

// ─── Main Application Component ───────────────────────────────────────────────
export default function PortfolioPage() {
  const { theme, toggleTheme } = useTheme()
  const [copied, setCopied] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const [techFilter, setTechFilter] = useState('All')
  const { ref: statsRef, inView: statsInView } = useInView(0.2)

  const copyEmail = () => {
    navigator.clipboard.writeText('rakibulislamemon04@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  // Scrollspy for navigation
  useEffect(() => {
    const sectionIds = ['home', 'education', 'projects', 'skills', 'contests', 'contact']
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredTech =
    techFilter === 'All' ? TECH_STACK : TECH_STACK.filter(t => t.category === techFilter)

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] selection:bg-indigo-500 selection:text-white relative transition-colors duration-300">
      {/* Precision technical grid overlay */}
      <div className="tech-grid fixed inset-0 pointer-events-none opacity-40 dark:opacity-25" />

      {/* Atmospheric lighting blurs — subtle refractions behind glass */}
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

      {/* ── Fixed Island Header / Navigation Bar ── */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="glass-nav max-w-5xl w-full rounded-2xl px-3.5 py-2.5 flex items-center justify-between">
          {/* Brand & Live Beacon */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              RE
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white leading-none">
                Rakibul Islam Emon
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 live-beacon" />
                Available for roles
              </span>
            </div>
          </a>

          {/* Nav Links Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            {[
              { id: 'home', label: 'Overview' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Stack' },
              { id: 'contests', label: 'Contests' },
              { id: 'contact', label: 'Contact' },
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeNav === item.id
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 font-semibold shadow-xs border border-slate-200/80 dark:border-slate-600/80'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/blog"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all flex items-center gap-1.5 ml-0.5"
            >
              <span>Journal</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-mono font-bold border border-indigo-200/70 dark:border-indigo-800/70">
                Blog
              </span>
            </Link>
          </nav>

          {/* Quick Action CTAs & Theme Switcher */}
          <div className="flex items-center gap-2">
            <Link
              to="/blog"
              className="md:hidden px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 bg-indigo-50/70 dark:bg-indigo-950/40 shadow-xs transition-all flex items-center gap-1"
            >
              <span>📖</span>
              <span>Blog</span>
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

            <button
              onClick={copyEmail}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Copied</span>
              ) : (
                <>
                  <span>📋</span>
                  <span className="hidden sm:inline">Copy Email</span>
                </>
              )}
            </button>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white shadow-xs transition-all flex items-center gap-1"
            >
              Resume <span className="text-slate-400 dark:text-indigo-200">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero Section (Editorial + Interactive Studio) ── */}
      <section id="home" className="pt-28 pb-16 px-6 relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Hero Statement */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Minimal Eyebrow Badge & Live Clock */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                SOFTWARE ENGINEER & COMPETITIVE PROGRAMMER
              </div>
              <LiveDhakaClock />
            </div>

            {/* Main Editorial Headline */}
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1]">
                Engineering scalable systems with{' '}
                <span className="gradient-accent">algorithmic precision.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
                Final-year CSE student at <strong className="text-slate-900 dark:text-white font-semibold">Ahsanullah University of Science and Technology</strong> (CGPA 3.63/4.00) and ICPC Dhaka Regional{' '}
                <strong className="text-indigo-600 dark:text-indigo-400 font-mono font-semibold">#44th Place</strong> finalist. Architecting high-throughput backend services, relational models, and algorithmic software.
              </p>
            </div>

            {/* Key Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
              >
                Explore Featured Systems <span>↓</span>
              </a>
              <button
                onClick={copyEmail}
                className="px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                {copied ? '✓ Email Copied to Clipboard' : 'Get in Touch'}
              </button>
              <a
                href="https://github.com/SHOEBILL04"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-sm font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
              >
                GitHub @SHOEBILL04 ↗
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">●</span>
                <span>Codeforces Pupil (1262)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">●</span>
                <span>Spring Boot & PostgreSQL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sky-600 dark:text-sky-400 font-bold">●</span>
                <span>AUST PIC Coordinator</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Studio Widget */}
          <div className="lg:col-span-6 relative">
            <InteractiveCodeStudio />
          </div>
        </div>

        {/* ── Impact Metrics Strip ── */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(stat => {
            const isDecimal = stat.value % 1 !== 0
            const count = useCountUp(stat.value, 1600, isDecimal ? 2 : 0, statsInView)
            return (
              <div
                key={stat.label}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden"
              >
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                  {stat.prefix ?? ''}{isDecimal ? count.toFixed(2) : Math.floor(count)}{stat.suffix}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-normal leading-snug">
                  {stat.subtext}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Education & Academic Background ── */}
      <section id="education" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
              [01] // ACADEMIC FOUNDATION
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Education & Institutional Excellence
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">2021 — 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* University */}
          <div className="glass-panel rounded-2xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-3">
                <span className="tag-badge text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800">
                  UNDERGRADUATE DEGREE
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">2023 — Present</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                Ahsanullah University of Science and Technology (AUST)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Bachelor of Science in Computer Science and Engineering (CSE)
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Cumulative GPA:</span>
                <span className="text-sm font-mono font-extrabold text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
                  3.63 / 4.00
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* High School */}
          <div className="glass-panel rounded-2xl p-6 relative flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-3">
                <span className="tag-badge text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800">
                  HIGHER SECONDARY CERTIFICATE
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">Passing Year: 2021</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                Dhaka City College
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Science Discipline — Mathematics, Physics & Information Technology
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Result:</span>
                <span className="text-sm font-mono font-extrabold text-sky-600 dark:text-sky-400 px-2.5 py-0.5 rounded bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800">
                  GPA 5.00 / 5.00
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Dhaka Board</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Systems & Projects ── */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
              [02] // FEATURED PROJECTS
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Featured Systems & Engineering Projects
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Engineered for university capstones and hackathons with relational databases, robust APIs, and clean UX.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shrink-0">
            Interactive Demos Included
          </div>
        </div>

        {/* 2x2 Grid with Interactive Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className="interactive-card rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs font-bold transition-all shrink-0"
                    title="View Source on GitHub"
                  >
                    ↗
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Interactive Mini UI Preview Widget */}
                <div className="mb-5">
                  {project.id === 'turfchai' && <TurfChaiInteractivePreview />}
                  {project.id === 'ecocycle' && <EcoCycleInteractivePreview />}
                  {project.id === 'lantern' && <LanternInteractivePreview />}
                  {project.id === 'mela' && <MelaInteractivePreview />}
                </div>
              </div>

              {/* Tags & Actions */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1"
                >
                  GitHub Repository <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technical Stack & Architecture ── */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
              [03] // TECHNICAL MATRIX
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
              Languages, Frameworks & Infrastructure
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {['All', 'Languages', 'Backend', 'Frontend', 'Databases'].map(filter => (
              <button
                key={filter}
                onClick={() => setTechFilter(filter)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  techFilter === filter
                    ? 'bg-slate-900 dark:bg-indigo-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid with Official Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredTech.map(item => {
            const Icon = item.Icon
            return (
              <div
                key={item.name}
                className="glass-panel p-3.5 rounded-xl flex items-center justify-between group hover:border-indigo-300 dark:hover:border-indigo-500"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon width={16} height={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                      {item.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">{item.category}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 group-hover:border-indigo-200 dark:group-hover:border-indigo-800 transition-colors shrink-0 ml-1">
                  {item.badge}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Competitive Programming & Online Judges ── */}
      <section id="contests" className="py-16 px-6 max-w-6xl mx-auto border-t border-slate-100 dark:border-slate-800/80">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
            [04] // ALGORITHMIC EXCELLENCE
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white">
            Contest Journey & Online Judge Ratings
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Active competitive programming trajectory with over 1,000 solved problems across global algorithmic platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Online Judges Profile Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3.5">
            <div className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
              Verified Judge Profiles
            </div>

            {[
              {
                platform: 'Codeforces',
                handle: 'SHOEBILL',
                metric: 'Max Rating: 1262',
                badge: 'Pupil',
                color: '#4f46e5',
                url: 'https://codeforces.com/profile/SHOEBILL',
                Icon: CodeforcesLogo,
              },
              {
                platform: 'CodeChef',
                handle: 'shoebill',
                metric: 'Rank: 3-Star (1600+)',
                badge: 'Division 2',
                color: '#0284c7',
                url: 'https://www.codechef.com/users/shoebill',
                Icon: CodeChefLogo,
              },
              {
                platform: 'AtCoder',
                handle: 'SHOEBILL_04',
                metric: 'Rating: 665',
                badge: 'Regular Contender',
                color: '#7c3aed',
                url: 'https://atcoder.jp/users/SHOEBILL_04',
                Icon: AtCoderLogo,
              },
            ].map(judge => {
              const Icon = judge.Icon
              return (
                <a
                  key={judge.platform}
                  href={judge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center justify-between group hover:border-indigo-300 dark:hover:border-indigo-500"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <Icon width={22} height={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {judge.platform}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">@{judge.handle}</span>
                      </div>
                      <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mt-0.5">{judge.metric}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {judge.badge}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500 text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </div>
                </a>
              )
            })}

            {/* ICPC Highlight Callout */}
            <div className="bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 rounded-xl p-4 mt-2 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0 shadow-xs">
                <IcpcLogo width={22} height={22} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display font-bold text-slate-900 dark:text-white text-sm">
                    ICPC Dhaka Regional 2025
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ranked <strong className="text-indigo-700 dark:text-indigo-300 font-mono">44th Place</strong> among the premier collegiate teams of Bangladesh, solving complex graph theory and dynamic programming challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Contest Achievement Timeline (7 cols) with Logos */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              Major National & Inter-University Contests (2025)
            </div>

            <div className="flex flex-col gap-2">
              {CONTESTS.map((contest, i) => {
                const Icon = contest.Icon
                return (
                  <div
                    key={i}
                    className="glass-panel px-4 py-3.5 rounded-xl flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon width={20} height={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                          {contest.event}
                        </div>
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {contest.type.toUpperCase()} • {contest.year}
                        </div>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 px-2.5 py-1 rounded-md shrink-0 ml-3">
                      {contest.rank}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact & Collaboration Callout ── */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-lg">
          {/* Top minimal technical indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            OPEN FOR OPPORTUNITIES
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-4">
            {"Let's build reliable software together."}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Available for software engineering roles, full-stack systems engineering, and collaborative projects. Feel free to reach out directly.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyEmail}
              className="btn-primary px-7 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-md"
            >
              {copied ? '✓ Email Copied!' : '📋 Copy Email Address'}
            </button>
            <a
              href="mailto:rakibulislamemon04@gmail.com"
              className="px-6 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 shadow-xs transition-all"
            >
              Send Direct Email ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50 dark:bg-slate-800/60 transition-all"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Email: rakibulislamemon04@gmail.com</span>
            <span>Phone: +880 1879 020129</span>
            <span>Location: Dhaka, Bangladesh</span>
          </div>
        </div>
      </section>

      {/* ── Clean Technical Footer ── */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070b14] py-10 px-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-slate-200">Rakibul Islam Emon</span>
            <span>/</span>
            <span>Portfolio 2026</span>
          </div>
          <div>
            Built with React 19, TypeScript & Tailwind CSS v4
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/SHOEBILL04" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://codeforces.com/profile/SHOEBILL" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              Codeforces
            </a>
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              Resume PDF
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
