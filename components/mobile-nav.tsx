"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"

// Define static data with const declaration
const mobileNavItems = [
  { href: "/", label: "Home" },
  { href: "/game-servers", label: "Game Servers" },
  { href: "/community", label: "Community" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/status", label: "Status" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center space-x-2">
      <ThemeSwitcher />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-foreground hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-card/95 backdrop-blur-xl border-border/50 pr-0">
          <div className="px-7">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <span className="font-bold text-xl glow-text">Nylon Gaming</span>
            </Link>
          </div>
          <div className="flex flex-col space-y-4 mt-8">
            {mobileNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-7 py-2 text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-7 pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="border-border/50 text-foreground hover:bg-accent/10 hover:text-foreground w-full justify-start"
              >
                Sign In
              </Button>
              <Button className="neon-button bg-primary hover:bg-primary/90 w-full justify-start">Get Started</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

