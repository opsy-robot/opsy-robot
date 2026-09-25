"use client"

import { ArrowUpRight, MessageCircle } from "lucide-react"
import { records } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function RecordsDialog({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="toon-lift group flex w-full items-center gap-4 rounded-3xl border-[3px] border-ink bg-paper p-4 text-left shadow-toon outline-none focus-visible:ring-4 focus-visible:ring-sky/60"
          style={{ ["--hr" as string]: "0.6deg" }}
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl border-[3px] border-ink bg-lime">
            <MessageCircle className="size-6" strokeWidth={2.75} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-mono text-[11px] font-bold uppercase tracking-widest text-ink-soft">{label}</span>
            <span className="block text-lg font-semibold leading-snug">{title}</span>
            <span className="block text-sm text-ink-soft">{sub}</span>
          </span>
          <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={3} />
        </button>
      </DialogTrigger>
      <DialogContent closeLabel="Close public Pollen team exchanges" className="bg-cream">
        <div className="relative overflow-hidden rounded-t-[28px] border-b-[4px] border-ink bg-night p-6 pr-16 text-cream md:p-10">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" aria-hidden />
          <DialogHeader className="relative">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sun">{records.eyebrow}</span>
            <DialogTitle className="text-cream">{records.title}</DialogTitle>
            <DialogDescription className="text-cream/90">{records.lead}</DialogDescription>
            <p className="w-fit rounded-2xl border-[3px] border-ink bg-bubble px-4 py-2 text-sm font-semibold text-ink shadow-toon">
              {records.disclaimer}
            </p>
          </DialogHeader>
        </div>
        <div className="grid gap-5 p-5 md:grid-cols-3 md:p-8">
          {records.items.map((r, i) => (
            <Card key={r.n} className="toon-lift gap-3 p-5" style={{ ["--hr" as string]: i % 2 ? "0.8deg" : "-0.8deg" }}>
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-3xl">{r.n}</span>
                <Badge variant={r.tone} className="normal-case tracking-normal">{r.status}</Badge>
              </div>
              <h3 className="font-display text-2xl leading-tight">{r.title}</h3>
              <p className="text-base leading-relaxed text-ink-soft">{r.body}</p>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
