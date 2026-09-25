import { cn } from "@/lib/utils"

// Original Opsy Robot mark — a round bot head with one big eye and a beak visor.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-10", className)} aria-hidden="true">
      <rect x="6" y="10" width="52" height="40" rx="18" fill="#fff" stroke="#141019" strokeWidth="4" />
      <path d="M8 38h48v6a10 10 0 0 1-10 10H18A10 10 0 0 1 8 44z" fill="#ff8a1f" stroke="#141019" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="38" cy="27" r="10" fill="#ffd23f" stroke="#141019" strokeWidth="4" />
      <circle cx="39" cy="27" r="4" fill="#141019" />
      <circle cx="41" cy="25" r="1.5" fill="#fff" />
      <path d="M30 4l4 6M40 3l-2 7" stroke="#141019" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#purpose" className={cn("group inline-flex items-center gap-2", className)} aria-label="Opsy Robot — back to top">
      <LogoMark className="transition-transform duration-300 [transition-timing-function:cubic-bezier(.34,1.56,.64,1)] group-hover:-rotate-12 group-hover:scale-110" />
      <span className="font-display text-2xl leading-none tracking-wide">Opsy Robot</span>
    </a>
  )
}
