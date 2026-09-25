import type { NextConfig } from "next"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to ./out
  // (works on GitHub Pages, Netlify, Vercel, or any static host).
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
