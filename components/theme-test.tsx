"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ThemeTest() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Card className="w-full max-w-md mx-auto my-8">
      <CardHeader>
        <CardTitle>Theme Test Component</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">Current Theme:</div>
          <div className="text-sm">{theme}</div>

          <div className="text-sm font-medium">Resolved Theme:</div>
          <div className="text-sm">{resolvedTheme}</div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme("light")}
            className={theme === "light" ? "border-primary text-primary" : ""}
          >
            Light
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "border-primary text-primary" : ""}
          >
            Dark
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme("system")}
            className={theme === "system" ? "border-primary text-primary" : ""}
          >
            System
          </Button>
        </div>

        <div className="space-y-2">
          <div className="p-2 bg-background border border-border rounded-md">Background</div>
          <div className="p-2 bg-card border border-border rounded-md">Card</div>
          <div className="p-2 bg-primary text-primary-foreground rounded-md">Primary</div>
          <div className="p-2 bg-secondary text-secondary-foreground rounded-md">Secondary</div>
          <div className="p-2 bg-muted text-muted-foreground rounded-md">Muted</div>
          <div className="p-2 bg-accent text-accent-foreground rounded-md">Accent</div>
        </div>
      </CardContent>
    </Card>
  )
}

