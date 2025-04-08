import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Have questions or need help? We're here for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Get in Touch</h2>
                <p className="text-muted-foreground md:text-xl">
                  Fill out the form and our team will get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-4">
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
                  <label htmlFor="subject" className="text-sm font-medium leading-none text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] bg-background border-border"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Contact Information</h2>
                <p className="text-muted-foreground md:text-xl">Here's how you can reach us directly.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                    <CardDescription>Our friendly team is here to help.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:support@nexusgaming.com" className="text-primary hover:underline">
                      support@nexusgaming.com
                    </a>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Phone</CardTitle>
                    <CardDescription>Mon-Fri from 8am to 5pm.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +1 (234) 567-890
                    </a>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Office</CardTitle>
                    <CardDescription>Come say hello at our office.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      123 Gaming Street
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 mb-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Live Chat</CardTitle>
                    <CardDescription>Our team is online for you.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 w-full">
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">Monday - Friday</span>
                      </div>
                      <span className="text-foreground">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">Saturday</span>
                      </div>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-muted-foreground">Sunday</span>
                      </div>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Support Regions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">North America</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">Europe</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">Asia Pacific</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-muted-foreground">Australia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Find Us</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Visit our office in San Francisco.
              </p>
            </div>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <img src="/placeholder.svg?height=600&width=1200" alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Common questions about contacting us.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">What is your typical response time?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please use
                our live chat for faster assistance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Do you offer phone support?</h3>
              <p className="text-muted-foreground">
                Yes, our phone support is available Monday through Friday from 8am to 5pm Pacific Time. For support
                outside these hours, please use email or submit a ticket.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">How can I report a server issue?</h3>
              <p className="text-muted-foreground">
                The fastest way to report server issues is through our control panel's built-in ticket system. This
                ensures your request is routed to the appropriate technical team.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Can I visit your office?</h3>
              <p className="text-muted-foreground">
                Yes, our office is open for visits during business hours. We recommend scheduling an appointment in
                advance to ensure someone is available to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

