"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Truck,
  Users,
  DollarSign,
  Package,
  ShoppingCart,
  CreditCard,
  Target,
  LogOut,
  Settings,
  Bell,
  User,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface UserData {
  selectedSystems: string[]
  email: string
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const router = useRouter()

  const systemsData = [
    {
      id: "fleet",
      name: "Fleet Management",
      icon: Truck,
      description: "Real-time asset tracking and inventory management across multiple locations.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "hrm",
      name: "Human Resource Management",
      icon: Users,
      description: "Complete employee lifecycle management with payroll and attendance tracking.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      id: "inventory",
      name: "Inventory Management",
      icon: Package,
      description: "Complete stock lifecycle and supplier management with real-time tracking.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      id: "finance",
      name: "Finance Management",
      icon: DollarSign,
      description: "Comprehensive financial tracking, reporting, and budget management system.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
      id: "order-management",
      name: "Order Management System",
      icon: ShoppingCart,
      description: "End-to-end service order and job management with mobile workforce support.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      id: "pos",
      name: "Point of Sale",
      icon: CreditCard,
      description: "Complete retail and transaction processing system with inventory integration.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800",
    },
    {
      id: "sfa",
      name: "Sales Force Automation",
      icon: Target,
      description: "Mobile and web-based sales team management with CRM and analytics.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800",
    },
  ]

  useEffect(() => {
    // Get user data from localStorage (in real app, this would come from your auth system)
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData)
      setUserData(parsedData)

      // If user has only one system, redirect directly to that system
      if (parsedData.selectedSystems.length === 1) {
        router.push(`/dashboard/${parsedData.selectedSystems[0]}`)
      }
    } else {
      // No user data, redirect to login
      router.push("/login")
    }
  }, [router])

  const handleSystemClick = (systemId: string) => {
    router.push(`/dashboard/${systemId}`)
  }

  const handleLogout = () => {
    localStorage.removeItem("userData")
    router.push("/")
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  const userSystems = systemsData.filter((system) => userData.selectedSystems.includes(system.id))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SynqOps
              </span>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 hidden sm:block">
                  {userData.email.split("@")[0]}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Welcome to Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Select a system to access your business management tools
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
              Free Trial Active
            </Badge>
            <Badge variant="outline">{userSystems.length} Systems Available</Badge>
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userSystems.map((system) => {
            const Icon = system.icon
            return (
              <Card
                key={system.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 ${system.bgColor} ${system.borderColor} border backdrop-blur-sm`}
                onClick={() => handleSystemClick(system.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${system.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {system.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{system.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${system.color} hover:opacity-90 text-white`}>
                    Access System
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active Systems</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{userSystems.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Badge className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Trial Status</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Settings className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Setup Progress</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
