"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Truck, Users, DollarSign, Package, ShoppingCart, CreditCard, Target, ArrowLeft } from "lucide-react"
import { AddonsSelection } from "./addons-selection"

interface SystemSelectionProps {
  onBack?: () => void
}

export function SystemSelection({ onBack }: SystemSelectionProps = {}) {
  const [selectedSystems, setSelectedSystems] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(1)

  const systems = [
    {
      id: "fleet",
      name: "Fleet Management",
      icon: Truck,
      description: "Real-time asset tracking and inventory management.",
      price: 69.0,
      popular: false,
      features: [
        "White-label Admin Portal",
        "Customizable Dashboard",
        "Real-time tracking on map view",
        "Inventory Management across multiple Virtual Garages",
        "Document Management",
        "Users Management",
        "Report Generation",
        "Event Notifications",
        "Route Planning & Optimization",
        "Maintenance Scheduling",
        "Fuel Management",
        "Driver Performance Analytics",
      ],
    },
    {
      id: "hrm",
      name: "Human Resource Management",
      icon: Users,
      description: "Complete employee lifecycle management system.",
      price: 45.0,
      popular: true,
      features: [
        "Employee Profile Management",
        "Biometric Attendance Tracking",
        "Mobile App Check-in/Check-out",
        "Attendance Reports & Analytics",
        "Salary Scale Management",
        "Automated Payroll Processing",
        "Overtime & Bonus Calculations",
        "Leave Management System",
        "Leave Balance Tracking",
        "Mobile Leave Applications",
        "Department & Designation Management",
        "Performance Evaluation Tools",
      ],
    },
    {
      id: "inventory",
      name: "Inventory Management",
      icon: Package,
      description: "Complete stock lifecycle and supplier management.",
      price: 55.0,
      popular: false,
      features: [
        "Real-time Stock Tracking",
        "Multi-location Inventory",
        "Automated Reorder Alerts",
        "Supplier Database Management",
        "Purchase Order Creation",
        "Stock In/Out Reporting",
        "Barcode Scanning Support",
        "Inventory Valuation",
        "Dead Stock Analysis",
        "Supplier Performance Tracking",
        "Batch & Serial Number Tracking",
        "Warehouse Management",
      ],
    },
    {
      id: "finance",
      name: "Finance Management",
      icon: DollarSign,
      description: "Comprehensive financial tracking and reporting system.",
      price: 75.0,
      popular: false,
      features: [
        "Payment Tracking & Processing",
        "Invoice Generation & Management",
        "Expense Management & Categorization",
        "Job-wise Cost Tracking",
        "Monthly P&L Reports",
        "Cash Flow Management",
        "Balance Sheet Generation",
        "Budget Planning & Control",
        "Tax Management",
        "Financial Analytics Dashboard",
        "Multi-currency Support",
        "Audit Trail & Compliance",
      ],
    },
    {
      id: "order-management",
      name: "Order Management System",
      icon: ShoppingCart,
      description: "End-to-end service order and job management.",
      price: 65.0,
      popular: false,
      features: [
        "Job Order Creation & Assignment",
        "Supervisor Mobile Access",
        "Before/After Photo Upload",
        "Service Rate Card Management",
        "Material Allocation Tracking",
        "Job Status Updates",
        "Receipt Generation",
        "Expense Recording",
        "Customer Communication",
        "Service History Tracking",
        "Quality Control Checklists",
        "Performance Analytics",
      ],
    },
    {
      id: "pos",
      name: "Point of Sale",
      icon: CreditCard,
      description: "Complete retail and transaction processing system.",
      price: 39.0,
      popular: false,
      features: [
        "Multi-payment Method Support",
        "Receipt Printing & Email",
        "Inventory Integration",
        "Customer Management",
        "Sales Analytics & Reports",
        "Discount & Promotion Management",
        "Barcode Scanning",
        "Cash Drawer Integration",
        "Return & Refund Processing",
        "Loyalty Program Support",
        "Multi-store Management",
        "Offline Mode Support",
      ],
    },
    {
      id: "sfa",
      name: "Sales Force Automation",
      icon: Target,
      description: "Mobile and web-based sales team management platform.",
      price: 59.0,
      popular: false,
      features: [
        "Lead Management & Tracking",
        "Opportunity Pipeline Management",
        "Customer Relationship Management",
        "Sales Activity Tracking",
        "Mobile Sales App",
        "Territory Management",
        "Sales Performance Analytics",
        "Commission Calculation",
        "Quote & Proposal Generation",
        "Sales Forecasting",
        "Team Collaboration Tools",
        "Real-time Sales Reporting",
      ],
    },
  ]

  const handleSystemToggle = (systemId: string) => {
    setSelectedSystems((prev) => (prev.includes(systemId) ? prev.filter((id) => id !== systemId) : [...prev, systemId]))
  }

  const getTotalPrice = () => {
    return systems
      .filter((system) => selectedSystems.includes(system.id))
      .reduce((total, system) => total + system.price, 0)
  }

  const handleContinueToSetup = () => {
    if (selectedSystems.length > 0) {
      setCurrentStep(2)
    }
  }

  // Show add-ons selection if we're on step 2
  if (currentStep === 2) {
    return <AddonsSelection selectedSystems={selectedSystems} systems={systems} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        {/* Back Button and Brand Logo */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            {onBack && (
              <Button
                variant="outline"
                onClick={onBack}
                className="flex items-center gap-2 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            )}
            <h1 className="text-4xl font-bold tracking-wider">
              SYNQOPS<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">ERP</span>
            </h1>
          </div>
        </div>

        {/* Main Heading and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Self-Serve System Registration</h2>
          <p className="text-emerald-700 dark:text-emerald-200 text-lg max-w-2xl mx-auto">
            Based on your choices, select what we think best fit for your business
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12 max-w-4xl mx-auto">
          <div className="flex items-center w-full">
            {/* Step 1 */}
            <div className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  1
                </div>
                <span className="font-medium">Select Base Module</span>
              </div>
              <div className="flex-1 h-0.5 bg-emerald-200 dark:bg-emerald-800 mx-4"></div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                  2
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Choose Add-ons</span>
              </div>
              <div className="flex-1 h-0.5 bg-emerald-200 dark:bg-emerald-800 mx-4"></div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                  3
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Complete Registration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Step Indicator */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Step 1: Select a Base Module</h3>
        </div>

        {/* Total Price Display */}
        {selectedSystems.length > 0 && (
          <div className="text-right mb-6">
            <p className="text-sm text-emerald-700 dark:text-emerald-300">Total Monthly Cost</p>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${getTotalPrice().toFixed(2)}</p>
          </div>
        )}

        {/* Systems Grid */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6 mb-8">
          {systems.map((system) => {
            const isSelected = selectedSystems.includes(system.id)
            const Icon = system.icon

            return (
              <Card
                key={system.id}
                className={`relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-emerald-100 dark:border-emerald-800 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 transition-all duration-300 cursor-pointer ${
                  isSelected ? "ring-2 ring-emerald-500 bg-emerald-50/80 dark:bg-emerald-900/30" : ""
                }`}
                onClick={() => handleSystemToggle(system.id)}
              >
                {system.popular && (
                  <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">Most Popular</Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-slate-900 dark:text-white text-lg">{system.name}</CardTitle>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{system.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">${system.price.toFixed(2)}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">/monthly</span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">What's included</h4>
                    <div className="space-y-2">
                      {system.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className={`w-full ${
                      isSelected
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSystemToggle(system.id)
                    }}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Action Bar */}
        {selectedSystems.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/95 backdrop-blur-sm border-t border-emerald-200 dark:border-emerald-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {selectedSystems.length} system{selectedSystems.length !== 1 ? "s" : ""} selected
                </p>
                <p className="text-lg font-bold">${getTotalPrice().toFixed(2)}/month</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="border-emerald-200 dark:border-emerald-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                  Save for Later
                </Button>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8" onClick={handleContinueToSetup}>
                  Continue to Setup
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Free Trial Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-lg px-4 py-2">
            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm text-emerald-700 dark:text-emerald-300">All systems include a 30-day free trial • Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}
