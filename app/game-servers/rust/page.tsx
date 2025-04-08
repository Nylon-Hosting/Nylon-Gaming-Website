import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, XIcon, HardDrive, Clock, Zap, Shield, Globe } from "lucide-react"

// Define static data with const declarations
const rustPlans = [
  {
    name: "Premium",
    description: "For large communities and clans",
    price: "$45/month",
    specs: {
      cpu: "4.5 GHz",
      ram: "16 GB",
      storage: "200 GB SSD",
      players: "300",
      locations: ["North America", "Europe", "Asia", "Australia"],
    },
    features: [
      { name: "Oxide Support", included: true },
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
    price: "$30/month",
    specs: {
      cpu: "4.0 GHz",
      ram: "12 GB",
      storage: "150 GB SSD",
      players: "200",
      locations: ["North America", "Europe", "Asia"],
    },
    features: [
      { name: "Oxide Support", included: true },
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
    price: "$15/month",
    specs: {
      cpu: "3.5 GHz",
      ram: "8 GB",
      storage: "100 GB SSD",
      players: "100",
      locations: ["North America", "Europe"],
    },
    features: [
      { name: "Oxide Support", included: true },
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

const rustFeatures = [
  {
    title: "Oxide Support",
    description: "Install and manage Oxide plugins with ease through our control panel.",
    icon: Zap,
  },
  {
    title: "Plugin Support",
    description: "Browse and install from our library of popular Rust plugins with just a few clicks.",
    icon: Shield,
  },
  {
    title: "Wipe Scheduling",
    description: "Set up automatic map and blueprint wipes on your preferred schedule.",
    icon: Clock,
  },
  {
    title: "Automatic Backups",
    description: "Regular backups of your world data to ensure your community's progress is always safe.",
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
    question: "How often should I wipe my Rust server?",
    answer:
      "The optimal wipe schedule depends on your community's preferences. Most servers wipe every 1-4 weeks. Our control panel allows you to set up automatic wipes for both map data and blueprints on your preferred schedule.",
  },
  {
    question: "Can I install custom plugins on my Rust server?",
    answer:
      "Yes, our servers support Oxide/uMod, allowing you to install custom plugins. Our control panel provides an easy interface for browsing, installing, and configuring plugins without needing to access the server files directly.",
  },
  {
    question: "How many players can my Rust server support?",
    answer:
      "The number of players depends on your plan. Our Budget plan supports up to 100 players, Standard up to 200 players, and Premium up to 300 players. Rust is resource-intensive, so performance may vary based on plugins and map size.",
  },
  {
    question: "Can I change the map size and seed?",
    answer:
      "Yes, you can customize the map size, seed, and other generation parameters through our control panel. You can also upload custom maps if you prefer.",
  },
  {
    question: "Do you support modded servers?",
    answer:
      "Yes, we fully support modded Rust servers. You can install Oxide/uMod and configure various plugins to create a unique gameplay experience for your community.",
  },
]

export default function RustServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary/20 text-primary border-primary/30" variant="outline">
                  Rust Server Hosting
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none glow-text">
                  Build, Raid, Survive
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  High-performance Rust servers with Oxide support, plugin installation, and automatic wipe scheduling.
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
                alt="Rust Server"
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
                Select the perfect plan for your Rust server needs.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rustPlans.map((plan) => (
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
                Rust Server Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Everything you need to create the perfect Rust server for your community.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rustFeatures.map((feature, index) => (
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
                Common questions about our Rust server hosting.
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
                Ready to Build Your Rust Community?
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

