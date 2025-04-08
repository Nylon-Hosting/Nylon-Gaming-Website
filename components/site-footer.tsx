import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GamepadIcon, Facebook, Twitter, Instagram, Twitch, DiscIcon as DiscordIcon } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t border-border/30 fancy-dots">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <GamepadIcon className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl glow-text">Nylon Gaming</span>
            </Link>
            <p className="text-muted-foreground">High-performance game server hosting for serious gamers.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitch className="h-5 w-5" />
                <span className="sr-only">Twitch</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <DiscordIcon className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/game-servers" className="text-muted-foreground hover:text-primary transition-colors">
                  Game Server Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/game-servers/minecraft"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Minecraft Servers
                </Link>
              </li>
              <li>
                <Link href="/game-servers/ark" className="text-muted-foreground hover:text-primary transition-colors">
                  ARK Servers
                </Link>
              </li>
              <li>
                <Link href="/game-servers/csgo" className="text-muted-foreground hover:text-primary transition-colors">
                  CS:GO Servers
                </Link>
              </li>
              <li>
                <Link href="/game-servers/rust" className="text-muted-foreground hover:text-primary transition-colors">
                  Rust Servers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background/50 border-border/50" />
              <Button className="neon-button bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nylon Gaming. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

