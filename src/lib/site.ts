// Single place for brand + links. Update `github` once the new repo is live.
export const site = {
  name: "Opsy Robot",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Opsy Robot is an unofficial, non-commercial 1:1 Microduck research rebuild — sharing build progress, hardware tests and software updates.",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/opsy-robot/opsy-robot",
}

export const githubLabel = site.github.replace(/^https?:\/\/github\.com\//, "")

// Prefix for static assets when the site is served from a sub-path (e.g. GitHub Pages project site).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const asset = (p: string) => `${basePath}${p}`
