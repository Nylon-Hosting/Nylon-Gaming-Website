import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, MessageSquare, Code, HelpCircle, Users, CheckCircle2 } from "lucide-react"

export default function VolunteerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
                Join Our Volunteer Team
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Help us build and maintain an amazing gaming community. Apply to become a volunteer today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Available Roles</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Find the perfect volunteer position that matches your skills and interests.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Moderator</CardTitle>
                <CardDescription>Maintain order and enforce rules</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Monitor chat and gameplay</li>
                  <li>Enforce server rules</li>
                  <li>Handle player disputes</li>
                  <li>Report rule violations</li>
                  <li>Assist new players</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Support Staff</CardTitle>
                <CardDescription>Help players with issues and questions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Answer player questions</li>
                  <li>Troubleshoot technical issues</li>
                  <li>Provide server information</li>
                  <li>Assist with account problems</li>
                  <li>Create support documentation</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Developer</CardTitle>
                <CardDescription>Create plugins and custom features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Develop server plugins</li>
                  <li>Create custom game modes</li>
                  <li>Fix bugs and issues</li>
                  <li>Optimize server performance</li>
                  <li>Implement new features</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Game Guide</CardTitle>
                <CardDescription>Create tutorials and help new players</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Create game tutorials</li>
                  <li>Write server documentation</li>
                  <li>Host new player events</li>
                  <li>Answer gameplay questions</li>
                  <li>Create video guides</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Event Coordinator</CardTitle>
                <CardDescription>Plan and host community events</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Plan community events</li>
                  <li>Host tournaments</li>
                  <li>Create engaging activities</li>
                  <li>Manage event schedules</li>
                  <li>Distribute prizes</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>Test new features and report bugs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Test new server features</li>
                  <li>Report bugs and issues</li>
                  <li>Verify bug fixes</li>
                  <li>Provide feedback on changes</li>
                  <li>Document testing procedures</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                  Benefits of Volunteering
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join our team and enjoy these exclusive perks while helping our community grow.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Free Premium Server Access</h3>
                    <p className="text-muted-foreground">Get access to all our premium servers at no cost.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Exclusive Discord Roles</h3>
                    <p className="text-muted-foreground">Stand out with special roles in our Discord community.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Early Access to New Features</h3>
                    <p className="text-muted-foreground">Be the first to try new games and server features.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Team Building Events</h3>
                    <p className="text-muted-foreground">Participate in staff-only events and activities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-foreground">Valuable Experience</h3>
                    <p className="text-muted-foreground">
                      Gain real-world experience in community management, development, and more.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Volunteer Team"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Apply to Volunteer</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Fill out the form below to join our volunteer team.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium leading-none text-foreground">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="John" className="bg-background border-border" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium leading-none text-foreground">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Doe" className="bg-background border-border" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  className="bg-background border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="discord" className="text-sm font-medium leading-none text-foreground">
                  Discord Username
                </label>
                <Input id="discord" placeholder="username#1234" className="bg-background border-border" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium leading-none text-foreground">
                  Preferred Role
                </label>
                <select
                  id="role"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus-visible:ring-primary"
                  required
                >
                  <option value="" disabled selected>
                    Select a role
                  </option>
                  <option value="moderator">Moderator</option>
                  <option value="support">Support Staff</option>
                  <option value="developer">Developer</option>
                  <option value="guide">Game Guide</option>
                  <option value="event">Event Coordinator</option>
                  <option value="qa">Quality Assurance</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-medium leading-none text-foreground">
                  Relevant Experience
                </label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your relevant experience..."
                  className="min-h-[120px] bg-background border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="why" className="text-sm font-medium leading-none text-foreground">
                  Why do you want to volunteer?
                </label>
                <Textarea
                  id="why"
                  placeholder="Tell us why you want to join our volunteer team..."
                  className="min-h-[120px] bg-background border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="availability" className="text-sm font-medium leading-none text-foreground">
                  Availability (hours per week)
                </label>
                <Input
                  id="availability"
                  type="number"
                  min="1"
                  placeholder="5"
                  className="bg-background border-border"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-border bg-background text-primary focus:ring-primary"
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the volunteer terms and code of conduct
                </label>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Volunteer Testimonials
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Hear from our current volunteers about their experiences.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card/10 p-6 backdrop-blur-sm">
              <p className="mb-4 text-foreground">
                "Volunteering as a moderator has been an amazing experience. I've made great friends and learned so much
                about community management."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div className="ml-3">
                  <p className="font-medium text-foreground">Alex Johnson</p>
                  <p className="text-sm text-muted-foreground">Moderator - 1 year</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card/10 p-6 backdrop-blur-sm">
              <p className="mb-4 text-foreground">
                "As a developer volunteer, I've had the opportunity to work on exciting projects and improve my coding
                skills while helping the community."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div className="ml-3">
                  <p className="font-medium text-foreground">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">Developer - 2 years</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card/10 p-6 backdrop-blur-sm">
              <p className="mb-4 text-foreground">
                "Being an event coordinator has allowed me to express my creativity and bring joy to our players through
                fun and engaging events."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-muted"></div>
                <div className="ml-3">
                  <p className="font-medium text-foreground">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Event Coordinator - 8 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Common questions about volunteering with us.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">What are the minimum requirements to volunteer?</h3>
              <p className="text-muted-foreground">
                Volunteers must be at least 18 years old, have a good understanding of our community guidelines, and be
                able to commit at least 5 hours per week.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Is there any compensation for volunteering?</h3>
              <p className="text-muted-foreground">
                While volunteering is unpaid, we offer various perks such as free premium server access, exclusive
                Discord roles, and early access to new features.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">How long does the application process take?</h3>
              <p className="text-muted-foreground">
                The application process typically takes 1-2 weeks. This includes reviewing your application, conducting
                an interview, and completing a brief training period.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Can I volunteer for multiple roles?</h3>
              <p className="text-muted-foreground">
                We recommend starting with one role to get familiar with our systems and community. After a few months,
                you may apply for additional roles if you wish.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">What training is provided for volunteers?</h3>
              <p className="text-muted-foreground">
                All volunteers receive comprehensive training specific to their role. This includes documentation,
                mentoring from experienced volunteers, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

