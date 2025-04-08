"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, Github, Twitter, Gamepad } from "lucide-react"

export default function SignUpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false)
      router.push("/")
    }, 1500)
  }

  const checkPasswordStrength = (password: string) => {
    let strength = 0

    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    setPasswordStrength(strength)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12 fancy-dots">
      <div className="container relative px-4 md:px-6">
        <div className="mx-auto grid w-full max-w-md gap-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex items-center space-x-2">
              <Gamepad className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl glow-text">Nylon Gaming</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter text-foreground">Create an account</h1>
            <p className="text-muted-foreground">Sign up to get started with Nylon Gaming</p>
          </div>

          <Card className="glass-card border-border/50 bg-card/20 backdrop-blur-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
              <CardDescription>Choose your preferred sign up method</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                  <TabsTrigger
                    value="email"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Email
                  </TabsTrigger>
                  <TabsTrigger
                    value="social"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Social
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="email" className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="first-name"
                            placeholder="John"
                            required
                            className="pl-10 bg-background/50 border-border/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          required
                          className="bg-background/50 border-border/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          required
                          className="pl-10 bg-background/50 border-border/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          required
                          className="pl-10 pr-10 bg-background/50 border-border/50"
                          onChange={(e) => checkPasswordStrength(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      <div className="flex gap-1 mt-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full ${
                              i < passwordStrength
                                ? i < 2
                                  ? "bg-red-500"
                                  : i < 3
                                    ? "bg-yellow-500"
                                    : "bg-green-500"
                                : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Password must be at least 8 characters and include uppercase, numbers, and special characters
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          terms of service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          privacy policy
                        </Link>
                      </Label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full neon-button bg-primary hover:bg-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating account..." : "Create account"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="social" className="mt-4 space-y-4">
                  <Button variant="outline" className="w-full bg-background/50 border-border/50 hover:bg-accent/10">
                    <Github className="mr-2 h-4 w-4" />
                    Continue with GitHub
                  </Button>
                  <Button variant="outline" className="w-full bg-background/50 border-border/50 hover:bg-accent/10">
                    <Twitter className="mr-2 h-4 w-4" />
                    Continue with Twitter
                  </Button>
                  <Button variant="outline" className="w-full bg-background/50 border-border/50 hover:bg-accent/10">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                  <Button variant="outline" className="w-full bg-background/50 border-border/50 hover:bg-accent/10">
                    <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        fill="#1877F2"
                      />
                    </svg>
                    Continue with Facebook
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/sign-in" className="text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

