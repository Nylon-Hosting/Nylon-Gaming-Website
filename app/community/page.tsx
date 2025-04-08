import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Users, Clock, Heart, Eye, Pin, Search, FlameIcon as Fire, Zap, Shield } from "lucide-react"

// Define static data with const declarations
const forumCategories = [
  "All",
  "General",
  "Game Specific",
  "Technical Support",
  "Modding",
  "Servers",
  "Community Events",
]

const forumThreads = [
  {
    id: 1,
    title: "Welcome to the Nylon Gaming Community!",
    category: "General",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 24,
    views: 1352,
    likes: 47,
    isPinned: true,
    isAnnouncement: true,
    lastActivity: "2 hours ago",
    activityLevel: "high",
  },
  {
    id: 2,
    title: "Minecraft Server Optimization Guide",
    category: "Game Specific",
    author: {
      name: "MinecraftPro",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 56,
    views: 2103,
    likes: 89,
    isPinned: true,
    isAnnouncement: false,
    lastActivity: "5 hours ago",
    activityLevel: "high",
  },
  {
    id: 3,
    title: "How to install mods on your ARK server",
    category: "Modding",
    author: {
      name: "DinoTamer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 32,
    views: 1205,
    likes: 41,
    isPinned: false,
    isAnnouncement: false,
    lastActivity: "1 day ago",
    activityLevel: "medium",
  },
  {
    id: 4,
    title: "Server not starting after update - HELP!",
    category: "Technical Support",
    author: {
      name: "GameLover123",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 8,
    views: 342,
    likes: 2,
    isPinned: false,
    isAnnouncement: false,
    lastActivity: "3 hours ago",
    activityLevel: "high",
  },
  {
    id: 5,
    title: "Monthly Community Tournament - Sign Up Now!",
    category: "Community Events",
    author: {
      name: "EventCoordinator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 87,
    views: 3241,
    likes: 124,
    isPinned: true,
    isAnnouncement: true,
    lastActivity: "12 hours ago",
    activityLevel: "high",
  },
  {
    id: 6,
    title: "CS:GO Server Configuration for Competitive Play",
    category: "Game Specific",
    author: {
      name: "FragMaster",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 41,
    views: 1876,
    likes: 63,
    isPinned: false,
    isAnnouncement: false,
    lastActivity: "2 days ago",
    activityLevel: "medium",
  },
  {
    id: 7,
    title: "Rust Base Design Showcase",
    category: "Game Specific",
    author: {
      name: "RustRaider",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 29,
    views: 1543,
    likes: 37,
    isPinned: false,
    isAnnouncement: false,
    lastActivity: "1 day ago",
    activityLevel: "medium",
  },
  {
    id: 8,
    title: "Server backup and restore guide",
    category: "Technical Support",
    author: {
      name: "TechGuru",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 15,
    views: 876,
    likes: 28,
    isPinned: false,
    isAnnouncement: false,
    lastActivity: "4 days ago",
    activityLevel: "low",
  },
  {
    id: 9,
    title: "Community Feedback - New Features Request",
    category: "General",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 93,
    views: 2187,
    likes: 76,
    isPinned: true,
    isAnnouncement: false,
    lastActivity: "6 hours ago",
    activityLevel: "high",
  },
  {
    id: 10,
    title: "Valheim Server Showcase - Come Visit!",
    category: "Servers",
    author: {
      name: "VikingChief",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    replies: 18,
    views: 743,
    likes: 31,
    isPinned: false,
    isAnnouncement: false,
    lastActivity: "2 days ago",
    activityLevel: "low",
  },
]

const activeUsers = [
  { name: "Admin", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
  { name: "MinecraftPro", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
  { name: "DinoTamer", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
  { name: "GameLover123", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
  { name: "EventCoordinator", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
  { name: "FragMaster", avatar: "/placeholder.svg?height=40&width=40", status: "away" },
  { name: "RustRaider", avatar: "/placeholder.svg?height=40&width=40", status: "away" },
  { name: "TechGuru", avatar: "/placeholder.svg?height=40&width=40", status: "online" },
]

const upcomingEvents = [
  {
    title: "CS:GO Tournament",
    date: "June 15, 2023",
    time: "7:00 PM EST",
    description: "5v5 competitive tournament with prizes for the top teams.",
    game: "CS:GO",
  },
  {
    title: "Minecraft Building Contest",
    date: "June 20, 2023",
    time: "3:00 PM EST",
    description: "Show off your building skills and win awesome prizes!",
    game: "Minecraft",
  },
  {
    title: "Rust Raid Night",
    date: "June 25, 2023",
    time: "8:00 PM EST",
    description: "Join forces with other players for an epic raid night.",
    game: "Rust",
  },
]

const communityGuidelines = [
  {
    title: "Be Respectful",
    description: "Treat others with respect. No harassment, hate speech, or personal attacks.",
    icon: Shield,
  },
  {
    title: "Stay On Topic",
    description: "Keep discussions relevant to the thread topic. Create a new thread if needed.",
    icon: MessageSquare,
  },
  {
    title: "No Spam",
    description: "Don't spam or post excessive self-promotion. Quality over quantity.",
    icon: Fire,
  },
  {
    title: "Keep It Clean",
    description: "No explicit, offensive, or inappropriate content. Keep it family-friendly.",
    icon: Shield,
  },
  {
    title: "Help Others",
    description: "Share your knowledge and help others when you can. We're all here to learn.",
    icon: Users,
  },
  {
    title: "Have Fun",
    description: "Most importantly, enjoy being part of our gaming community!",
    icon: Zap,
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl glow-text">
                Nylon Gaming Community
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Connect with fellow gamers, share experiences, and get help from our community.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search the forums..."
                  className="bg-background/50 border-border/50 pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-2xl font-bold text-foreground">Discussion Forums</h2>
                <div className="flex gap-2">
                  <Button className="neon-button bg-primary hover:bg-primary/90">New Thread</Button>
                  <Button
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                  >
                    My Threads
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="All" className="w-full">
                <div className="overflow-x-auto pb-2">
                  <TabsList className="bg-card/50 border border-border/30">
                    {forumCategories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {forumCategories.map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="space-y-4">
                      {forumThreads
                        .filter((thread) => category === "All" || thread.category === category)
                        .map((thread) => (
                          <Link key={thread.id} href={`/community/thread/${thread.id}`}>
                            <div className="rounded-lg border border-border/30 p-4 bg-card/20 backdrop-blur-sm forum-thread glass-card">
                              <div className="flex items-start gap-4">
                                <div className="hidden sm:block">
                                  <div className="relative h-10 w-10 rounded-full overflow-hidden forum-avatar">
                                    <Image
                                      src={thread.author.avatar || "/placeholder.svg"}
                                      alt={thread.author.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2 mb-1">
                                    {thread.isPinned && (
                                      <Badge className="bg-muted text-foreground border-none">
                                        <Pin className="h-3 w-3 mr-1" /> Pinned
                                      </Badge>
                                    )}
                                    {thread.isAnnouncement && (
                                      <Badge className="bg-primary text-primary-foreground border-none">
                                        Announcement
                                      </Badge>
                                    )}
                                    <Badge
                                      variant="outline"
                                      className={`forum-category border-border/50 ${
                                        thread.category === "Game Specific"
                                          ? "text-cyan-400"
                                          : thread.category === "Technical Support"
                                            ? "text-red-400"
                                            : thread.category === "Modding"
                                              ? "text-green-400"
                                              : thread.category === "Servers"
                                                ? "text-yellow-400"
                                                : thread.category === "Community Events"
                                                  ? "text-purple-400"
                                                  : "text-primary"
                                      }`}
                                    >
                                      {thread.category}
                                    </Badge>
                                    <div className={`activity-indicator activity-${thread.activityLevel}`}></div>
                                  </div>
                                  <h3 className="text-lg font-medium text-foreground truncate">{thread.title}</h3>
                                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                                    <span className="flex items-center">
                                      <Users className="h-3.5 w-3.5 mr-1" /> {thread.author.name}
                                    </span>
                                    <span className="flex items-center">
                                      <MessageSquare className="h-3.5 w-3.5 mr-1" /> {thread.replies} replies
                                    </span>
                                    <span className="flex items-center">
                                      <Eye className="h-3.5 w-3.5 mr-1" /> {thread.views} views
                                    </span>
                                    <span className="flex items-center">
                                      <Heart className="h-3.5 w-3.5 mr-1" /> {thread.likes} likes
                                    </span>
                                    <span className="flex items-center">
                                      <Clock className="h-3.5 w-3.5 mr-1" /> {thread.lastActivity}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                >
                  Load More
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              {/* Active Users */}
              <Card className="bg-card/20 backdrop-blur-sm border-border/30 glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Active Users</CardTitle>
                  <CardDescription>
                    {activeUsers.filter((user) => user.status === "online").length} users online now
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {activeUsers.map((user, index) => (
                      <div key={index} className="relative group">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden forum-avatar">
                          <Image
                            src={user.avatar || "/placeholder.svg"}
                            alt={user.name}
                            fill
                            className="object-cover"
                          />
                          <div
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                              user.status === "online" ? "bg-primary" : "bg-yellow-500"
                            }`}
                          ></div>
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-card text-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {user.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="bg-card/20 backdrop-blur-sm border-border/30 glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  <CardDescription>Join our community events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-b border-border/30 last:border-0 pb-4 last:pb-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-foreground">{event.title}</h4>
                          <Badge
                            variant="outline"
                            className={`border-border/50 ${
                              event.game === "CS:GO"
                                ? "text-yellow-400"
                                : event.game === "Minecraft"
                                  ? "text-green-400"
                                  : "text-red-400"
                            }`}
                          >
                            {event.game}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          <div>
                            {event.date} at {event.time}
                          </div>
                          <p className="mt-1">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
                  >
                    View All Events
                  </Button>
                </CardFooter>
              </Card>

              {/* Community Stats */}
              <Card className="bg-card/20 backdrop-blur-sm border-border/30 glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Community Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Members:</span>
                      <span className="font-medium text-foreground">15,432</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Threads:</span>
                      <span className="font-medium text-foreground">8,721</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Posts:</span>
                      <span className="font-medium text-foreground">124,567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Newest Member:</span>
                      <span className="font-medium text-primary">GameMaster42</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl glow-text">
                Community Guidelines
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Please follow these guidelines to keep our community friendly and welcoming.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communityGuidelines.map((guideline, index) => (
              <div
                key={index}
                className="rounded-lg border border-border/30 p-6 bg-card/20 backdrop-blur-sm glass-card"
              >
                <div className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mr-3">
                    <guideline.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{guideline.title}</h3>
                </div>
                <p className="text-muted-foreground">{guideline.description}</p>
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
                Join Our Discord Community
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Connect with other players, get real-time support, and stay updated on the latest news.
              </p>
            </div>
            <Button size="lg" className="neon-button bg-[#5865F2] hover:bg-[#4752C4] text-white">
              Join Discord
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

