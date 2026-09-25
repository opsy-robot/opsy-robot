// Single place for brand + links. Update `github` once the new repo is live.
export const site = {
  name: "Opsy Robot",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Opsy Robot is the build log for Opsy Duck — a small walking robot duck. Build progress, hardware tests, software updates and the hardware waitlist.",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/opsy-robot/opsy-robot",
  x: "https://x.com/OpsyRobot",
  // Hardware waitlist → Google Form. Each site field maps to the form's entry id.
  waitlist: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLSdAaZe5dAUwxi2T2_3Rd0dFL8W3ki15o3EE0bomGE-FF2QAeA/formResponse",
    fields: {
      name: "entry.1174527967",
      email: "entry.1346197779",
      telegram: "entry.359074271",
      other: "entry.960643436",
      interest: "entry.1059673495",
      units: "entry.534063111",
      country: "entry.1139622658",
      notes: "entry.939726103",
    } as Record<string, string>,
  },
}

export const githubLabel = site.github.replace(/^https?:\/\/github\.com\//, "")

// Prefix for static assets when the site is served from a sub-path (e.g. GitHub Pages project site).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const asset = (p: string) => `${basePath}${p}`
