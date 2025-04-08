import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CursorFollower } from "@/components/cursor-follower"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nylon Gaming - Premium Game Server Hosting",
  description: "High-performance, low-latency game servers designed for serious gamers.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen fancy-dots`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <CursorFollower />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

