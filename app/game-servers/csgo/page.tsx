import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, XIcon, HardDrive, Clock, Zap, Shield, Globe } from "lucide-react"

// Define static data with const declarations
const csgoPlans = [
  {
    name: "Premium",
    description: "For competitive tournaments and leagues",
    price: "$20/month",
    specs: {
      cpu: "4.5 GHz",
      ram: "8 GB",
      storage: "50 GB SSD",
      players: "64",
      locations: ["North America", "Europe", "Asia", "Australia"],
      tickRate: "128 tick",
    },
    features: [
      { name: "128 Tick Rate", included: true },
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
    description: "For casual competitive play",
    price: "$12/month",
    specs: {
      cpu: "4.0 GHz",
      ram: "4 GB",
      storage: "30 GB SSD",
      players: "32",
      locations: ["North America", "Europe", "Asia"],
      tickRate: "64 tick",
    },
    features: [
      { name: "64 Tick Rate", included: true },
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
    description: "For casual play with friends",
    price: "$8/month",
    specs: {
      cpu: "3.5 GHz",
      ram: "2 GB",
      storage: "20 GB SSD",
      players: "12",
      locations: ["North America", "Europe"],
      tickRate: "64 tick",
    },
    features: [
      { name: "64 Tick Rate", included: true },
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

const csgoFeatures = [
  {
    title: "High Tick Rate",
    description: "Experience smooth gameplay with our 128-tick servers for competitive play.",
    icon: Zap,
  },
  {
    title: "Plugin Support",
    description: "Install popular plugins like SourceMod, MetaMod, and more with just a few clicks.",
    icon: Shield,
  },
  {
    title: "Custom Maps",
    description: "Upload and play on your favorite custom maps with easy installation.",
    icon: Globe,
  },
  {
    title: "Automatic Backups",
    description: "Regular backups of your server configuration and data for peace of mind.",
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
    icon: Clock,
  },
]

const faqItems = [
  {
    question: "What is the difference between 64-tick and 128-tick servers?",
    answer:
      "Tick rate refers to how many times per second the server updates the game state. 128-tick servers update twice as often as 64-tick servers, resulting in more responsive gameplay, more accurate hit registration, and an overall smoother experience. This is especially important for competitive play.",
  },
  {
    question: "Can I install custom plugins on my CS:GO server?",
    answer:
      "Yes, our control panel makes it easy to install plugins like SourceMod, MetaMod, and many others. You can also upload your own custom plugins through our file manager.",
  },
  {
    question: "How do I set up competitive match settings?",
    answer:
      "Our servers come with pre-configured competitive settings based on professional tournament standards. You can easily enable these settings through our control panel, or customize them to your preference.",
  },
  {
    question: "Can I password-protect my server?",
    answer:
      "Yes, you can set a password for your server through our control panel to restrict access to only those who know the password. This is great for private matches or team practice sessions.",
  },
  {
    question: "Do you support GOTV for match broadcasting?",
    answer:
      "Yes, all our CS:GO servers support GOTV, allowing you to broadcast your matches to spectators. You can configure GOTV settings through our control panel.",
  },
]

export default function CSGOServerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary/20 text-primary border-primary/30" variant="outline">
                  CS:GO Server Hosting
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none glow-text">
                  Dominate the Competition
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  High-performance CS:GO servers with 128-tick rates, plugin support, and DDoS protection for
                  competitive play.
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
                alt="CS:GO Server"
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
                Select the perfect plan for your CS:GO server needs.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {csgoPlans.map((plan) => (
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
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tick Rate</span>
                        <span className="font-medium text-foreground">{plan.specs.tickRate}</span>
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
                CS:GO Server Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Everything you need to create the perfect CS:GO server for competitive play.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {csgoFeatures.map((feature, index) => (
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
                Common questions about our CS:GO server hosting.
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
                Ready to Dominate the Competition?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Get your CS:GO server up and running in minutes with our easy-to-use platform.
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

