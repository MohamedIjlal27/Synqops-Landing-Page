"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Check,
  ArrowLeft,
  Package,
  Calendar,
  Users,
  DollarSign,
  Settings,
  Shield,
  Clock,
  Wrench,
  CheckCircle2,
  Star,
  Gift,
} from "lucide-react"
import Image from "next/image"
import logo from "@/public/assets/logo-sm.png"

interface ConfirmationPageProps {
  selectedSystems: Array<{
    id: string
    name: string
    icon: any
    price: number
    features: string[]
  }>
  selectedAddons: Array<{
    id: string
    name: string
    icon: any
    price: number
    features: string[]
  }>
  onBack: () => void
}

export function ConfirmationPage({ selectedSystems, selectedAddons, onBack }: ConfirmationPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Pricing calculations
  const systemsTotal = selectedSystems.reduce((total, system) => total + system.price, 0)
  const addonsTotal = selectedAddons.reduce((total, addon) => total + addon.price, 0)
  const monthlyTotal = systemsTotal + addonsTotal
  const annualTotal = monthlyTotal * 12
  const implementationCharge = Math.max(2500, monthlyTotal * 3) // Minimum $2500 or 3 months subscription
  const perUserAnnualFee = 120 // $120 per user per year

  const benefits = [
    {
      icon: Gift,
      title: "2 Months Free Service",
      description: "No subscription charges for the first 2 months after implementation",
      highlight: true,
    },
    {
      icon: Wrench,
      title: "Free Modifications",
      description: "Any customization or modification within the first 2 months is completely free",
      highlight: true,
    },
    {
      icon: Shield,
      title: "30-Day Free Trial",
      description: "Full access to all features during your trial period",
      highlight: false,
    },
    {
      icon: Settings,
      title: "Complete Setup",
      description: "Full system implementation and configuration included",
      highlight: false,
    },
    {
      icon: Users,
      title: "Training Included",
      description: "Comprehensive training for your team during implementation",
      highlight: false,
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support during and after implementation",
      highlight: false,
    },
  ]

  const handleConfirmOrder = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsSubmitting(false)
    setIsCompleted(true)

    // Auto redirect to login after 3 seconds
    setTimeout(() => {
      window.location.href = "/login"
    }, 3000)
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full text-center border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-2xl">
          <CardContent className="pt-8 pb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Order Confirmed!</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Thank you for choosing SynqOps! Our implementation team will contact you within 24 hours to begin your
              setup process.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What happens next?</h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 text-left">
                <li>• Implementation team will reach out within 24 hours</li>
                <li>• Project kickoff meeting scheduled within 48 hours</li>
                <li>• System setup and configuration begins</li>
                <li>• Team training and go-live support</li>
              </ul>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={() => (window.location.href = "/login")}
            >
              Continue to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-20">
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
              Back
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Confirm Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Order</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Review your selected systems and pricing before we begin implementation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Selected Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Systems */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  Selected Systems ({selectedSystems.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedSystems.map((system) => {
                  const Icon = system.icon
                  return (
                    <div
                      key={system.id}
                      className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white">{system.name}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {system.features.slice(0, 3).join(", ")}...
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          ${system.price.toFixed(2)}/month
                        </Badge>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Selected Add-ons */}
            {selectedAddons.length > 0 && (
              <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                    <Settings className="h-5 w-5" />
                    Selected Add-ons ({selectedAddons.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedAddons.map((addon) => {
                    const Icon = addon.icon
                    return (
                      <div
                        key={addon.id}
                        className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 dark:text-white">{addon.name}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            {addon.features.slice(0, 2).join(", ")}...
                          </p>
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          >
                            ${addon.price.toFixed(2)}/month
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            )}

            {/* Special Benefits */}
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Special Launch Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits
                    .filter((benefit) => benefit.highlight)
                    .map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <benefit.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{benefit.title}</h3>
                          <p className="text-sm opacity-90">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Benefits - Moved from bottom */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {benefits
                  .filter((benefit) => !benefit.highlight)
                  .map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <benefit.icon className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white text-sm">{benefit.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Pricing Summary */}
          <aside className="h-fit lg:max-w-md">
            {/* Pricing Breakdown */}
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg sticky top-4 w-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
                  <DollarSign className="h-5 w-5" />
                  Pricing Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Trial Period */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-900 dark:text-blue-100">30-Day Free Trial</span>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-1">Full access to all features</p>
                  <p className="text-lg font-bold text-blue-900 dark:text-blue-100">$0.00</p>
                </div>

                {/* Implementation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Implementation Charge</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      ${implementationCharge.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">One-time setup and configuration fee</p>
                </div>

                <Separator />

                {/* Monthly Breakdown */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">After Trial Period:</h4>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Systems ({selectedSystems.length})</span>
                    <span className="text-slate-900 dark:text-white">${systemsTotal.toFixed(2)}/month</span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 dark:text-slate-400">Add-ons ({selectedAddons.length})</span>
                      <span className="text-slate-900 dark:text-white">${addonsTotal.toFixed(2)}/month</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Per User Annual Fee</span>
                    <span className="text-slate-900 dark:text-white">${perUserAnnualFee}/user/year</span>
                  </div>
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-slate-900 dark:text-white">Monthly Total</span>
                    <span className="font-bold text-slate-900 dark:text-white">${monthlyTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400">Annual Total</span>
                    <span className="font-semibold text-slate-900 dark:text-white">${annualTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Special Offer Alert */}
                <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <Gift className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-700 dark:text-green-300">
                    <strong>Limited Time:</strong> First 2 months free after implementation + free modifications!
                  </AlertDescription>
                </Alert>

                {/* Confirm Button */}
                <Button
                  onClick={handleConfirmOrder}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 h-12 text-lg font-semibold"
                >
                  {isSubmitting ? "Starting Trial..." : "Start Trial"}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By confirming, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Important Notes */}
        <Card className="mt-8 bg-white/80 dark:bg-slate-800/50 border border-emerald-100 dark:border-emerald-800">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Important Notes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>30-day free trial with full feature access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>2 months free subscription after implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Free modifications within first 2 months</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Implementation includes full setup and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>24/7 support during and after implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Modifications after 2 months are chargeable</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
