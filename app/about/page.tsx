import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, Heart, Zap, Globe, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">About NexusGaming</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We're on a mission to create the best gaming server experience for players around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-xl">
                  Founded in 2018 by a group of passionate gamers, NexusGaming started with a simple goal: to provide
                  high-quality, reliable game servers that we ourselves would want to play on.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  What began as a small operation hosting Minecraft servers for friends quickly grew into a
                  comprehensive game server hosting platform serving thousands of communities worldwide.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Today, we're proud to host over 5,000 servers across multiple games, with a dedicated team working
                  around the clock to ensure the best possible gaming experience for our users.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=800" alt="Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in putting our community at the center of everything we do. Your feedback shapes our
                  roadmap.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from server performance to customer support.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Passion</h3>
                <p className="text-muted-foreground">
                  We're gamers too. Our passion for gaming drives us to create the best possible experience for our
                  users.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly exploring new technologies and ideas to improve our services and stay ahead of the
                  curve.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Global Mindset</h3>
                <p className="text-muted-foreground">
                  We serve players from around the world, with servers strategically located to provide the best
                  experience for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Reliability</h3>
                <p className="text-muted-foreground">
                  We understand the importance of uptime and stability. Our infrastructure is designed for maximum
                  reliability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Meet Our Team</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The passionate people behind NexusGaming.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Sarah Chen", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Michael Rodriguez", role: "Head of Support", image: "/placeholder.svg?height=300&width=300" },
              { name: "Emily Taylor", role: "Community Manager", image: "/placeholder.svg?height=300&width=300" },
              { name: "David Kim", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300" },
              { name: "Jessica Patel", role: "Marketing Director", image: "/placeholder.svg?height=300&width=300" },
              { name: "Ryan Wilson", role: "Infrastructure Lead", image: "/placeholder.svg?height=300&width=300" },
              { name: "Lisa Thompson", role: "Customer Success", image: "/placeholder.svg?height=300&width=300" },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center space-y-2">
                <div className="relative h-40 w-40 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Our Journey</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Key milestones in our growth story.
              </p>
            </div>
          </div>

          <div className="relative border-l border-border pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-10 top-1"></div>
              <div className="text-xl font-bold mb-1 text-foreground">2018</div>
              <div className="text-muted-foreground">Founded NexusGaming with our first Minecraft servers</div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-10 top-1"></div>
              <div className="text-xl font-bold mb-1 text-foreground">2019</div>
              <div className="text-muted-foreground">Expanded to support ARK and CS:GO servers</div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-10 top-1"></div>
              <div className="text-xl font-bold mb-1 text-foreground">2020</div>
              <div className="text-muted-foreground">
                Reached 1,000 active servers and launched our custom control panel
              </div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-10 top-1"></div>
              <div className="text-xl font-bold mb-1 text-foreground">2021</div>
              <div className="text-muted-foreground">Added Rust and Valheim support, doubled our server capacity</div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-10 top-1"></div>
              <div className="text-xl font-bold mb-1 text-foreground">2022</div>
              <div className="text-muted-foreground">
                Expanded to 10 global regions and reached 3,000 active servers
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-10 top-1"></div>
              <div className="text-xl font-bold mb-1 text-foreground">2023</div>
              <div className="text-muted-foreground">
                Surpassed 5,000 active servers and launched our volunteer program
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-foreground">5,000+</div>
              <p className="text-xl text-muted-foreground">Active Servers</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-foreground">100,000+</div>
              <p className="text-xl text-muted-foreground">Players Monthly</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-foreground">10</div>
              <p className="text-xl text-muted-foreground">Global Regions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold text-foreground">99.9%</div>
              <p className="text-xl text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Join Our Gaming Community
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Experience the best in game server hosting with NexusGaming.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

