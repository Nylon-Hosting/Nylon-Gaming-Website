import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, AlertTriangle, XCircle, Clock } from "lucide-react"

export default function StatusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">Server Status</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Monitor the operational status of all our gaming servers in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">System Status</CardTitle>
                <CardDescription>Overall system health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mr-2" />
                  <div>
                    <p className="font-medium text-foreground">Operational</p>
                    <p className="text-sm text-muted-foreground">All systems normal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Uptime</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="font-medium text-foreground">99.98%</p>
                    <p className="text-sm text-muted-foreground">10 min downtime</p>
                  </div>
                  <Progress value={99.98} className="h-2 bg-muted" indicatorClassName="bg-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Servers</CardTitle>
                <CardDescription>Currently online</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-foreground mr-2">1,248</div>
                  <div className="text-sm text-green-500">+12 today</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Players</CardTitle>
                <CardDescription>Currently online</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-foreground mr-2">8,392</div>
                  <div className="text-sm text-green-500">+156 today</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Server Status Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-card">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All Servers
                </TabsTrigger>
                <TabsTrigger
                  value="minecraft"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Minecraft
                </TabsTrigger>
                <TabsTrigger
                  value="ark"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  ARK
                </TabsTrigger>
                <TabsTrigger
                  value="csgo"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  CS:GO
                </TabsTrigger>
                <TabsTrigger
                  value="rust"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Rust
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="space-y-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-4 px-6 text-left text-foreground">Server Name</th>
                        <th className="py-4 px-6 text-left text-foreground">Game</th>
                        <th className="py-4 px-6 text-left text-foreground">Region</th>
                        <th className="py-4 px-6 text-left text-foreground">Status</th>
                        <th className="py-4 px-6 text-left text-foreground">Players</th>
                        <th className="py-4 px-6 text-left text-foreground">Uptime</th>
                      </tr>
                    </thead>
                    <tbody>
                      <ServerStatusRow
                        name="SurvivalCraft"
                        game="Minecraft"
                        region="US East"
                        status="operational"
                        players="42/50"
                        uptime="14d 6h"
                      />
                      <ServerStatusRow
                        name="DinoWorld"
                        game="ARK"
                        region="EU West"
                        status="operational"
                        players="68/70"
                        uptime="30d+"
                      />
                      <ServerStatusRow
                        name="FragFactory"
                        game="CS:GO"
                        region="Asia"
                        status="maintenance"
                        players="0/20"
                        uptime="0h"
                      />
                      <ServerStatusRow
                        name="RustVille"
                        game="Rust"
                        region="US West"
                        status="operational"
                        players="95/100"
                        uptime="7d 12h"
                      />
                      <ServerStatusRow
                        name="SkyBlock"
                        game="Minecraft"
                        region="EU Central"
                        status="degraded"
                        players="18/30"
                        uptime="2d 8h"
                      />
                      <ServerStatusRow
                        name="ZombieApocalypse"
                        game="7 Days to Die"
                        region="Australia"
                        status="operational"
                        players="12/20"
                        uptime="5d 3h"
                      />
                      <ServerStatusRow
                        name="StarfieldRP"
                        game="Minecraft"
                        region="US Central"
                        status="operational"
                        players="28/40"
                        uptime="10d 4h"
                      />
                      <ServerStatusRow
                        name="BattleArena"
                        game="CS:GO"
                        region="South America"
                        status="operational"
                        players="16/20"
                        uptime="3d 9h"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Similar TabsContent for minecraft, ark, csgo, and rust */}
          </Tabs>
        </div>
      </section>

      {/* Incident History */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Incident History</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Past incidents and maintenance events.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <IncidentItem
              date="March 15, 2023"
              title="Scheduled Maintenance"
              description="Performed system upgrades and security patches. All servers were offline for approximately 2 hours."
              status="resolved"
              duration="2 hours"
            />
            <IncidentItem
              date="February 28, 2023"
              title="Network Outage"
              description="Experienced network connectivity issues in our US East region. Affected approximately 30% of servers."
              status="resolved"
              duration="45 minutes"
            />
            <IncidentItem
              date="January 12, 2023"
              title="DDoS Attack"
              description="Mitigated a distributed denial-of-service attack targeting our Minecraft servers."
              status="resolved"
              duration="1 hour 20 minutes"
            />
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Stay Updated</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Subscribe to receive notifications about server status and maintenance.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-muted-foreground">
                We'll only send you updates about server status and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServerStatusRow({
  name,
  game,
  region,
  status,
  players,
  uptime,
}: {
  name: string
  game: string
  region: string
  status: "operational" | "degraded" | "maintenance" | "offline"
  players: string
  uptime: string
}) {
  const statusIcons = {
    operational: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    degraded: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    maintenance: <Clock className="h-5 w-5 text-blue-500" />,
    offline: <XCircle className="h-5 w-5 text-red-500" />,
  }

  const statusText = {
    operational: "Operational",
    degraded: "Degraded",
    maintenance: "Maintenance",
    offline: "Offline",
  }

  return (
    <tr className="border-b border-border">
      <td className="py-4 px-6 text-left font-medium text-foreground">{name}</td>
      <td className="py-4 px-6 text-left text-muted-foreground">{game}</td>
      <td className="py-4 px-6 text-left text-muted-foreground">{region}</td>
      <td className="py-4 px-6 text-left">
        <div className="flex items-center">
          {statusIcons[status]}
          <span className="ml-2 text-foreground">{statusText[status]}</span>
        </div>
      </td>
      <td className="py-4 px-6 text-left text-muted-foreground">{players}</td>
      <td className="py-4 px-6 text-left text-muted-foreground">{uptime}</td>
    </tr>
  )
}

function IncidentItem({
  date,
  title,
  description,
  status,
  duration,
}: {
  date: string
  title: string
  description: string
  status: "resolved" | "investigating" | "monitoring"
  duration: string
}) {
  return (
    <div className="border-l-4 border-green-500 pl-4 py-2">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <div className="text-sm text-muted-foreground">{date}</div>
        <div className="flex items-center">
          <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-500">
            Resolved
          </span>
          <span className="ml-2 text-sm text-muted-foreground">Duration: {duration}</span>
        </div>
      </div>
      <h3 className="text-lg font-medium text-foreground">{title}</h3>
      <p className="text-muted-foreground mt-1">{description}</p>
    </div>
  )
}

