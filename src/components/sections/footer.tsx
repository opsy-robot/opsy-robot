import { ArrowUp } from "lucide-react"
import { footer } from "@/lib/content"
import { site } from "@/lib/site"
import { Logo } from "@/components/logo"
import { GithubIcon, XIcon } from "@/components/icons"

export function Footer() {
  return (
    <footer className="border-t-[4px] border-ink bg-bubble pb-28 lg:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:pl-28">
        <div className="max-w-2xl">
          <div className="w-fit rounded-full border-[3px] border-ink bg-paper py-1.5 pl-1.5 pr-4 shadow-toon"><Logo /></div>
          <p className="mt-4 font-mono text-xs font-bold">© {new Date().getFullYear()} {site.name}</p>
        </div>
        <div className="flex gap-3">
          <a href={site.x} target="_blank" rel="noreferrer" aria-label="Opsy Robot on X" className="toon-press grid size-12 place-items-center rounded-full border-[3px] border-ink bg-paper shadow-toon">
            <XIcon className="size-5" />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="toon-press grid size-12 place-items-center rounded-full border-[3px] border-ink bg-paper shadow-toon">
            <GithubIcon className="size-5" />
          </a>
          <a href="#purpose" className="toon-press inline-flex h-12 items-center gap-2 rounded-full border-[3px] border-ink bg-sun px-5 font-display text-lg shadow-toon">
            <ArrowUp className="size-5" strokeWidth={3} /> {footer.top}
          </a>
        </div>
      </div>
    </footer>
  )
}
