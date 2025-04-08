import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Frequently Asked Questions</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Find answers to common questions about our game server hosting services.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search for answers..." className="bg-gray-900 border-gray-800 pl-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="general" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900">
                <TabsTrigger value="general" className="data-[state=active]:bg-purple-600">
                  General
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-purple-600">
                  Billing
                </TabsTrigger>
                <TabsTrigger value="technical" className="data-[state=active]:bg-purple-600">
                  Technical
                </TabsTrigger>
                <TabsTrigger value="games" className="data-[state=active]:bg-purple-600">
                  Games
                </TabsTrigger>
                <TabsTrigger value="account" className="data-[state=active]:bg-purple-600">
                  Account
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="general">
              <div className="mx-auto max-w-3xl space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-gray-800">
                    <AccordionTrigger className="text-left">What is NexusGaming?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      NexusGaming is a premium game server hosting platform that provides high-performance, low-latency
                      servers for popular games like Minecraft, ARK, CS:GO, Rust, and more. We offer easy deployment,
                      powerful management tools, and 24/7 support to ensure the best gaming experience for you and your
                      community.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-gray-800">
                    <AccordionTrigger className="text-left">How do I get started with NexusGaming?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      Getting started is easy! Simply create an account, choose your game, select a hosting plan that
                      fits your needs, and complete the checkout process. Your server will be deployed instantly, and
                      you'll receive login details via email. Our intuitive control panel makes it easy to manage your
                      server, install mods, and invite players.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-gray-800">
                    <AccordionTrigger className="text-left">What games do you support?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      We currently support a wide range of popular games including Minecraft, ARK: Survival Evolved,
                      CS:GO, Rust, Valheim, Terraria, 7 Days to Die, Team Fortress 2, and many more. We're constantly
                      adding support for new games based on customer demand.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-gray-800">
                    <AccordionTrigger className="text-left">Where are your servers located?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      We have servers in multiple locations worldwide to ensure low latency for players everywhere. Our
                      current locations include North America (East, Central, West), Europe (West, Central, North), Asia
                      (Singapore, Japan), Australia, and South America. When setting up your server, you can choose the
                      location closest to your player base.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-gray-800">
                    <AccordionTrigger className="text-left">What kind of support do you offer?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      We offer 24/7 support through multiple channels including live chat, email, and a ticket system.
                      Our knowledgeable support team can help with technical issues, billing questions, and general
                      inquiries. Premium plans include priority support with faster response times.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="billing">
              <div className="mx-auto max-w-3xl space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-gray-800">
                    <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and
                      cryptocurrency payments (Bitcoin, Ethereum). For annual plans, we also offer bank transfers and
                      checks for business customers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-gray-800">
                    <AccordionTrigger className="text-left">How does billing work?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      We offer monthly and annual billing cycles. Your subscription will automatically renew at the end
                      of each billing period unless canceled. You can upgrade your plan at any time, and we'll prorate
                      the difference. Downgrading will take effect at the start of your next billing cycle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-gray-800">
                    <AccordionTrigger className="text-left">Do you offer refunds?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service. After that
                      period, we do not provide refunds for the current billing cycle. If you encounter any issues with
                      our service, please contact our support team first so we can try to resolve them.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-gray-800">
                    <AccordionTrigger className="text-left">Can I upgrade my plan later?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      You can upgrade your plan at any time through our control panel. Your data will be migrated
                      automatically to your new server with minimal downtime. We'll prorate the cost difference for the
                      remainder of your billing cycle.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-gray-800">
                    <AccordionTrigger className="text-left">Do you offer discounts?</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      Yes, we offer a 10% discount for annual billing plans. We also have special discounts for
                      educational institutions, non-profits, and large communities. Contact our sales team for more
                      information about these special pricing options.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Similar TabsContent for technical, games, and account */}
          </Tabs>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Most Popular Questions</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Quick answers to our most frequently asked questions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How much RAM do I need for my server?</h3>
              <p className="text-gray-400">
                The RAM requirements depend on the game and number of players. For Minecraft, we recommend 2GB for 10
                players, 4GB for 25 players, and 8GB for 50+ players. Other games like ARK and Rust require more RAM due
                to their resource-intensive nature.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How do I install mods or plugins?</h3>
              <p className="text-gray-400">
                Our control panel provides an easy-to-use interface for installing mods and plugins. Simply browse our
                library or upload your own files. For most games, we offer one-click installations for popular mods and
                modpacks, making the process quick and simple.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What happens if my server crashes?</h3>
              <p className="text-gray-400">
                Our monitoring system automatically detects server crashes and attempts to restart your server. If the
                issue persists, our technical team will be notified and will investigate the problem. You'll also
                receive an email notification about the incident.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I transfer my existing server to NexusGaming?</h3>
              <p className="text-gray-400">
                Yes, we offer free migration services for customers switching from other hosting providers. Our team
                will help transfer your world data, configurations, plugins, and mods to ensure a smooth transition with
                minimal downtime.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How do I back up my server?</h3>
              <p className="text-gray-400">
                All our plans include automated daily backups that are stored for 7 days. Premium plans include more
                frequent backups and longer retention periods. You can also create manual backups at any time through
                our control panel and download them for local storage.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer DDoS protection?</h3>
              <p className="text-gray-400">
                Yes, all our servers include enterprise-grade DDoS protection at no additional cost. Our network is
                designed to mitigate attacks and keep your server online even during large-scale DDoS attempts, ensuring
                a smooth gaming experience for your players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Still Have Questions?</h2>
              <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
                Our support team is ready to help you with any questions you may have.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-200">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

