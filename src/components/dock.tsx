"use client"

import * as React from "react"
import { nav } from "@/lib/content"
import { cn } from "@/lib/utils"

// Floating section dock — vertical on desktop, bottom pill on mobile. Scroll-spy highlights the current section.
export function Dock() {
  const [active, setActive] = React.useState<string>(nav[0].id)

  React.useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    const onScroll = () => {
      const mid = window.innerHeight * 0.4
      let current = els[0]?.id
      for (const el of els) if (el.getBoundingClientRect().top <= mid) current = el.id
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="fixed z-40 bottom-4 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-5 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
    >
      <ul className="flex gap-1.5 rounded-full border-[3px] border-ink bg-paper p-1.5 shadow-toon lg:flex-col">
        {nav.map((n) => {
          const on = active === n.id
          return (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={on ? "true" : undefined}
                className={cn(
                  "group relative grid size-11 place-items-center rounded-full border-[2.5px] font-mono text-xs font-bold transition-all duration-300 [transition-timing-function:cubic-bezier(.34,1.56,.64,1)]",
                  on ? "scale-110 border-ink bg-sun text-ink" : "border-transparent text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-cream"
                )}
              >
                {n.num}
                <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-full border-[2.5px] border-ink bg-ink px-3 py-1 font-sans text-sm font-semibold text-cream opacity-0 transition-opacity group-hover:opacity-100 lg:block">
                  {n.label}
                </span>
                <span className="sr-only lg:hidden">{n.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
