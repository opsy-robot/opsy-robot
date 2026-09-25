"use client"

import * as React from "react"
import { ArrowUpRight, Pause, Play, Sparkles } from "lucide-react"
import { hero } from "@/lib/content"
import { site } from "@/lib/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { RecordsDialog } from "./records-dialog"

// Hero — split layout; right side adapts the 21st.dev "Modern Hero Section" floating-collage idea
// (float-up keyframes, staggered delays) with cartoon sticker frames around the looping video.
export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = React.useState(true)
  React.useEffect(() => { const v = videoRef.current; if (v) setPlaying(!v.paused) }, [])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {}); else v.pause()
  }

  return (
    <section id="purpose" className="relative overflow-hidden border-b-[4px] border-ink bg-sun">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      {/* big decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full border-[4px] border-ink bg-bubble" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 right-[-6rem] size-[26rem] rounded-full border-[4px] border-ink bg-sky" aria-hidden />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 pt-5 sm:px-6 lg:pl-28">
        <div className="rounded-full border-[3px] border-ink bg-paper py-1.5 pl-1.5 pr-4 shadow-toon">
          <Logo />
        </div>
        <Button asChild variant="default" size="sm" className="hidden sm:inline-flex">
          <a href={site.github} target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" /> GitHub
          </a>
        </Button>
      </header>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-10 sm:px-6 md:pb-28 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pl-28 lg:pt-14">
        <div className="max-w-xl">
          <Badge variant="paper" className="mb-6 whitespace-normal text-left leading-snug shadow-toon">
            <Sparkles strokeWidth={3} /> {hero.eyebrow}
          </Badge>
          <h1 className="font-display leading-[0.92] tracking-wide">
            <span className="block text-7xl text-paper text-outline text-pop sm:text-8xl lg:text-[7.5rem]">{hero.title}</span>
            <span className="mt-3 block text-4xl text-ink sm:text-5xl lg:text-6xl">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 rounded-3xl border-[3px] border-ink bg-paper p-5 text-lg font-medium leading-relaxed shadow-toon sm:text-xl">
            {hero.lead}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="default">
              <a href={site.github} target="_blank" rel="noreferrer">
                <GithubIcon className="size-5" /> {hero.github} <ArrowUpRight strokeWidth={3} />
              </a>
            </Button>
          </div>
          <div className="mt-6 max-w-lg">
            <RecordsDialog {...hero.record} />
          </div>
        </div>

        {/* Media collage */}
        <div className="relative mx-auto w-full max-w-[520px] px-2 py-6 lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-[84%] max-w-[470px] rotate-[1.5deg] overflow-hidden rounded-[36px] border-[4px] border-ink bg-ink shadow-toon-xl">
            <video
              ref={videoRef}
              className="size-full object-cover"
              src={hero.video.src}
              poster={hero.video.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause hero video" : "Play hero video"}
              className="toon-press absolute right-4 top-4 grid size-12 place-items-center rounded-full border-[3px] border-ink bg-sun text-ink shadow-toon outline-none focus-visible:ring-4 focus-visible:ring-sky/60"
            >
              {playing ? <Pause className="size-5" strokeWidth={3} /> : <Play className="size-5" strokeWidth={3} />}
            </button>
            <div className="absolute bottom-3 left-3 right-3 rounded-2xl border-[3px] border-ink bg-paper px-4 py-2.5 sm:right-20">
              <p className="font-display text-lg leading-tight">{hero.video.caption}</p>
              <p className="font-mono text-xs font-bold text-ink-soft">{hero.video.stamp}</p>
            </div>
          </div>

          {/* floating stickers */}
          <img src={hero.stickers[0]} alt="" aria-hidden
            className="animate-float absolute -left-1 -top-2 w-[21%] max-w-28 rounded-3xl border-[4px] border-ink bg-paper object-cover shadow-toon-lg"
            style={{ ["--r" as string]: "-8deg", animationDelay: "-1.2s", aspectRatio: "3/4" }} />
          <img src={hero.stickers[1]} alt="" aria-hidden
            className="animate-float absolute -right-1 top-[34%] w-[20%] max-w-28 rounded-3xl border-[4px] border-ink bg-paper object-cover shadow-toon-lg"
            style={{ ["--r" as string]: "7deg", animationDelay: "-3s", aspectRatio: "1/1" }} />

          <div className="burst animate-wiggle absolute bottom-[4%] right-[1%] hidden size-24 sm:grid place-items-center bg-ink sm:size-28" aria-hidden>
            <span className="burst absolute inset-[5px] bg-bubble" />
            <span className="relative text-center font-display text-xl leading-none">8/8<br /><span className="text-sm">passed!</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
