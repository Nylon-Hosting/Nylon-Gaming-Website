import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Users, Clock, Zap, Shield, Globe } from "lucide-react"

// Define static data with const declarations
const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Host your own Minecraft server with full mod and plugin support. Create your own world and invite friends to join your adventure.",
    playerCount: "10-100+",
    plans: ["Premium", "Standard", "Budget"],
    features: ["Mod Support", "Plugin Support", "Automatic Backups", "DDoS Protection", "Custom Domain"],
  },
  {
    id: "ark",
    name: "ARK: Survival Evolved",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Run your own ARK: Survival Evolved server. Tame dinosaurs, build bases, and survive with your tribe in this prehistoric world.",
    playerCount: "10-100",
    plans: ["Standard", "Budget"],
    features: ["Mod Support", "Custom Maps", "Automatic Backups", "DDoS Protection"],
  },
  {
    id: "csgo",
    name: "Counter-Strike: Global Offensive",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Host competitive CS:GO matches with your own server. Customize game modes, maps, and rules to create the perfect gaming experience.",
    playerCount: "10-64",
    plans: ["Standard", "Budget"],
    features: ["Custom Maps", "Anti-Cheat", "Tournament Mode", "DDoS Protection"],
  },
  {
    id: "rust",
    name: "Rust",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Build your Rust community with a high-performance server. Survive, craft, and raid in this harsh multiplayer environment.",
    playerCount: "50-300",
    plans: ["Standard", "Budget"],
    features: ["Oxide Support", "Custom Maps", "Automatic Backups", "DDoS Protection"],
  },
  {
    id: "valheim",
    name: "Valheim",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Explore the Viking afterlife with friends on your own Valheim server. Build, fight, and conquer together in this Norse-inspired world.",
    playerCount: "10-20",
    plans: ["Standard", "Budget"],
    features: ["Mod Support", "Automatic Backups", "DDoS Protection"],
  },
  {
    id: "terraria",
    name: "Terraria",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Create your own Terraria world and invite friends to join your adventure. Dig, fight, explore, and build in this 2D sandbox game.",
    playerCount: "8-16",
    plans: ["Standard", "Budget"],
    features: ["Mod Support", "Automatic Backups", "DDoS Protection"],
  },
  {
    id: "7dtd",
    name: "7 Days to Die",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Survive the zombie apocalypse with friends on your own 7 Days to Die server. Build, craft, and defend against the undead horde.",
    playerCount: "8-32",
    plans: ["Standard", "Budget"],
    features: ["Mod Support", "Custom Maps", "Automatic Backups", "DDoS Protection"],
  },
  {
    id: "tf2",
    name: "Team Fortress 2",
    image: "/placeholder.svg?height=200&width=400",
    description:
      "Host your own Team Fortress 2 server with custom maps, game modes, and plugins. Create the perfect gaming experience for your community.",
    playerCount: "24-32",
    plans: ["Standard", "Budget"],
    features: ["Custom Maps", "SourceMod", "MetaMod", "DDoS Protection"],
  },
]

const serverFeatures = [
  {
    icon: Cpu,
    title: "High-Performance Hardware",
    description: "Enterprise-grade CPUs and SSDs for maximum performance.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Servers in multiple locations worldwide for low-latency gaming.",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Advanced protection to keep your server online during attacks.",
  },
  {
    icon: Clock,
    title: "Automatic Backups",
    description: "Regular backups to ensure your data is always safe.",
  },
  {
    icon: Zap,
    title: "One-Click Installation",
    description: "Easy setup for games, mods, and plugins with one click.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Our team is always available to help with any issues.",
  },
]

export default function GameServersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl glow-text">
                Game Server Hosting
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                High-performance servers for all your favorite games. One-click deployment, easy management, and 24/7
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Servers Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => (
              <Link key={game.id} href={`/game-servers/${game.id}`}>
                <Card className="bg-card/20 backdrop-blur-sm border-border/30 card-hover game-server-card h-full glass-card">
                  <div className="relative h-48 w-full">
                    <Image
                      src={game.image || "/placeholder.svg"}
                      alt={game.name}
                      fill
                      className="object-cover rounded-t-lg game-card-image"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      {game.plans.includes("Premium") && <Badge className="badge-premium">Premium</Badge>}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{game.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Users className="h-4 w-4 mr-1" /> {game.playerCount} Players
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{game.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      {game.plans.map((plan) => (
                        <Badge
                          key={plan}
                          variant="outline"
                          className={`border-border/50 ${
                            plan === "Premium"
                              ? "text-cyan-400"
                              : plan === "Standard"
                                ? "text-sky-400"
                                : "text-blue-400"
                          }`}
                        >
                          {plan}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl glow-text">
                Premium Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                All our game servers come with these premium features included.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serverFeatures.map((feature, index) => (
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl glow-text">
                Ready to Start Your Gaming Server?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Get up and running in minutes with our easy-to-use platform.
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

