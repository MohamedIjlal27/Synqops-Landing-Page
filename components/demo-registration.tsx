"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Calendar } from "lucide-react"

export function DemoRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="demo-registration" className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
            <CardContent className="pt-6">
              <div className="mb-4">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
                Demo Scheduled Successfully!
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-6">
                Thank you for your interest! We'll contact you within 24 hours to schedule your personalized demo.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Schedule Another Demo
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="demo-registration" className="py-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-xl text-muted-foreground">
            Book your free personalized demo and discover how our platform can transform your business operations.
          </p>
        </div>

        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-2">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Calendar className="h-6 w-6" />
              Schedule Your Demo
            </CardTitle>
            <CardDescription className="text-base">
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required className="h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input id="email" type="email" placeholder="john@company.com" required className="h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="Your Company" required className="h-12" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" placeholder="CEO, CTO, Manager..." className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your needs (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="What challenges are you looking to solve? What features are most important to you?"
                  className="min-h-[100px] resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={isLoading}>
                {isLoading ? "Scheduling Demo..." : "Schedule Free Demo"}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
