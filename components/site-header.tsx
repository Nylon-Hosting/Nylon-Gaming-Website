import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { GamepadIcon } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeSwitcher } from "@/components/theme-switcher"

// Define static data with const declarations
const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/game-servers", label: "Game Servers" },
  { href: "/community", label: "Community" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/status", label: "Status" },
]

const servicesItems = [
  {
    title: "Game Server Hosting",
    description: "High-performance servers for your favorite games",
    href: "/game-servers",
    featured: true,
  },
  {
    title: "Minecraft",
    description: "Host your Minecraft server with mods and plugins",
    href: "/game-servers/minecraft",
  },
  {
    title: "ARK",
    description: "Run your ARK: Survival Evolved server",
    href: "/game-servers/ark",
  },
  {
    title: "CS:GO",
    description: "Host competitive CS:GO matches",
    href: "/game-servers/csgo",
  },
  {
    title: "Rust",
    description: "Build your Rust community",
    href: "/game-servers/rust",
  },
]

const aboutItems = [
  {
    title: "About Us",
    description: "Learn about our company and mission",
    href: "/about",
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    href: "/contact",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions",
    href: "/faq",
  },
  {
    title: "Blog",
    description: "Latest news and updates",
    href: "/blog",
  },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-lg">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <GamepadIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl glow-text">Nylon Gaming</span>
        </Link>
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/10")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-card/95 backdrop-blur-xl border border-border/50">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-secondary/30 p-6 no-underline outline-none focus:shadow-md"
                          href="/game-servers"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-primary-foreground">
                            Game Server Hosting
                          </div>
                          <p className="text-sm leading-tight text-primary-foreground/90">
                            High-performance servers for your favorite games
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {servicesItems
                      .filter((item) => !item.featured)
                      .map((item, index) => (
                        <ListItem key={index} href={item.href} title={item.title}>
                          {item.description}
                        </ListItem>
                      ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/game-servers" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/10")}>
                    Game Servers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/community" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-accent/10")}>
                    Community
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card/95 backdrop-blur-xl border border-border/50">
                    {aboutItems.map((item, index) => (
                      <ListItem key={index} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto">
          <ThemeSwitcher />
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-accent/10">
            Sign In
          </Button>
          <Button className="neon-button bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
        <div className="flex md:hidden ml-auto">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-foreground focus:bg-accent/10 focus:text-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

