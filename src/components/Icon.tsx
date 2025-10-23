import type { ReactNode } from 'react'
import type { IconName } from '../types'

type IconProps = {
  name: IconName
  className?: string
}

const paths: Record<IconName, ReactNode> = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  camera: (
    <>
      <path d="M9 7.5 10.5 5h3l1.5 2.5h3A2.5 2.5 0 0 1 20.5 10v7A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17v-7A2.5 2.5 0 0 1 6 7.5z" />
      <circle cx="12" cy="13.5" r="3.5" />
      <circle cx="17" cy="10" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  upload: (
    <>
      <path d="M12 4v12" />
      <path d="m7.5 9.5 4.5-5 4.5 5" />
      <path d="M5 16v2.5A1.5 1.5 0 0 0 6.5 20h11A1.5 1.5 0 0 0 19 18.5V16" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19h16" />
      <rect x="6" y="11" width="3" height="6" rx="1.2" />
      <rect x="11" y="7" width="3" height="10" rx="1.2" />
      <rect x="16" y="4" width="3" height="13" rx="1.2" />
    </>
  ),
  users: (
    <>
      <path d="M12 12a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 12 12" />
      <path d="M6.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="18" cy="8" r="2.5" />
      <path d="M20 19.5a3.5 3.5 0 0 0-2.5-3.4" />
    </>
  ),
  lightning: (
    <>
      <path d="m11 3-3 9h4v9l4-11h-4l2-7z" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21c5-2 8-4.5 8-11V6l-8-3-8 3v4c0 6.5 3 9 8 11" />
    </>
  ),
  bell: (
    <>
      <path d="M6 10.5a6 6 0 1 1 12 0c0 5.5 2 6.5 2 6.5H4s2-1 2-6.5" />
      <path d="M10 19.5a2 2 0 0 0 4 0" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="m19.4 15.5-.9 1.5-1.8-.3a6.5 6.5 0 0 1-1.1.6l-.3 1.8h-1.8l-.3-1.8a6.5 6.5 0 0 1-1.1-.6l-1.8.3-.9-1.5 1.5-1.1a6.6 6.6 0 0 1-.1-1.3 6.6 6.6 0 0 1 .1-1.3l-1.5-1.1.9-1.5 1.8.3a6.5 6.5 0 0 1 1.1-.6l.3-1.8h1.8l.3 1.8a6.5 6.5 0 0 1 1.1.6l1.8-.3.9 1.5-1.5 1.1c.07.4.1.85.1 1.3s-.03.9-.1 1.3z" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3.5 1.4 3.9 3.9 1.4-3.9 1.4-1.4 3.9-1.4-3.9-3.9-1.4 3.9-1.4z" />
      <path d="m6 14.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
      <path d="m18 14.5.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" />
    </>
  ),
  'trend-up': (
    <>
      <path d="M3.5 17.5h17" />
      <path d="m5.5 11.5 4 4 4.5-5 4 4 1.5-1.5" />
    </>
  ),
  image: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m20 15-3.5-3.5-4 4L10 13l-6 6" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20s-7-4.6-7-10a4.1 4.1 0 0 1 7-2.7A4.1 4.1 0 0 1 19 10c0 5.4-7 10-7 10" />
    </>
  ),
  comment: (
    <>
      <path d="M5 18.5 5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H9l-4 4z" />
    </>
  ),
  bookmark: (
    <>
      <path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1" />
    </>
  ),
  share: (
    <>
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7.7 10.9 16.3 7" />
      <path d="M7.7 13.1 16.3 17" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9" />
    </>
  ),
  inbox: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 14h3l2 2h6l2-2h3" />
      <path d="m9.5 9.5 2.5 2.5 2.5-2.5" />
      <path d="M12 6v6" />
    </>
  ),
  play: (
    <>
      <path d="M8.5 6.5v11l9-5.5z" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </>
  ),
  check: (
    <>
      <path d="m5.5 12.5 3.5 3.5 9-9" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  login: (
    <>
      <path d="M15 4h2.5A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20H15" />
      <path d="m11 8-4 4 4 4" />
      <path d="M7 12h11" />
    </>
  ),
  logout: (
    <>
      <path d="M9 4H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H9" />
      <path d="m13 16 4-4-4-4" />
      <path d="M7 12h10" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v12" />
      <path d="m7.5 11.5 4.5 4.5 4.5-4.5" />
      <path d="M5 19h14" />
    </>
  ),
  palette: (
    <>
      <path d="M12 4a8 8 0 1 0 0 16 2.3 2.3 0 0 0 2.3-2.3 1.7 1.7 0 0 0-1.1-1.6c-1.1-.4-1.2-1.9 0-2.2h1a3.3 3.3 0 0 0 0-6.6z" />
      <circle cx="8.5" cy="9" r="1" />
      <circle cx="7" cy="12.5" r="1" />
      <circle cx="10.5" cy="7" r="1" />
      <circle cx="15.5" cy="8" r="1" />
    </>
  ),
  layers: (
    <>
      <path d="m12 4 8 4-8 4-8-4z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
      <path d="M3 11h18" />
    </>
  ),
  sliders: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="17" r="2" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10.8V19a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-8.2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M6.5 19.5a5.5 5.5 0 0 1 11 0" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-7 7-9-9Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10.5a3 3 0 0 1 6 0c0 1.8-2 2.3-2 4" />
      <circle cx="12" cy="17.5" r="1" />
    </>
  ),
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
