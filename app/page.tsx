import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, Zap, Shield, Users, Clock, CheckCircle2 } from "lucide-react"

// Define static data
const features = [
  {
    icon: Server,
    title: "High Performance",
    description: "Enterprise-grade hardware with SSD storage and high-frequency CPUs.",
  },
  {
    icon: Zap,
    title: "Low Latency",
    description: "Global network with servers strategically located for minimal ping.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Advanced protection against attacks to keep your games running smoothly.",
  },
]

const games = ["Minecraft", "ARK", "CS:GO", "Rust", "Valheim", "Terraria", "7 Days to Die", "Team Fortress 2"]

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Players",
  },
  {
    icon: Server,
    value: "5,000+",
    label: "Servers Deployed",
  },
  {
    icon: Clock,
    value: "99.9%",
    label: "Uptime",
  },
  {
    icon: CheckCircle2,
    value: "24/7",
    label: "Support",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary/20 text-primary border-primary/30" variant="outline">
                  Premium Gaming Servers
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none glow-text">
                  Level Up Your Gaming Experience
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  High-performance, low-latency game servers designed for serious gamers. Deploy in seconds, scale with
                  your community.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="neon-button bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                >
                  View Plans
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden gradient-border">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Gaming Server"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl glow-text">
                Premium Features for Gamers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our servers are built with the latest hardware and optimized for gaming performance.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border border-border/30 p-6 bg-card/20 backdrop-blur-sm card-hover glass-card"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl glow-text">
                Supported Games
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                One-click deployment for your favorite games.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <div
                key={game}
                className="flex flex-col items-center space-y-2 rounded-lg border border-border/30 p-4 bg-card/20 backdrop-blur-sm card-hover glass-card"
              >
                <div className="h-24 w-24 rounded-md bg-muted/50 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt={game}
                    width={96}
                    height={96}
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-lg font-medium text-foreground">{game}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/game-servers">
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
              >
                View All Games
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center space-y-2 text-center glass-card p-8 rounded-lg"
              >
                <stat.icon className="h-10 w-10 text-primary" />
                <h3 className="text-3xl font-bold text-foreground glow-text">{stat.value}</h3>
                <p className="text-xl text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl glow-text">
                Ready to Level Up?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with your gaming server in minutes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="neon-button bg-primary hover:bg-primary/90">
                Deploy Now
              </Button>
              <Link href="/community">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                >
                  Join Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

