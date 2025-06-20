"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Package, Eye, EyeOff, ArrowLeft, CheckCircle2, Shield, Clock, Users, Zap } from "lucide-react"
import { SystemSelection } from "./system-selection"
import Image from "next/image"
import logo from "@/public/assets/logo-sm.png"

interface FreeTrialRegistrationProps {
  onBack: () => void
}

export function FreeTrialRegistration({ onBack }: FreeTrialRegistrationProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSystemSelection, setShowSystemSelection] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const benefits = [
    { icon: Clock, text: "30-day free trial" },
    { icon: Shield, text: "No credit card required" },
    { icon: Users, text: "Full access to all features" },
    { icon: Zap, text: "24/7 customer support" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)

    // Auto redirect to system selection after 2 seconds
    setTimeout(() => {
      setShowSystemSelection(true)
    }, 2000)
  }

  const handleContinueToSystemSelection = () => {
    setShowSystemSelection(true)
  }

  // Show system selection page
  if (showSystemSelection) {
    return <SystemSelection onBack={() => setShowSystemSelection(false)} />
  }

  // Success state
  if (isSubmitted && !showSystemSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-2xl">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Welcome to SynqOps!</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Your free trial has been activated. Let's select the systems you need for your business.
            </p>
            <Button
              onClick={handleContinueToSystemSelection}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            >
              Continue to System Selection
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src={logo} alt="SynqOps" width={32} height={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SynqOps
              </span>
            </div>

            {/* Back Button */}
            <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)]">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-6">
          {/* Left Side - Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                Start Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Free Trial
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Get full access to SynqOps ERP platform for 30 days. No credit card required, no hidden fees.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">What's included:</h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-1">Trusted by 500+ Companies</h4>
              <p className="text-sm text-teal-700 dark:text-teal-300">
                Join thousands of businesses that have transformed their operations with SynqOps ERP.
              </p>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-2xl">
              <CardContent className="space-y-4 p-6">
                {/* Google Sign Up */}
                <Button variant="outline" className="w-full h-10">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                <div className="relative">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 px-2 text-xs text-slate-500">
                    Or
                  </span>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input id="name" placeholder="John Carter" required className="mt-1 h-9" />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">
                        Company Name *
                      </Label>
                      <Input id="company" placeholder="Your Company" required className="mt-1 h-9" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Work Email *
                      </Label>
                      <Input id="email" type="email" placeholder="john@company.com" required className="mt-1 h-9" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Contact Number *
                      </Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required className="mt-1 h-9" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password *
                    </Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        required
                        className="h-9 pr-12"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required className="mt-1" />
                    <Label htmlFor="terms" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      I agree to SynqOps{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </a>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="marketing" className="mt-1" />
                    <Label htmlFor="marketing" className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      I would like to receive product updates and marketing communications from SynqOps
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 h-10"
                  >
                    {isLoading ? "Creating Account..." : "Start Free Trial"}
                  </Button>
                </form>

                <p className="text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <a href="#" className="text-emerald-600 hover:underline font-medium">
                    Sign in here
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
