"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Gamepad, ArrowLeft, CheckCircle } from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
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
            <h1 className="text-3xl font-bold tracking-tighter text-foreground">Reset password</h1>
            <p className="text-muted-foreground">Enter your email to receive a password reset link</p>
          </div>

          <Card className="glass-card border-border/50 bg-card/20 backdrop-blur-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
              <CardDescription>We'll send you instructions to reset your password</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-6">
                  <div className="rounded-full bg-primary/20 p-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-foreground">Check your email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We've sent a password reset link to your email address.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Button
                    type="submit"
                    className="w-full neon-button bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send reset link"}
                  </Button>
                </form>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                <Link href="/auth/sign-in" className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

