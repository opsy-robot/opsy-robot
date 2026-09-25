"use client"

import * as React from "react"
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { progress } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { SectionEyebrow } from "./section-eyebrow"

const stageColors = ["bg-sun", "bg-sky", "bg-bubble", "bg-lime", "bg-tang", "bg-sky", "bg-sun", "bg-lime"]

export function Progress() {
  const [stage, setStage] = React.useState(progress.stages.length - 1)
  const [playing, setPlaying] = React.useState(false)
  const [photo, setPhoto] = React.useState<number | null>(null)
  const vRef = React.useRef<HTMLVideoElement>(null)
  const rail = React.useRef<HTMLDivElement>(null)
  const current = progress.stages[stage]
  const isFinal = stage === progress.stages.length - 1
  const pct = ((stage + 1) / progress.stages.length) * 100

  // keep the selected stage visible in the rail on first paint
  React.useEffect(() => {
    const el = rail.current?.querySelector<HTMLElement>(`[data-stage="${progress.stages.length - 1}"]`)
    if (el && rail.current) rail.current.scrollLeft = el.offsetLeft
  }, [])

  const toggleVideo = () => {
    const v = vRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {}); else v.pause()
  }

  return (
    <section id="progress" className="relative scroll-mt-4 border-b-[4px] border-ink bg-sky">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:pl-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>{progress.eyebrow}</SectionEyebrow>
            <h2 className="font-display text-6xl leading-[0.95] text-paper text-outline text-pop sm:text-7xl lg:text-8xl">{progress.title}</h2>
          </div>
          <div className="rotate-2 rounded-3xl border-[3px] border-ink bg-lime px-5 py-3 shadow-toon">
            <p className="font-mono text-xs font-bold uppercase tracking-wider">{progress.badgeTop}</p>
            <p className="font-display text-xl">{progress.badgeBottom}</p>
          </div>
        </div>

        {/* Status card */}
        <Card className="mt-12 grid gap-0 overflow-hidden md:grid-cols-[240px_1fr]">
          <div className="relative aspect-[4/5] border-b-[3px] border-ink bg-ink md:aspect-auto md:min-h-[300px] md:border-b-0 md:border-r-[3px]">
            {isFinal ? (
              <>
                <video
                  ref={vRef}
                  className="absolute inset-0 size-full object-cover"
                  src={progress.latest.video}
                  poster={progress.latest.poster}
                  playsInline
                  loop
                  preload="metadata"
                  onPause={() => setPlaying(false)}
                  onPlay={() => setPlaying(true)}
                />
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={playing ? "Pause rebuild video" : progress.latest.play}
                  className="toon-press absolute right-3 top-3 grid size-12 place-items-center rounded-full border-[3px] border-ink bg-sun shadow-toon outline-none focus-visible:ring-4 focus-visible:ring-paper"
                >
                  {playing ? <Pause className="size-5" strokeWidth={3} /> : <Play className="size-5" strokeWidth={3} />}
                </button>
              </>
            ) : (
              <img src={current.img} alt={current.title} className="absolute inset-0 size-full object-cover" />
            )}
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border-[3px] border-ink bg-paper px-3 py-2">
              <p className="font-display text-lg leading-none">{isFinal ? progress.latest.label : `Stage ${current.n}`}</p>
              <p className="mt-1 font-mono text-[11px] font-bold text-ink-soft">{isFinal ? progress.latest.date : current.title}</p>
            </div>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-[1.9fr_1fr_1fr_1.25fr]">
            <div className="flex flex-col justify-center gap-3 border-b-[3px] border-ink p-6 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r-[3px]">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                {isFinal ? "Build complete · 2026.09.14" : "Stage complete"}
              </p>
              <div className="flex items-end justify-between gap-3">
                <p className="text-xl font-semibold leading-snug">{isFinal ? "Rebuild complete. Every test passed." : current.title}</p>
                <p className="shrink-0 whitespace-nowrap font-display text-4xl text-grape">{current.n} / 08</p>
              </div>
              <div className="h-5 overflow-hidden rounded-full border-[3px] border-ink bg-cream" role="progressbar" aria-valuenow={stage + 1} aria-valuemin={0} aria-valuemax={8}>
                <div className="h-full rounded-full bg-bubble transition-[width] duration-500 [transition-timing-function:cubic-bezier(.34,1.56,.64,1)]" style={{ width: `${pct}%` }} />
              </div>
            </div>
            {progress.cells.map((c, i) => (
              <div key={c.k} className={cn("flex flex-col justify-center gap-1 p-6", i < 2 && "border-b-[3px] border-ink sm:border-b-0 lg:border-r-[3px]", i === 0 && "sm:border-r-[3px]", i === 1 && "sm:border-b-0")}>
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-soft">{c.k}</p>
                <p className="text-lg font-semibold leading-snug">{c.v}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Official policies */}
        <Card className="mt-10 grid items-center gap-8 bg-night p-6 text-cream md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <Badge variant="default">{progress.policies.eyebrow}</Badge>
            <h3 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl">{progress.policies.title}</h3>
            <p className="mt-4 text-lg text-cream/90">{progress.policies.sub}</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {progress.policies.moves.map((m, i) => (
                <li key={m} className={cn("toon-press inline-flex items-center gap-1.5 rounded-full border-[2.5px] border-ink px-3 py-1 text-sm font-semibold text-ink shadow-toon", stageColors[i % stageColors.length])}>
                  <Check className="size-3.5" strokeWidth={3.5} /> {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[300px] -rotate-2 overflow-hidden rounded-[28px] border-[4px] border-ink bg-ink shadow-[8px_8px_0_0_var(--sun)]">
            <video className="aspect-[9/16] w-full object-cover" src={progress.policies.video} poster={progress.policies.poster} controls playsInline preload="metadata" />
          </div>
        </Card>

        {/* Meet our duck */}
        <div className="mt-20">
          <SectionEyebrow dark>{progress.meet.eyebrow}</SectionEyebrow>
          <h3 className="font-display text-5xl leading-none sm:text-6xl">{progress.meet.title}</h3>
          <p className="mt-3 text-xl font-medium">{progress.meet.sub}</p>
          <div className="mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-7">
            {progress.meet.photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setPhoto(i)}
                className="toon-lift group rounded-[26px] border-[3px] border-ink bg-paper p-2.5 text-left shadow-toon-lg outline-none focus-visible:ring-4 focus-visible:ring-paper"
                style={{ rotate: p.tilt, ["--hr" as string]: "0deg" }}
                aria-label={`Open photo: ${p.caption}`}
              >
                <span className="block aspect-[3/4] overflow-hidden rounded-[18px] border-[3px] border-ink">
                  <img src={p.src} alt={p.caption} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </span>
                <span className="flex items-start justify-between gap-2 px-1.5 pb-1 pt-3">
                  <span className="flex items-start gap-2">
                    <span className={cn("grid size-7 shrink-0 place-items-center rounded-full border-[2.5px] border-ink font-mono text-[11px] font-bold", p.color)}>0{i + 1}</span>
                    <span className="text-base font-semibold leading-snug">{p.caption}</span>
                  </span>
                  <ArrowUpRight className="mt-0.5 size-5 shrink-0" strokeWidth={3} />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stage rail */}
        <div className="mt-16 flex items-center justify-between gap-4">
          <p className="font-mono text-sm font-bold uppercase tracking-wider">{progress.swipeHint} →</p>
          <div className="hidden gap-3 sm:flex">
            <button type="button" aria-label="Scroll stages left" onClick={() => rail.current?.scrollBy({ left: -520, behavior: "smooth" })}
              className="toon-press grid size-11 place-items-center rounded-full border-[3px] border-ink bg-paper shadow-toon"><ChevronLeft strokeWidth={3} /></button>
            <button type="button" aria-label="Scroll stages right" onClick={() => rail.current?.scrollBy({ left: 520, behavior: "smooth" })}
              className="toon-press grid size-11 place-items-center rounded-full border-[3px] border-ink bg-paper shadow-toon"><ChevronRight strokeWidth={3} /></button>
          </div>
        </div>
        <div ref={rail} className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 pt-2 sm:-mx-6 sm:px-6">
          {progress.stages.map((s, i) => {
            const on = i === stage
            return (
              <button
                key={s.n}
                type="button"
                data-stage={i}
                onClick={() => setStage(i)}
                aria-pressed={on}
                aria-label={`View stage ${Number(s.n)}: ${s.title}, Complete`}
                className={cn(
                  "toon-press w-60 shrink-0 snap-start overflow-hidden rounded-[24px] border-[3px] border-ink bg-paper text-left shadow-toon outline-none focus-visible:ring-4 focus-visible:ring-paper",
                  on && "-translate-y-2 ring-4 ring-sun"
                )}
              >
                <span className="block aspect-[4/3] overflow-hidden border-b-[3px] border-ink">
                  <img src={s.img} alt="" loading="lazy" className="size-full object-cover" />
                </span>
                <span className={cn("block p-4", stageColors[i])}>
                  <span className="flex items-center justify-between">
                    <span className="font-display text-2xl">{s.n}</span>
                    <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-paper px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                      <Check className="size-3" strokeWidth={4} /> Complete
                    </span>
                  </span>
                  <span className="mt-1 block min-h-12 text-lg font-semibold leading-snug">{s.title}</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Photo lightbox */}
      <Dialog open={photo !== null} onOpenChange={(o) => !o && setPhoto(null)}>
        <DialogContent closeLabel="Close photo" className="max-w-3xl bg-paper p-3">
          {photo !== null && (
            <>
              <DialogTitle className="sr-only">{progress.meet.photos[photo].caption}</DialogTitle>
              <img src={progress.meet.photos[photo].src} alt={progress.meet.photos[photo].caption} className="max-h-[78dvh] w-full rounded-[22px] border-[3px] border-ink object-contain" />
              <div className="flex items-center justify-between gap-3 px-2 pt-3">
                <p className="font-display text-2xl">{progress.meet.photos[photo].caption}</p>
                <a href={progress.meet.photos[photo].src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4">
                  Full size <ArrowUpRight className="size-4" strokeWidth={3} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
