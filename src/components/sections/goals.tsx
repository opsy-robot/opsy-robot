import { goals } from "@/lib/content"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionEyebrow } from "./section-eyebrow"

export function Goals() {
  return (
    <section id="goals" className="relative scroll-mt-4 border-b-[4px] border-ink bg-cream">
      <div className="bg-checker pointer-events-none absolute inset-x-0 top-0 h-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:pl-28">
        <SectionEyebrow>{goals.eyebrow}</SectionEyebrow>
        <h2 className="font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
          <span className="block">{goals.title[0]}</span>
          <span className="block text-grape">{goals.title[1]}</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
          {goals.items.map((g, i) => (
            <Card key={g.n} className="toon-lift relative overflow-hidden pb-6" style={{ ["--hr" as string]: i === 1 ? "0.8deg" : "-0.8deg" }}>
              <div className={`flex items-center justify-between border-b-[3px] border-ink px-6 py-4 ${g.color}`}>
                <span className="font-display text-5xl leading-none">{g.n}</span>
                <span className="grid size-10 place-items-center rounded-full border-[3px] border-ink bg-paper font-display text-lg" aria-hidden>★</span>
              </div>
              <CardHeader className="pt-2">
                <CardTitle className="text-3xl">{g.title}</CardTitle>
                <CardDescription className="text-lg">{g.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
