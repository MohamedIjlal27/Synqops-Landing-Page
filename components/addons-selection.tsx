"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Check,
  Info,
  Car,
  Camera,
  Smartphone,
  BarChart3,
  DollarSign,
  Users,
  Package,
  CreditCard,
  ShoppingCart,
  Target,
  ArrowLeft,
} from "lucide-react"
import { ConfirmationPage } from "./confirmation-page"

interface AddonsSelectionProps {
  selectedSystems: string[]
  systems: Array<{
    id: string
    name: string
    icon: any
    price: number
    features: string[]
  }>
  onBack?: () => void
}

export function AddonsSelection({ selectedSystems, systems, onBack }: AddonsSelectionProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Get the first selected system for display
  const primarySystem = systems.find((system) => selectedSystems.includes(system.id))

  // Define add-ons based on selected systems
  const getAddonsForSystems = () => {
    const addons = []

    if (selectedSystems.includes("fleet")) {
      addons.push(
        {
          id: "driver-management",
          name: "Driver Management",
          icon: Car,
          description: "Comprehensive driver management and performance analytics",
          price: 12.99,
          features: [
            "Driver Profile Management",
            "License & Certification Tracking",
            "Driver Performance Scoring",
            "Behavior Analytics & Alerts",
            "Training Management",
            "Violation Tracking",
            "Driver Mobile App",
            "Shift Management",
            "Route Assignment",
            "Fuel Efficiency Monitoring",
            "Safety Compliance Reports",
            "Driver Communication Portal",
          ],
        },
        {
          id: "ai-dashcam",
          name: "AI Dashcam Integration",
          icon: Camera,
          description: "AI-powered dashcam with real-time monitoring and alerts",
          price: 35.99,
          features: [
            "Real-time Video Monitoring",
            "AI-powered Event Detection",
            "Collision Detection & Alerts",
            "Driver Fatigue Monitoring",
            "Speed Violation Alerts",
            "Lane Departure Warnings",
            "Video Evidence Storage",
            "Live Streaming Capability",
            "Incident Report Generation",
            "Fleet Safety Scoring",
            "Insurance Integration",
            "Emergency Response Automation",
          ],
        },
        {
          id: "fuel-management",
          name: "Fuel Management System",
          icon: BarChart3,
          description: "Advanced fuel tracking and cost optimization",
          price: 18.99,
          features: [
            "Fuel Consumption Tracking",
            "Fuel Card Integration",
            "Cost Analysis & Reporting",
            "Fuel Theft Detection",
            "Route Optimization for Fuel Efficiency",
            "Carbon Footprint Tracking",
            "Fuel Station Locator",
            "Budget Management",
            "Automated Fuel Reports",
            "Driver Fuel Behavior Analysis",
          ],
        },
      )
    }

    if (selectedSystems.includes("hrm")) {
      addons.push(
        {
          id: "advanced-payroll",
          name: "Advanced Payroll Management",
          icon: DollarSign,
          description: "Comprehensive payroll processing with tax management",
          price: 25.99,
          features: [
            "Multi-country Payroll Support",
            "Tax Calculation & Filing",
            "Benefits Administration",
            "Overtime & Bonus Management",
            "Payroll Analytics Dashboard",
            "Direct Deposit Integration",
            "Pay Stub Generation",
            "Year-end Tax Forms",
            "Compliance Management",
            "Audit Trail & Reporting",
            "Employee Self-Service Portal",
            "Integration with Accounting Systems",
          ],
        },
        {
          id: "performance-management",
          name: "Performance Management Suite",
          icon: BarChart3,
          description: "Complete performance evaluation and goal tracking system",
          price: 19.99,
          features: [
            "360-Degree Performance Reviews",
            "Goal Setting & Tracking",
            "Performance Analytics",
            "Competency Management",
            "Career Development Planning",
            "Succession Planning",
            "Performance Improvement Plans",
            "Manager Dashboard",
            "Employee Development Tracking",
            "Skills Gap Analysis",
            "Performance Calibration",
            "Custom Review Templates",
          ],
        },
        {
          id: "recruitment-ats",
          name: "Applicant Tracking System",
          icon: Users,
          description: "Complete recruitment and hiring management platform",
          price: 29.99,
          features: [
            "Job Posting Management",
            "Resume Parsing & Screening",
            "Interview Scheduling",
            "Candidate Communication",
            "Hiring Pipeline Management",
            "Background Check Integration",
            "Offer Management",
            "Onboarding Workflows",
            "Recruitment Analytics",
            "Talent Pool Management",
            "Integration with Job Boards",
            "Collaborative Hiring Tools",
          ],
        },
      )
    }

    if (selectedSystems.includes("inventory")) {
      addons.push(
        {
          id: "warehouse-management",
          name: "Warehouse Management System",
          icon: Package,
          description: "Advanced warehouse operations and optimization",
          price: 32.99,
          features: [
            "Warehouse Layout Management",
            "Pick & Pack Optimization",
            "Barcode & RFID Integration",
            "Inventory Location Tracking",
            "Cycle Counting Management",
            "Shipping & Receiving",
            "Labor Management",
            "Warehouse Analytics",
            "Cross-docking Support",
            "Returns Management",
            "Quality Control Workflows",
            "Integration with Carriers",
          ],
        },
        {
          id: "demand-forecasting",
          name: "AI Demand Forecasting",
          icon: BarChart3,
          description: "Machine learning-powered demand prediction and planning",
          price: 45.99,
          features: [
            "AI-powered Demand Prediction",
            "Seasonal Trend Analysis",
            "Market Intelligence Integration",
            "Safety Stock Optimization",
            "Reorder Point Automation",
            "Supplier Lead Time Analysis",
            "ABC/XYZ Classification",
            "Slow-moving Stock Identification",
            "Promotional Impact Analysis",
            "Multi-location Forecasting",
            "Custom Forecasting Models",
            "Integration with Sales Data",
          ],
        },
        {
          id: "supplier-portal",
          name: "Supplier Collaboration Portal",
          icon: Users,
          description: "Enhanced supplier relationship and collaboration platform",
          price: 22.99,
          features: [
            "Supplier Self-Service Portal",
            "Purchase Order Collaboration",
            "Invoice Management",
            "Supplier Performance Tracking",
            "Quality Management",
            "Supplier Onboarding",
            "Contract Management",
            "Supplier Scorecards",
            "Communication Tools",
            "Document Sharing",
            "Supplier Directory",
            "Risk Assessment Tools",
          ],
        },
      )
    }

    if (selectedSystems.includes("finance")) {
      addons.push(
        {
          id: "advanced-reporting",
          name: "Advanced Financial Reporting",
          icon: BarChart3,
          description: "Comprehensive financial analytics and custom reporting",
          price: 28.99,
          features: [
            "Custom Report Builder",
            "Financial Dashboard Creation",
            "Budget vs Actual Analysis",
            "Cash Flow Forecasting",
            "Profitability Analysis",
            "Cost Center Reporting",
            "Multi-dimensional Analysis",
            "Automated Report Scheduling",
            "Executive Dashboards",
            "KPI Monitoring",
            "Variance Analysis",
            "Financial Consolidation",
          ],
        },
        {
          id: "expense-management",
          name: "Expense Management System",
          icon: CreditCard,
          description: "Complete expense tracking and reimbursement management",
          price: 15.99,
          features: [
            "Mobile Expense Capture",
            "Receipt OCR Technology",
            "Automated Expense Categorization",
            "Approval Workflows",
            "Mileage Tracking",
            "Corporate Card Integration",
            "Policy Compliance Checking",
            "Reimbursement Processing",
            "Expense Analytics",
            "Travel Booking Integration",
            "Multi-currency Support",
            "Tax Compliance Features",
          ],
        },
        {
          id: "tax-management",
          name: "Tax Management Suite",
          icon: DollarSign,
          description: "Comprehensive tax calculation and compliance management",
          price: 39.99,
          features: [
            "Multi-jurisdiction Tax Calculation",
            "Sales Tax Automation",
            "VAT/GST Management",
            "Tax Return Preparation",
            "Compliance Monitoring",
            "Audit Trail Management",
            "Tax Rate Updates",
            "Exemption Certificate Management",
            "Tax Reporting Dashboard",
            "Integration with Tax Authorities",
            "Tax Planning Tools",
            "Risk Assessment",
          ],
        },
      )
    }

    if (selectedSystems.includes("order-management")) {
      addons.push(
        {
          id: "mobile-workforce",
          name: "Mobile Workforce Management",
          icon: Smartphone,
          description: "Complete mobile solution for field service teams",
          price: 16.99,
          features: [
            "Field Service Mobile App",
            "GPS Tracking & Navigation",
            "Offline Work Capability",
            "Digital Forms & Checklists",
            "Photo & Video Capture",
            "Electronic Signatures",
            "Real-time Job Updates",
            "Customer Communication",
            "Inventory Management",
            "Time & Expense Tracking",
            "Route Optimization",
            "Emergency Dispatch",
          ],
        },
        {
          id: "customer-portal",
          name: "Customer Self-Service Portal",
          icon: Users,
          description: "Customer portal for service requests and order tracking",
          price: 21.99,
          features: [
            "Online Service Booking",
            "Order Status Tracking",
            "Service History Access",
            "Invoice & Payment Portal",
            "Customer Communication Center",
            "Knowledge Base Access",
            "Feedback & Rating System",
            "Document Sharing",
            "Appointment Scheduling",
            "Service Request Management",
            "Mobile-responsive Design",
            "Multi-language Support",
          ],
        },
        {
          id: "quality-management",
          name: "Quality Management System",
          icon: Check,
          description: "Comprehensive quality control and assurance platform",
          price: 24.99,
          features: [
            "Quality Control Checklists",
            "Inspection Management",
            "Non-conformance Tracking",
            "Corrective Action Management",
            "Quality Metrics Dashboard",
            "Audit Management",
            "Document Control",
            "Training Management",
            "Supplier Quality Management",
            "Customer Complaint Handling",
            "ISO Compliance Support",
            "Quality Reporting",
          ],
        },
      )
    }

    if (selectedSystems.includes("pos")) {
      addons.push(
        {
          id: "loyalty-program",
          name: "Customer Loyalty Program",
          icon: Users,
          description: "Advanced customer loyalty and rewards management",
          price: 19.99,
          features: [
            "Points-based Reward System",
            "Tiered Membership Levels",
            "Personalized Offers",
            "Birthday & Anniversary Rewards",
            "Referral Program Management",
            "Mobile Loyalty App",
            "Social Media Integration",
            "Customer Segmentation",
            "Loyalty Analytics",
            "Email Marketing Integration",
            "Gift Card Management",
            "Promotional Campaign Tools",
          ],
        },
        {
          id: "advanced-analytics",
          name: "Retail Analytics Suite",
          icon: BarChart3,
          description: "Comprehensive retail analytics and business intelligence",
          price: 34.99,
          features: [
            "Sales Performance Analytics",
            "Customer Behavior Analysis",
            "Product Performance Tracking",
            "Inventory Turnover Analysis",
            "Profit Margin Analysis",
            "Staff Performance Metrics",
            "Peak Hours Analysis",
            "Seasonal Trend Reporting",
            "Comparative Store Analysis",
            "Predictive Analytics",
            "Custom Dashboard Creation",
            "Real-time Reporting",
          ],
        },
        {
          id: "ecommerce-integration",
          name: "E-commerce Integration",
          icon: ShoppingCart,
          description: "Seamless integration with online sales channels",
          price: 27.99,
          features: [
            "Multi-channel Inventory Sync",
            "Online Order Management",
            "Unified Customer Database",
            "Cross-channel Promotions",
            "Omnichannel Analytics",
            "Click & Collect Support",
            "Return Management",
            "Price Synchronization",
            "Product Catalog Management",
            "Marketplace Integration",
            "Shipping Integration",
            "Tax Calculation Sync",
          ],
        },
      )
    }

    if (selectedSystems.includes("sfa")) {
      addons.push(
        {
          id: "territory-management",
          name: "Advanced Territory Management",
          icon: Target,
          description: "Comprehensive territory planning and optimization tools",
          price: 24.99,
          features: [
            "Geographic Territory Mapping",
            "Territory Performance Analytics",
            "Automated Territory Assignment",
            "Territory Balancing Tools",
            "Customer Territory Tracking",
            "Sales Rep Territory Management",
            "Territory Coverage Analysis",
            "Competitive Territory Analysis",
            "Territory Planning Workflows",
            "Multi-level Territory Hierarchy",
            "Territory Revenue Tracking",
            "Territory Expansion Planning",
          ],
        },
        {
          id: "mobile-sales-app",
          name: "Advanced Mobile Sales App",
          icon: Smartphone,
          description: "Feature-rich mobile application for field sales teams",
          price: 18.99,
          features: [
            "Offline Sales Capability",
            "GPS-based Customer Check-ins",
            "Mobile Order Processing",
            "Digital Catalog & Pricing",
            "Customer Visit Scheduling",
            "Photo & Document Capture",
            "Electronic Signature Capture",
            "Real-time Inventory Sync",
            "Mobile Payment Processing",
            "Route Optimization",
            "Push Notifications",
            "Voice-to-Text Notes",
          ],
        },
        {
          id: "sales-intelligence",
          name: "Sales Intelligence & Analytics",
          icon: BarChart3,
          description: "AI-powered sales insights and predictive analytics",
          price: 39.99,
          features: [
            "Predictive Sales Analytics",
            "Lead Scoring & Qualification",
            "Sales Opportunity Insights",
            "Customer Behavior Analysis",
            "Sales Performance Benchmarking",
            "Win/Loss Analysis",
            "Sales Trend Forecasting",
            "Competitive Intelligence",
            "Customer Lifetime Value Analysis",
            "Sales Coaching Recommendations",
            "Pipeline Health Monitoring",
            "Custom Sales Dashboards",
          ],
        },
      )
    }

    return addons
  }

  const availableAddons = getAddonsForSystems()

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons((prev) => (prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]))
  }

  const getTotalAddonPrice = () => {
    return availableAddons
      .filter((addon) => selectedAddons.includes(addon.id))
      .reduce((total, addon) => total + addon.price, 0)
  }

  const handleContinueToComplete = () => {
    const selectedSystemsData = systems.filter((system) => selectedSystems.includes(system.id))
    const selectedAddonsData = availableAddons.filter((addon) => selectedAddons.includes(addon.id))

    setShowConfirmation(true)
  }

  // Show confirmation page
  if (showConfirmation) {
    const selectedSystemsData = systems.filter((system) => selectedSystems.includes(system.id))
    const selectedAddonsData = availableAddons.filter((addon) => selectedAddons.includes(addon.id))

    return (
      <ConfirmationPage
        selectedSystems={selectedSystemsData}
        selectedAddons={selectedAddonsData}
        onBack={() => setShowConfirmation(false)}
      />
    )
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
            {/* Step 1 - Completed */}
            <div className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Select Base Module</span>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 mx-4"></div>
            </div>

            {/* Step 2 - Active */}
            <div className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  2
                </div>
                <span className="font-medium">Choose Add-ons</span>
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

        {/* Info Alert */}
        {primarySystem && (
          <Alert className="mb-8 bg-emerald-100/80 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800">
            <Info className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertDescription className="text-emerald-700 dark:text-emerald-200">
              You've selected the <strong>{primarySystem.name}</strong> as base module. Now you can enhance your
              experience with these add-ons.
            </AlertDescription>
          </Alert>
        )}

        {/* Add-ons Grid */}
        {availableAddons.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {availableAddons.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id)
              const Icon = addon.icon

              return (
                <Card
                  key={addon.id}
                  className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-emerald-100 dark:border-emerald-800 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 transition-all duration-300 cursor-pointer ${
                    isSelected ? "ring-2 ring-emerald-500 bg-emerald-50/80 dark:bg-emerald-900/30" : ""
                  }`}
                  onClick={() => handleAddonToggle(addon.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-slate-900 dark:text-white text-xl mb-2">{addon.name}</CardTitle>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">{addon.description}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Features</h4>
                      <div className="space-y-2">
                        {addon.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Per Item Fee</p>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">${addon.price.toFixed(2)}/month</p>
                      </div>
                      <Button
                        className={`${
                          isSelected
                            ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                            : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddonToggle(addon.id)
                        }}
                      >
                        {isSelected ? "Added" : "Add"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No add-ons available for your selected systems.</p>
          </div>
        )}

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/95 backdrop-blur-sm border-t border-emerald-200 dark:border-emerald-800 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {selectedAddons.length} add-on{selectedAddons.length !== 1 ? "s" : ""} selected
              </p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">Add-ons Total: ${getTotalAddonPrice().toFixed(2)}/month</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-emerald-200 dark:border-emerald-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30" onClick={onBack}>
                Back to Systems
              </Button>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8" onClick={handleContinueToComplete}>
                Continue to Complete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
