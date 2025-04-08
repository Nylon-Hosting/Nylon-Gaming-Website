import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, User, Tag, ChevronRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">NexusGaming Blog</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                News, updates, tutorials, and gaming insights from our team.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <Input type="search" placeholder="Search articles..." className="bg-gray-900 border-gray-800" />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=800" alt="Featured Post" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-purple-600/10 px-2.5 py-0.5 text-xs font-medium text-purple-600">
                    Featured
                  </span>
                  <span className="text-sm text-gray-400">June 12, 2023</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                  Optimizing Your Minecraft Server for Maximum Performance
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Learn how to fine-tune your Minecraft server settings to handle more players, reduce lag, and create a
                  smoother gaming experience for everyone.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">By Alex Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">10 min read</span>
                </div>
              </div>
              <Button className="w-fit bg-purple-600 hover:bg-purple-700">Read Article</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900">
                <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
                  All Posts
                </TabsTrigger>
                <TabsTrigger value="tutorials" className="data-[state=active]:bg-purple-600">
                  Tutorials
                </TabsTrigger>
                <TabsTrigger value="news" className="data-[state=active]:bg-purple-600">
                  News
                </TabsTrigger>
                <TabsTrigger value="updates" className="data-[state=active]:bg-purple-600">
                  Updates
                </TabsTrigger>
                <TabsTrigger value="community" className="data-[state=active]:bg-purple-600">
                  Community
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Setting Up Your First ARK Server: A Beginner's Guide",
                    description: "Everything you need to know to get your ARK: Survival Evolved server up and running.",
                    image: "/placeholder.svg?height=200&width=400",
                    category: "Tutorials",
                    date: "May 28, 2023",
                    author: "Sarah Chen",
                    readTime: "8 min read",
                  },
                  {
                    title: "Top 10 Minecraft Mods for 2023",
                    description:
                      "Explore the best Minecraft mods that will transform your gameplay experience this year.",
                    image: "/placeholder.svg?height=200&width=400",
                    category: "Community",
                    date: "May 15, 2023",
                    author: "Michael Rodriguez",
                    readTime: "12 min read",
                  },
                  {
                    title: "Major Platform Update: New Features and Improvements",
                    description: "We've added new games, improved our control panel, and enhanced server performance.",
                    image: "/placeholder.svg?height=200&width=400",
                    category: "Updates",
                    date: "April 30, 2023",
                    author: "Emily Taylor",
                    readTime: "5 min read",
                  },
                  {
                    title: "Protecting Your Game Server from DDoS Attacks",
                    description: "Learn how to safeguard your gaming community from malicious attacks.",
                    image: "/placeholder.svg?height=200&width=400",
                    category: "Tutorials",
                    date: "April 22, 2023",
                    author: "David Kim",
                    readTime: "7 min read",
                  },
                  {
                    title: "Community Spotlight: The Rusty Survivors",
                    description: "Meet the team behind one of the most popular Rust servers hosted on our platform.",
                    image: "/placeholder.svg?height=200&width=400",
                    category: "Community",
                    date: "April 10, 2023",
                    author: "Jessica Patel",
                    readTime: "6 min read",
                  },
                  {
                    title: "CS:GO Server Configuration for Competitive Play",
                    description: "Optimize your CS:GO server settings for tournaments and competitive matches.",
                    image: "/placeholder.svg?height=200&width=400",
                    category: "Tutorials",
                    date: "March 25, 2023",
                    author: "Ryan Wilson",
                    readTime: "9 min read",
                  },
                ].map((post, index) => (
                  <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full bg-purple-600/10 px-2.5 py-0.5 text-xs font-medium text-purple-600">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="text-gray-400">{post.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-500 p-0">
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-950">
                  Load More Articles
                </Button>
              </div>
            </TabsContent>

            {/* Similar TabsContent for tutorials, news, updates, and community */}
          </Tabs>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Popular Topics</h2>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Browse articles by topic to find exactly what you're looking for.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Minecraft",
              "ARK",
              "CS:GO",
              "Rust",
              "Valheim",
              "Server Setup",
              "Optimization",
              "Mods",
              "Plugins",
              "Security",
              "Backups",
              "Performance",
              "Community",
              "Tutorials",
              "Updates",
              "Events",
              "Modpacks",
              "Configuration",
              "Admin Tips",
              "Troubleshooting",
            ].map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase()}`}
                className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900 px-3 py-1 text-sm hover:bg-gray-800"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="max-w-[700px] text-gray-200 md:text-xl/relaxed">
                Get the latest gaming news, server tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Button type="submit" className="bg-white text-purple-900 hover:bg-gray-200">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-300">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

