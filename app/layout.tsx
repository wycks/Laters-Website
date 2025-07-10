import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Laters.life | Get it on the App Store",
  description: "Craft and Share heartfelt messages that transcend time",
  keywords: "laters, life, messages, afterlife, love, memorial, legacy, goodbye, letters, notes, cards, gifts, flowers, balloons, banners, signs",
  openGraph: {
    title: "Laters.life",
    description: "Craft and Share heartfelt messages that transcend time",
    images: ['/icon.png'],
    type: 'website',
    url: 'https://laters.life',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laters.life",
    description: "Craft and Share heartfelt messages that transcend time",
  },
  icons: {
    icon: '/icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={playfair.variable}>{children}</body>
    </html>
  )
}