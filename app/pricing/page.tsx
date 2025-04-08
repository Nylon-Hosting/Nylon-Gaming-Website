import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define static data
const gameCategories = ["minecraft", "ark", "csgo", "rust"]

const pricingPlans = {
  minecraft: [
    {
      name: "Starter",
      description: "For small communities",
      price: "$5",
      features: [
        "2GB RAM",
        "10 Player Slots",
        "20GB SSD Storage",
        "Basic Plugin Support",
        "Daily Backups",
        "99.9% Uptime",
      ],
      popular: false,
    },
    {
      name: "Standard",
      description: "For growing communities",
      price: "$15",
      features: [
        "4GB RAM",
        "25 Player Slots",
        "50GB SSD Storage",
        "Advanced Plugin Support",
        "Daily Backups",
        "99.9% Uptime",
        "Custom Domain",
      ],
      popular: false,
    },
    {
      name: "Premium",
      description: "For established communities",
      price: "$30",
      features: [
        "8GB RAM",
        "50 Player Slots",
        "100GB SSD Storage",
        "Premium Plugin Support",
        "Hourly Backups",
        "99.99% Uptime",
        "Custom Domain",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large communities",
      price: "$60",
      features: [
        "16GB RAM",
        "100+ Player Slots",
        "200GB SSD Storage",
        "Premium Plugin Support",
        "Hourly Backups",
        "99.99% Uptime",
        "Custom Domain",
        "24/7 Dedicated Support",
        "Custom Mods Installation",
      ],
      popular: false,
    },
  ],
  ark: [
    {
      name: "Starter",
      description: "For small tribes",
      price: "$10",
      features: [
        "4GB RAM",
        "10 Player Slots",
        "50GB SSD Storage",
        "Basic Mod Support",
        "Daily Backups",
        "99.9% Uptime",
      ],
      popular: false,
    },
    // More ARK pricing plans would go here
  ],
  csgo: [
    {
      name: "Starter",
      description: "For casual matches",
      price: "$8",
      features: [
        "2GB RAM",
        "12 Player Slots",
        "30GB SSD Storage",
        "Basic Plugin Support",
        "Daily Backups",
        "99.9% Uptime",
      ],
      popular: false,
    },
    // More CS:GO pricing plans would go here
  ],
  rust: [
    {
      name: "Starter",
      description: "For small groups",
      price: "$12",
      features: [
        "4GB RAM",
        "50 Player Slots",
        "50GB SSD Storage",
        "Basic Plugin Support",
        "Daily Backups",
        "99.9% Uptime",
      ],
      popular: false,
    },
    // More Rust pricing plans would go here
  ],
}

const comparisonTable = [
  {
    feature: "RAM",
    starter: "2GB",
    standard: "4GB",
    premium: "8GB",
    enterprise: "16GB",
  },
  {
    feature: "Storage",
    starter: "20GB SSD",
    standard: "50GB SSD",
    premium: "100GB SSD",
    enterprise: "200GB SSD",
  },
  {
    feature: "Player Slots",
    starter: "10",
    standard: "25",
    premium: "50",
    enterprise: "100+",
  },
  {
    feature: "Backups",
    starter: "Daily",
    standard: "Daily",
    premium: "Hourly",
    enterprise: "Hourly",
  },
  {
    feature: "Uptime",
    starter: "99.9%",
    standard: "99.9%",
    premium: "99.99%",
    enterprise: "99.99%",
  },
  {
    feature: "Support",
    starter: "Standard",
    standard: "Standard",
    premium: "Priority",
    enterprise: "24/7 Dedicated",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl glow-text">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Choose the perfect plan for your gaming needs. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="minecraft" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/50 border border-gray-800/30">
                <TabsTrigger
                  value="minecraft"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Minecraft
                </TabsTrigger>
                <TabsTrigger value="ark" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  ARK
                </TabsTrigger>
                <TabsTrigger value="csgo" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  CS:GO
                </TabsTrigger>
                <TabsTrigger value="rust" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                  Rust
                </TabsTrigger>
              </TabsList>
            </div>

            {gameCategories.map((game) => (
              <TabsContent key={game} value={game}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {pricingPlans[game].map((plan, index) => (
                    <Card
                      key={index}
                      className={`bg-gray-900/20 backdrop-blur-sm ${
                        plan.popular
                          ? "border-purple-600/30 relative overflow-hidden gradient-border"
                          : "border-gray-800/30"
                      } card-hover glass-card`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                          POPULAR
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-4xl font-bold glow-text">{plan.price}</span>
                          <span className="text-gray-400 ml-2">/month</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <CheckIcon className="h-4 w-4 text-purple-400 mr-2" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full neon-button bg-purple-600 hover:bg-purple-700">Get Started</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl glow-text">Compare Plans</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Find the perfect plan for your gaming needs.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full specs-table rounded-lg overflow-hidden">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center">Standard</th>
                  <th className="py-4 px-6 text-center">Premium</th>
                  <th className="py-4 px-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 text-left font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">{row.starter}</td>
                    <td className="py-4 px-6 text-center">{row.standard}</td>
                    <td className="py-4 px-6 text-center">{row.premium}</td>
                    <td className="py-4 px-6 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl glow-text">
                Ready to Start Your Gaming Server?
              </h2>
              <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
                Get up and running in minutes with our easy-to-use platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-200 neon-button">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

