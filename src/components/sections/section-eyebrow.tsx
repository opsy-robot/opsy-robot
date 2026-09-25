import { cn } from "@/lib/utils"

export function SectionEyebrow({ children, className, dark }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return (
    <p
      className={cn(
        "mb-5 inline-flex -rotate-2 items-center gap-2 rounded-full border-[3px] border-ink px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-toon",
        dark ? "bg-sun text-ink" : "bg-ink text-cream",
        className
      )}
    >
      <span className="size-2.5 rounded-full border-2 border-current bg-bubble" aria-hidden />
      {children}
    </p>
  )
}
