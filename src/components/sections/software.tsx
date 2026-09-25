"use client"

import * as React from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { software } from "@/lib/content"
import { site, githubLabel } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { GithubIcon } from "@/components/icons"
import { SectionEyebrow } from "./section-eyebrow"

const chip = ["bg-sun", "bg-sky", "bg-bubble", "bg-lime", "bg-tang", "bg-sky", "bg-sun"]

export function Software() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    const on = () => setIndex(api.selectedScrollSnap())
    on()
    api.on("select", on)
    return () => { api.off("select", on) }
  }, [api])

  return (
    <section id="software" className="relative scroll-mt-4 overflow-hidden bg-night text-cream">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="pointer-events-none absolute -right-20 top-10 hidden size-72 rounded-full lg:block border-[4px] border-ink bg-grape" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:pl-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionEyebrow dark>{software.eyebrow}</SectionEyebrow>
            <p className="text-xl font-medium text-cream/90">{software.kicker}</p>
            <h2 className="mt-2 font-display text-7xl leading-none text-sun text-outline text-pop sm:text-8xl lg:text-9xl">{software.title}</h2>
            <p className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{software.tagline}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90">{software.lead}</p>
            <ul className="mt-6 grid gap-2.5">
              {software.bullets.map((b, i) => (
                <li key={b} className="flex items-center gap-3 text-lg font-medium">
                  <span className={cn("grid size-7 shrink-0 place-items-center rounded-full border-[2.5px] border-ink text-ink", chip[i])}>
                    <Check className="size-4" strokeWidth={3.5} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="toon-press inline-flex items-center gap-3 rounded-full border-[3px] border-ink bg-paper px-5 py-3 text-ink shadow-[4px_4px_0_0_var(--sun)] outline-none focus-visible:ring-4 focus-visible:ring-sun"
              >
                <GithubIcon className="size-5" />
                <span className="font-display text-lg">GitHub</span>
                <span className="font-mono text-sm font-bold text-grape">{githubLabel}</span>
              </a>
              <Badge variant="pink" className="-rotate-3 text-sm">{software.building}</Badge>
            </div>
          </div>

          <div>
            <Carousel setApi={setApi} opts={{ loop: true }} className="mx-auto w-full max-w-[460px]">
              <CarouselContent>
                {software.slides.map((s) => (
                  <CarouselItem key={s.src}>
                    <div className="overflow-hidden rounded-[32px] border-[4px] border-ink bg-paper shadow-[10px_10px_0_0_var(--bubble)]">
                      <img src={s.src} alt={`Ducklink app — ${s.label}`} className="aspect-[3/4] w-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-sm font-bold text-sun">0{index + 1} / 0{software.slides.length}</p>
                  <p className="font-display text-2xl">{software.slides[index]?.label}</p>
                </div>
                <div className="flex items-center gap-3">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </div>
              <div className="mt-4 flex gap-2" role="tablist" aria-label="Ducklink screens">
                {software.slides.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={s.label}
                    onClick={() => api?.scrollTo(i)}
                    className={cn("h-3.5 rounded-full border-[2.5px] border-ink transition-all duration-300", i === index ? "w-12 bg-sun" : "w-6 bg-cream/80 hover:bg-cream")}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>

        {/* Software status board */}
        <Card className="mt-20 gap-0 overflow-hidden bg-cream">
          <div className="grid items-center gap-6 border-b-[3px] border-ink p-6 md:grid-cols-[1fr_320px] md:p-8">
            <div>
              <Badge variant="ink">{software.status.eyebrow}</Badge>
              <h3 className="mt-4 font-display text-4xl leading-[1.02] sm:text-5xl">{software.status.title}</h3>
              <p className="mt-3 font-mono text-sm font-bold text-ink-soft">{software.status.meta}</p>
            </div>
            <a
              href={software.status.selfie.src}
              target="_blank"
              rel="noreferrer"
              className="toon-lift group relative block overflow-hidden rounded-[22px] border-[3px] border-ink shadow-toon"
              style={{ rotate: "2deg" }}
            >
              <img src={software.status.selfie.src} alt="The robot's first camera selfie" className="aspect-video w-full object-cover" loading="lazy" />
              <span className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl border-[2.5px] border-ink bg-paper px-3 py-1.5">
                <span>
                  <span className="block font-mono text-[10px] font-bold uppercase text-ink-soft">{software.status.selfie.eyebrow}</span>
                  <span className="block font-display text-lg leading-none">{software.status.selfie.label}</span>
                </span>
                <ArrowUpRight className="size-5" strokeWidth={3} />
              </span>
            </a>
          </div>

          <div className="grid lg:grid-cols-[360px_1fr]">
            <div className="border-b-[3px] border-ink bg-sun p-6 md:p-8 lg:border-b-0 lg:border-r-[3px]">
              <p className="font-mono text-xs font-bold uppercase tracking-widest">{software.release.eyebrow}</p>
              <p className="mt-2 font-display text-5xl leading-none">{software.release.name}</p>
              <p className="mt-3 font-mono text-sm font-bold">{software.release.os}</p>
              <p className="mt-1 text-base font-medium">{software.release.verified}</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {software.release.stats.map((s) => (
                  <div key={s.k} className="rounded-2xl border-[3px] border-ink bg-paper p-3 shadow-toon">
                    <p className="font-display text-4xl leading-none">{s.v}</p>
                    <p className="mt-1 text-xs font-semibold leading-tight">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2">
              {software.checks.map((c, i) => (
                <div
                  key={c.n}
                  className={cn(
                    "flex flex-col gap-3 p-6 md:p-7",
                    i < 3 && "border-b-[3px] border-ink",
                    i === 2 && "sm:border-b-0",
                    i % 2 === 0 && "sm:border-r-[3px]"
                  )}
                >
                  <div className="flex flex-col-reverse items-start gap-2 xl:flex-row xl:justify-between xl:gap-3">
                    <p className="flex items-baseline gap-2">
                      <span className="font-mono text-sm font-bold text-ink-soft">{c.n}</span>
                      <span className="font-display text-2xl leading-tight">{c.title}</span>
                    </p>
                    <Badge variant="lime" className="normal-case tracking-normal">{c.state}</Badge>
                  </div>
                  <p className="text-base leading-relaxed">{c.body}</p>
                  <p className="mt-auto font-mono text-xs font-bold text-ink-soft">{c.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t-[3px] border-ink bg-paper p-6 md:flex-row md:items-center md:p-8">
            <div className="shrink-0">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-soft">{software.roadmap.eyebrow}</p>
              <p className="font-display text-2xl">{software.roadmap.title}</p>
            </div>
            <ol className="flex flex-wrap gap-2.5">
              {software.roadmap.items.map((r, i) => (
                <li key={r} className={cn("toon-press inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink px-3 py-1.5 text-sm font-semibold shadow-toon", chip[i])}>
                  <span className="font-mono text-xs font-bold">0{i + 1}</span> {r}
                </li>
              ))}
            </ol>
          </div>
        </Card>
      </div>
    </section>
  )
}
