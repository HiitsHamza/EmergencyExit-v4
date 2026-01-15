import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Emergency Exit Podcast",
  description:
    "A light hearted but deep minded podcast that throws open the magic chamber on important issues and poetry.",
  generator: "Noth Technology Group",
  icons: {
    icon: "/logo bit.svg",
    shortcut: "/logo bit.svg",
    apple: "/logo bit.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
