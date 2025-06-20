"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  const scrollToDemo = () => {
    document.getElementById("demo-registration")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Transform Your
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how our innovative platform can streamline your workflow, boost productivity, and drive
            unprecedented growth for your business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6 group" onClick={scrollToDemo}>
            Get Free Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm">
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="h-8 w-20 bg-muted rounded"></div>
            <div className="h-8 w-20 bg-muted rounded"></div>
            <div className="h-8 w-20 bg-muted rounded"></div>
            <div className="h-8 w-20 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
