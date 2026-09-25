// Single place for brand + links. Update `github` once the new repo is live.
export const site = {
  name: "Opsy Robot",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Opsy Robot is the build log for Opsy Duck — a small walking robot duck. Build progress, hardware tests, software updates and the hardware waitlist.",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/opsy-robot/opsy-robot",
  x: "https://x.com/OpsyRobot",
  // Google Apps Script web-app URL that appends waitlist sign-ups to a Google Sheet (see scripts/waitlist-apps-script.gs)
  waitlistEndpoint: process.env.NEXT_PUBLIC_WAITLIST_URL ?? "",
}

export const githubLabel = site.github.replace(/^https?:\/\/github\.com\//, "")

// Prefix for static assets when the site is served from a sub-path (e.g. GitHub Pages project site).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const asset = (p: string) => `${basePath}${p}`
