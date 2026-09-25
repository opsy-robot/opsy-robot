import type { Metadata, Viewport } from "next"
import "@fontsource/lilita-one/400.css"
import "@fontsource-variable/fredoka"
import "@fontsource/space-mono/400.css"
import "@fontsource/space-mono/700.css"
import "./globals.css"
import { site, asset } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | The Opsy Duck build log`,
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Opsy Duck, rebuilt for real`,
    description: site.description,
    images: [{ url: asset("/og.png"), width: 1200, height: 630 }],
  },
  icons: { icon: asset("/icon.svg") },
}

export const viewport: Viewport = {
  themeColor: "#fff8e7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
