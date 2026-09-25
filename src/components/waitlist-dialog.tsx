"use client"

import * as React from "react"
import { CheckCircle2, Loader2, Sparkles } from "lucide-react"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { XIcon } from "@/components/icons"

const field =
  "w-full rounded-2xl border-[3px] border-ink bg-paper px-4 py-3 text-base font-medium text-ink shadow-toon outline-none placeholder:text-ink-soft/70 focus-visible:ring-4 focus-visible:ring-sky/60"
const label = "mb-1.5 block text-sm font-bold"

function Req() {
  return <span className="text-bubble" aria-hidden>*</span>
}

export function WaitlistDialog({ className, size = "sm", compact = true }: { className?: string; size?: "sm" | "default" | "lg"; compact?: boolean }) {
  const [state, setState] = React.useState<"idle" | "sending" | "done" | "error">("idle")
  const [error, setError] = React.useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const tg = String(data.get("telegram") || "").trim()
    data.set("telegram", tg.startsWith("@") ? tg : `@${tg}`)
    if (!site.waitlistEndpoint) {
      setError("Sign-ups open in a few hours — follow us on X to catch the launch.")
      setState("error")
      return
    }
    setState("sending")
    try {
      // Apps Script web apps don't send CORS headers, so post "no-cors" (fire-and-forget).
      await fetch(site.waitlistEndpoint, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(data as unknown as Record<string, string>),
      })
      setState("done")
      form.reset()
    } catch {
      setError("Couldn't send that — please check your connection and try again.")
      setState("error")
    }
  }

  return (
    <Dialog onOpenChange={(o) => { if (!o) { setState("idle"); setError("") } }}>
      <DialogTrigger asChild>
        <Button variant="pink" size={size} className={className}>
          <Sparkles strokeWidth={3} />
          {compact ? <><span className="sm:hidden">Waitlist</span><span className="hidden sm:inline">Join waitlist</span></> : "Join the hardware waitlist"}
        </Button>
      </DialogTrigger>
      <DialogContent closeLabel="Close waitlist form" className="max-w-2xl">
        <div className="rounded-t-[28px] border-b-[4px] border-ink bg-sun p-6 pr-16 md:p-8">
          <DialogHeader>
            <span className="w-fit rounded-full border-[2.5px] border-ink bg-paper px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
              Opsy Duck · hardware
            </span>
            <DialogTitle>Waitlist for hardware</DialogTitle>
            <DialogDescription className="text-ink">
              Get first dibs when Opsy Duck kits and assembled robots are ready. We&apos;ll only message you about the hardware.
            </DialogDescription>
          </DialogHeader>
        </div>

        {state === "done" ? (
          <div className="flex flex-col items-center gap-4 p-10 text-center">
            <CheckCircle2 className="size-16 text-grape" strokeWidth={2.5} />
            <p className="font-display text-4xl">You&apos;re on the list!</p>
            <p className="max-w-md text-lg">We&apos;ll reach out on Telegram or email as soon as hardware spots open up.</p>
            <Button asChild variant="default">
              <a href={site.x} target="_blank" rel="noreferrer"><XIcon className="size-4" /> Follow @OpsyRobot</a>
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
            {/* honeypot — hidden from people */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <div>
              <label htmlFor="wl-name" className={label}>Name <Req /></label>
              <input id="wl-name" name="name" required maxLength={120} autoComplete="name" className={field} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="wl-email" className={label}>Email <Req /></label>
              <input id="wl-email" name="email" type="email" required maxLength={160} autoComplete="email" className={field} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="wl-tg" className={label}>Telegram username <Req /></label>
              <input id="wl-tg" name="telegram" required maxLength={64} pattern="@?[A-Za-z0-9_]{4,32}" title="Your Telegram @username (letters, numbers, underscores)" className={field} placeholder="@username" />
            </div>
            <div>
              <label htmlFor="wl-other" className={label}>Other contact <span className="font-medium text-ink-soft">(optional)</span></label>
              <input id="wl-other" name="other" maxLength={160} className={field} placeholder="X, Discord, WhatsApp…" />
            </div>
            <div>
              <label htmlFor="wl-interest" className={label}>What are you after? <Req /></label>
              <select id="wl-interest" name="interest" required defaultValue="" className={cn(field, "appearance-none")}>
                <option value="" disabled>Choose one</option>
                <option>Fully assembled Opsy Duck</option>
                <option>DIY kit (I&apos;ll build it)</option>
                <option>Boards &amp; parts only</option>
                <option>Just curious for now</option>
              </select>
            </div>
            <div>
              <label htmlFor="wl-units" className={label}>How many units?</label>
              <select id="wl-units" name="units" defaultValue="1" className={cn(field, "appearance-none")}>
                <option>1</option>
                <option>2–5</option>
                <option>6 or more</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="wl-country" className={label}>Country <span className="font-medium text-ink-soft">(for shipping plans)</span></label>
              <input id="wl-country" name="country" maxLength={80} autoComplete="country-name" className={field} placeholder="e.g. India" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="wl-notes" className={label}>What would you do with your duck? <span className="font-medium text-ink-soft">(optional)</span></label>
              <textarea id="wl-notes" name="notes" rows={3} maxLength={500} className={field} placeholder="Research, a desk buddy, teaching, content…" />
            </div>

            {state === "error" && (
              <p role="alert" className="rounded-2xl border-[3px] border-ink bg-bubble px-4 py-3 font-semibold md:col-span-2">{error}</p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2">
              <p className="text-sm font-medium text-ink-soft"><Req /> required</p>
              <Button type="submit" size="lg" variant="default" disabled={state === "sending"}>
                {state === "sending" ? <><Loader2 className="animate-spin" /> Sending…</> : "Join the waitlist"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
