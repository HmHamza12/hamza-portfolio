import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hamza Mouttaki - Développeur Web & Designer",
  description:
    "Portfolio de Hamza Mouttaki, développeur web et designer créatif basé au Maroc. Spécialisé en HTML, CSS, JavaScript, PHP, Laravel et design UI/UX.",
  keywords: ["développeur web", "designer", "Maroc", "HTML", "CSS", "JavaScript", "Laravel", "PHP"],
  authors: [{ name: "Hamza Mouttaki" }],
  creator: "Hamza Mouttaki",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hamzamouttaki.com",
    title: "Hamza Mouttaki - Développeur Web & Designer",
    description: "Portfolio de Hamza Mouttaki, développeur web et designer créatif basé au Maroc.",
    siteName: "Hamza Mouttaki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Mouttaki - Développeur Web & Designer",
    description: "Portfolio de Hamza Mouttaki, développeur web et designer créatif basé au Maroc.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
