import type { FC, SVGProps } from 'react'

import {
  ICPC_LOGO_DATA_URI,
  ATCODER_LOGO_DATA_URI,
  CODECHEF_LOGO_DATA_URI,
} from './logoAssets'

type IconProps = SVGProps<SVGSVGElement>

// ─── Online Judge Logos ───────────────────────────────────────────────────────

/** Official Codeforces 3-bar Logo */
export const CodeforcesLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <rect x="1.5" y="9" width="5" height="13" rx="1.5" fill="#ECA21B" />
    <rect x="9.5" y="2" width="5" height="20" rx="1.5" fill="#2F7BBD" />
    <rect x="17.5" y="6" width="5" height="16" rx="1.5" fill="#B92928" />
  </svg>
)

/** Official CodeChef Chef Mascot Logo */
export const CodeChefLogo: FC<any> = ({ width = 24, height = 24, className = '', ...rest }) => (
  <img
    src={CODECHEF_LOGO_DATA_URI}
    alt="CodeChef"
    width={width}
    height={height}
    className={`object-contain ${className}`}
    style={{ width, height }}
    {...rest}
  />
)

/** Official AtCoder Crest Logo from atcoder.jp */
export const AtCoderLogo: FC<any> = ({ width = 24, height = 24, className = '', ...rest }) => (
  <img
    src={ATCODER_LOGO_DATA_URI}
    alt="AtCoder"
    width={width}
    height={height}
    className={`object-contain ${className}`}
    style={{ width, height }}
    {...rest}
  />
)

/** Official ICPC Logo (Idea, Algorithm, Solution) */
export const IcpcLogo: FC<any> = ({ width = 24, height = 24, className = '', ...rest }) => (
  <img
    src={ICPC_LOGO_DATA_URI}
    alt="ICPC"
    width={width}
    height={height}
    className={`object-contain ${className}`}
    style={{ width, height }}
    {...rest}
  />
)

/** National IUPC Contest Trophy / Crest */
export const NationalContestLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <circle cx="12" cy="12" r="10.5" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.2" />
    <path
      d="M8 7H16V11C16 13.2 14.2 15 12 15C9.8 15 8 13.2 8 11V7Z"
      fill="#16A34A"
    />
    <path d="M8 8.5H6C5.4 8.5 5 8.9 5 9.5C5 11 6.2 12.2 7.7 12.4" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M16 8.5H18C18.6 8.5 19 8.9 19 9.5C19 11 17.8 12.2 16.3 12.4" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 15V18M9.5 18H14.5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

/** Collaborative / Inter-University Medal Logo */
export const CollaborativeLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <circle cx="12" cy="12" r="10.5" fill="#F0F9FF" stroke="#0284C7" strokeWidth="1.2" />
    <path d="M8 6L12 13L16 6" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="15" r="3.5" fill="#0284C7" />
    <path d="M12 13.5L12.8 15.2L14.5 15.3L13.2 16.3L13.6 18L12 17L10.4 18L10.8 16.3L9.5 15.3L11.2 15.2L12 13.5Z" fill="#FFFFFF" />
  </svg>
)

/** Intra-University AUST Badge Logo */
export const IntraAustLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" {...props}>
    <circle cx="12" cy="12" r="10.5" fill="#FAF5FF" stroke="#9333EA" strokeWidth="1.2" />
    <path
      d="M12 5L17.5 8.5V14C17.5 17 14.8 19.3 12 20C9.2 19.3 6.5 17 6.5 14V8.5L12 5Z"
      fill="#9333EA"
      opacity="0.15"
      stroke="#9333EA"
      strokeWidth="1.3"
    />
    <path d="M12 8L15 14H9L12 8Z" fill="#9333EA" />
  </svg>
)

// ─── Technical Matrix Tech Logos ──────────────────────────────────────────────

export const CppLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" fill="#00599C" />
    <path d="M12 6.5C9 6.5 7 8.8 7 12C7 15.2 9 17.5 12 17.5C13.8 17.5 15.2 16.7 16 15.2L14.2 14C13.7 14.8 12.9 15.3 12 15.3C10.3 15.3 9.2 13.9 9.2 12C9.2 10.1 10.3 8.7 12 8.7C13 8.7 13.8 9.2 14.3 10L16.1 8.8C15.3 7.3 13.8 6.5 12 6.5Z" fill="#FFFFFF" />
    <path d="M17 11V13M16 12H18M20.5 11V13M19.5 12H21.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

export const PythonLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M11.9 2C8.3 2 8.6 3.5 8.6 3.5L8.6 5.1H12.1V5.6H5.2C3.1 5.6 1.4 7 1.4 10.4C1.4 14.3 2.7 14.1 2.7 14.1H4.3V12.1C4.3 9.8 6.2 9.8 6.2 9.8H9.7C12.1 9.8 12.1 7.6 12.1 7.6V2.6C12.1 2.6 12.9 2 11.9 2ZM9.6 3.6C10.2 3.6 10.7 4.1 10.7 4.7C10.7 5.3 10.2 5.8 9.6 5.8C9 5.8 8.5 5.3 8.5 4.7C8.5 4.1 9 3.6 9.6 3.6Z" fill="#3776AB" />
    <path d="M12.1 22C15.7 22 15.4 20.5 15.4 20.5V18.9H11.9V18.4H18.8C20.9 18.4 22.6 17 22.6 13.6C22.6 9.7 21.3 9.9 21.3 9.9H19.7V11.9C19.7 14.2 17.8 14.2 17.8 14.2H14.3C11.9 14.2 11.9 16.4 11.9 16.4V21.4C11.9 21.4 11.1 22 12.1 22ZM14.4 20.4C13.8 20.4 13.3 19.9 13.3 19.3C13.3 18.7 13.8 18.2 14.4 18.2C15 18.2 15.5 18.7 15.5 19.3C15.5 19.9 15 20.4 14.4 20.4Z" fill="#FFD43B" />
  </svg>
)

export const JavaLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M8.5 18.5C8.5 18.5 11.2 19.2 13.6 18.2C14.8 17.7 15.8 16.8 15.8 16.8C15.8 16.8 14.8 17.3 13.6 17.4C11.4 17.6 9.5 17.1 8.5 18.5Z" fill="#E76F00" />
    <path d="M7 21C7 21 11 22.5 14.8 21C16.8 20.2 18.5 18.5 18.5 18.5C18.5 18.5 17 19.5 14.8 19.9C11.5 20.5 8.7 19.8 7 21Z" fill="#E76F00" />
    <path d="M13.2 2C13.2 2 15.5 4.5 13.2 7C11.8 8.6 11.2 10.2 12.5 11.8C10.5 10.2 10.5 8.5 11.8 7C13.2 5.5 13.2 2 13.2 2Z" fill="#5382A1" />
    <path d="M15.5 5C15.5 5 17.5 7 15.5 9.5C14.2 11.1 13.8 12.2 14.8 13.8C13 12.2 13.2 10.8 14.2 9.5C15.2 8.2 15.5 5 15.5 5Z" fill="#E76F00" />
  </svg>
)

export const TypeScriptLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M5 10H12M8.5 10V18" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="square" />
    <path d="M18.8 11.8C18.2 11.2 17.2 10.8 16 10.8C14.2 10.8 13.2 11.8 13.2 13C13.2 14.2 14 14.9 15.6 15.4L16.2 15.6C17.4 16 18 16.5 18 17.3C18 18.3 17 19 15.4 19C14 19 12.8 18.3 12.2 17.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const JavaScriptLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <path d="M7 12V16.8C7 18.5 8.2 19 9.5 19C10.8 19 11.5 18.2 11.5 17.2V12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 13C18.5 12.4 17.6 12 16.4 12C14.8 12 14 12.9 14 13.9C14 15 14.8 15.6 16.2 16L16.7 16.2C17.8 16.5 18.3 17 18.3 17.7C18.3 18.6 17.4 19.2 16 19.2C14.8 19.2 13.8 18.5 13.3 17.8" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const PhpLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
    <text x="12" y="14.5" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="system-ui">PHP</text>
  </svg>
)

export const SpringBootLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#6DB33F" />
    <path d="M15.5 8C12.5 8 9 10 8 13C7 16 8.5 17.5 10.5 17.5C13.5 17.5 17 15 18 12C18.8 9.6 17.5 8 15.5 8Z" fill="#FFFFFF" />
    <circle cx="11" cy="14" r="1.5" fill="#6DB33F" />
  </svg>
)

export const LaravelLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M19 6.5L12 2.5L5 6.5V17.5L12 21.5L19 17.5V6.5Z" fill="#FF2D20" />
    <path d="M12 2.5V21.5M19 6.5L12 10.5L5 6.5" stroke="#FFFFFF" strokeWidth="1.2" />
    <path d="M19 17.5L12 13.5L5 17.5" stroke="#FFFFFF" strokeWidth="1.2" />
  </svg>
)

export const NodeLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M12 2L21 7.2V17.8L12 23L3 17.8V7.2L12 2Z" fill="#339933" />
    <path d="M12 7V17M8 9.5L16 14M8 14.5L16 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const ExpressLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#000000" />
    <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">ex</text>
  </svg>
)

export const ReactLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
)

export const NextLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <circle cx="12" cy="12" r="11" fill="#000000" />
    <path d="M8 8V16M8 8L16.5 18M16 8V14" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const PostgreSqlLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M12 2C6.5 2 2.5 6 2.5 11.5C2.5 16 6 19.5 10.5 20.2V22L13.5 20.3C18.5 19.8 22 16.2 22 11.5C22 6 17.5 2 12 2Z" fill="#4169E1" />
    <circle cx="9" cy="9" r="1.5" fill="#FFFFFF" />
    <path d="M13 8C16 8 18 10 18 13C18 16 15 17 13 17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const MsSqlLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect x="2" y="3" width="20" height="5" rx="2.5" fill="#CC292B" />
    <rect x="2" y="9.5" width="20" height="5" rx="2.5" fill="#CC292B" opacity="0.85" />
    <rect x="2" y="16" width="20" height="5" rx="2.5" fill="#CC292B" opacity="0.7" />
  </svg>
)

export const MySqlLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#00758F" />
    <path d="M5 16C7 11 11 9 17 9C19 9 20 10 20 10C20 10 18 12 16 12C12 12 9 14 7 17" stroke="#F29111" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="8" r="1.2" fill="#FFFFFF" />
  </svg>
)

export const MongoDbLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <path d="M12 2C12 2 6 7 6 13C6 17 9 20.5 12 22C15 20.5 18 17 18 13C18 7 12 2 12 2Z" fill="#47A248" />
    <path d="M12 4V20" stroke="#FFFFFF" strokeWidth="1.2" />
  </svg>
)

export const PlPgSqlLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#336791" />
    <path d="M6 8L10 12L6 16M12 16H18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const LinuxLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <ellipse cx="12" cy="13" rx="7" ry="8" fill="#1E293B" />
    <ellipse cx="12" cy="14" rx="5" ry="6" fill="#FFFFFF" />
    <ellipse cx="12" cy="6" rx="4" ry="4" fill="#1E293B" />
    <circle cx="10.5" cy="5.5" r="0.8" fill="#FFFFFF" />
    <circle cx="13.5" cy="5.5" r="0.8" fill="#FFFFFF" />
    <polygon points="12,7 10,9 14,9" fill="#FFA500" />
    <ellipse cx="8" cy="20" rx="3" ry="1.5" fill="#FFA500" />
    <ellipse cx="16" cy="20" rx="3" ry="1.5" fill="#FFA500" />
  </svg>
)

export const GitLogo: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props}>
    <rect width="24" height="24" rx="4" fill="#F05032" />
    <circle cx="8" cy="8" r="2" fill="#FFFFFF" />
    <circle cx="16" cy="8" r="2" fill="#FFFFFF" />
    <circle cx="12" cy="16" r="2" fill="#FFFFFF" />
    <path d="M8 8V12L12 16M16 8V12L12 16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
