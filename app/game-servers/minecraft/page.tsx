import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, XIcon, HardDrive, Clock, Zap, Shield, Globe } from "lucide-react"

// Define static data with const declarations
const minecraftPlans = [
  {
    name: "Premium",
    description: "For large communities and professional servers",
    price: "$30/month",
    specs: {
      cpu: "4.5 GHz",
      ram: "8 GB",
      storage: "100 GB SSD",
      players: "100+",
      locations: ["North America", "Europe", "Asia", "Australia"],
    },
    features: [
      { name: "Mod Support", included: true },
      { name: "Plugin Support", included: true },
      { name: "Custom Domain", included: true },
      { name: "DDoS Protection", included: true },
      { name: "Hourly Backups", included: true },
      { name: "Priority Support", included: true },
      { name: "Resource Monitoring", included: true },
      { name: "Custom Control Panel", included: true },
      { name: "Dedicated IP", included: true },
    ],
    popular: true,
    color: "cyan",
  },
  {
    name: "Standard",
    description: "For medium-sized communities",
    price: "$15/month",
    specs: {
      cpu: "4.0 GHz",
      ram: "4 GB",
      storage: "50 GB SSD",
      players: "50",
      locations: ["North America", "Europe", "Asia"],
    },
    features: [
      { name: "Mod Support", included: true },
      { name: "Plugin Support", included: true },
      { name: "Custom Domain", included: true },
      { name: "DDoS Protection", included: true },
      { name: "Daily Backups", included: true },
      { name: "Standard Support", included: true },
      { name: "Resource Monitoring", included: true },
      { name: "Custom Control Panel", included: false },
      { name: "Dedicated IP", included: false },
    ],
    popular: false,
    color: "sky",
  },
  {
    name: "Budget",
    description: "For small groups and friends",
    price: "$5/month",
    specs: {
      cpu: "3.5 GHz",
      ram: "2 GB",
      storage: "20 GB SSD",
      players: "10",
      locations: ["North America", "Europe"],
    },
    features: [
      { name: "Mod Support", included: true },
      { name: "Plugin Support", included: true },
      { name: "Custom Domain", included: false },
      { name: "DDoS Protection", included: true },
      { name: "Weekly Backups", included: true },
      { name: "Standard Support", included: true },
      { name: "Resource Monitoring", included: false },
      { name: "Custom Control Panel", included: false },
      { name: "Dedicated IP", included: false },
    ],
    popular: false,
    color: "blue",
  },
]

const minecraftFeatures = [
  {
    title: "Mod Support",
    description: "Install your favorite mods with just a few clicks. We support Forge, Fabric, and more.",
    icon: Zap,
  },
  {
    title: "Plugin Support",
    description: "Easy installation of Bukkit, Spigot, and Paper plugins through our control panel.",
    icon: Shield,
  },
  {
    title: "One-Click Modpacks",
    description: "Install popular modpacks like FTB, Tekkit, and more with just one click.",
    icon: Clock,
  },
  {
    title: "Automatic Backups",
    description: "Regular backups of your world to ensure your data is always safe.",
    icon: HardDrive,
  },
  {
    title: "DDoS Protection",
    description: "Enterprise-grade protection to keep your server online during attacks.",
    icon: Shield,
  },
  {
    title: "Global Locations",
    description: "Servers in multiple locations worldwide for low-latency gaming.",
    icon: Globe,
  },
]

const faqItems = [
  {
    question: "How do I install mods on my Minecraft server?",
    answer:
      "Our control panel makes it easy to install mods. Simply navigate to the 'Mods' section, search for the mod you want, and click 'Install'. You can also upload your own mod files directly through the control panel.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time through our control panel. Your data will be migrated automatically to your new server with minimal downtime.",
  },
  {
    question: "How many players can join my server?",
    answer:
      "The number of players depends on your plan. Our Budget plan supports up to 10 players, Standard up to 50 players, and Premium 100+ players. The actual number may vary based on mods and plugins installed.",
  },
  {
    question: "Do you support custom worlds?",
    answer:
      "Yes, you can upload your own world files through our control panel. We also provide tools to generate custom worlds with specific seeds and settings.",
  },
  {
    question: "What versions of Minecraft do you support?",
    answer:
      "We support all versions of Minecraft Java Edition, from the earliest releases to the latest snapshots. You can easily switch between versions through our control panel.",
  },
]

export default function MinecraftServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary/20 text-primary border-primary/30" variant="outline">
                  Minecraft Server Hosting
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none glow-text">
                  Create Your Minecraft World
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  High-performance Minecraft servers with one-click mod installation, automatic backups, and 24/7
                  support.
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
                  View Features
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden gradient-border">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Minecraft Server"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl glow-text">
                Choose Your Plan
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Select the perfect plan for your Minecraft server needs.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {minecraftPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`bg-card/20 backdrop-blur-sm ${
                  plan.popular ? "border-primary/30 relative overflow-hidden gradient-border" : "border-border/30"
                } card-hover glass-card`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold glow-text">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CPU</span>
                        <span className="font-medium text-foreground">{plan.specs.cpu}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">RAM</span>
                        <span className="font-medium text-foreground">{plan.specs.ram}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Storage</span>
                        <span className="font-medium text-foreground">{plan.specs.storage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Players</span>
                        <span className="font-medium text-foreground">{plan.specs.players}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/30">
                      <h4 className="font-medium mb-2 text-foreground">Features</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center">
                            {feature.included ? (
                              <CheckIcon className="h-4 w-4 text-primary mr-2" />
                            ) : (
                              <XIcon className="h-4 w-4 text-muted-foreground mr-2" />
                            )}
                            <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full neon-button bg-primary hover:bg-primary/90">Select Plan</Button>
                </CardFooter>
              </Card>
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
                Minecraft Server Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Everything you need to create the perfect Minecraft server.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {minecraftFeatures.map((feature, index) => (
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

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl glow-text">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Common questions about our Minecraft server hosting.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
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
                Ready to Create Your Minecraft Server?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Get started in minutes with our easy-to-use platform.
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

