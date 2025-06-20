"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Truck,
  Users,
  DollarSign,
  Package,
  ShoppingCart,
  CreditCard,
  Target,
  Menu,
  X,
  Home,
  BarChart3,
  Settings,
  Bell,
  User,
  LogOut,
  ChevronLeft,
  Calendar,
  FileText,
  Database,
  Wrench,
  Shield,
  HelpCircle,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface SystemDashboardProps {
  systemId: string
  userData: {
    selectedSystems: string[]
    email: string
  }
}

export function SystemDashboard({ systemId, userData }: SystemDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const systemsConfig = {
    fleet: {
      name: "Fleet Management",
      icon: Truck,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: Truck, label: "Vehicle Tracking", href: "#" },
        { icon: Database, label: "Inventory Management", href: "#" },
        { icon: Users, label: "Driver Management", href: "#" },
        { icon: Calendar, label: "Maintenance Schedule", href: "#" },
        { icon: BarChart3, label: "Route Analytics", href: "#" },
        { icon: FileText, label: "Reports", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
      ],
    },
    hrm: {
      name: "Human Resource Management",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: Users, label: "Employee Management", href: "#" },
        { icon: Calendar, label: "Attendance Tracking", href: "#" },
        { icon: DollarSign, label: "Payroll Management", href: "#" },
        { icon: FileText, label: "Leave Management", href: "#" },
        { icon: BarChart3, label: "Performance Analytics", href: "#" },
        { icon: Wrench, label: "Recruitment", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
      ],
    },
    inventory: {
      name: "Inventory Management",
      icon: Package,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: Package, label: "Stock Management", href: "#" },
        { icon: Database, label: "Warehouse Management", href: "#" },
        { icon: Users, label: "Supplier Management", href: "#" },
        { icon: ShoppingCart, label: "Purchase Orders", href: "#" },
        { icon: BarChart3, label: "Inventory Analytics", href: "#" },
        { icon: FileText, label: "Reports", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
      ],
    },
    finance: {
      name: "Finance Management",
      icon: DollarSign,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: DollarSign, label: "Payment Tracking", href: "#" },
        { icon: FileText, label: "Invoice Management", href: "#" },
        { icon: BarChart3, label: "Financial Reports", href: "#" },
        { icon: Calendar, label: "Budget Planning", href: "#" },
        { icon: CreditCard, label: "Expense Management", href: "#" },
        { icon: Shield, label: "Tax Management", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
      ],
    },
    "order-management": {
      name: "Order Management System",
      icon: ShoppingCart,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: ShoppingCart, label: "Job Orders", href: "#" },
        { icon: Users, label: "Mobile Workforce", href: "#" },
        { icon: Calendar, label: "Service Scheduling", href: "#" },
        { icon: FileText, label: "Service Reports", href: "#" },
        { icon: BarChart3, label: "Performance Analytics", href: "#" },
        { icon: Wrench, label: "Quality Management", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
      ],
    },
    pos: {
      name: "Point of Sale",
      icon: CreditCard,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: CreditCard, label: "Sales Terminal", href: "#" },
        { icon: Package, label: "Product Management", href: "#" },
        { icon: Users, label: "Customer Management", href: "#" },
        { icon: BarChart3, label: "Sales Analytics", href: "#" },
        { icon: FileText, label: "Transaction Reports", href: "#" },
        { icon: Settings, label: "Store Settings", href: "#" },
      ],
    },
    sfa: {
      name: "Sales Force Automation",
      icon: Target,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      menuItems: [
        { icon: Home, label: "Dashboard", href: "#" },
        { icon: Target, label: "Lead Management", href: "#" },
        { icon: Users, label: "Customer Relations", href: "#" },
        { icon: BarChart3, label: "Sales Analytics", href: "#" },
        { icon: Calendar, label: "Territory Management", href: "#" },
        { icon: FileText, label: "Sales Reports", href: "#" },
        { icon: Wrench, label: "Mobile Sales App", href: "#" },
        { icon: Settings, label: "Settings", href: "#" },
      ],
    },
  }

  const currentSystem = systemsConfig[systemId as keyof typeof systemsConfig]
  const SystemIcon = currentSystem?.icon || Package

  const handleLogout = () => {
    localStorage.removeItem("userData")
    router.push("/")
  }

  const handleBackToDashboard = () => {
    if (userData.selectedSystems.length > 1) {
      router.push("/dashboard")
    } else {
      // If only one system, show a different back option or disable
      router.push("/dashboard")
    }
  }

  if (!currentSystem) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">System Not Found</h1>
          <Button onClick={() => router.push("/dashboard")}>Back to Dashboard</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-800 shadow-xl">
            <SidebarContent
              currentSystem={currentSystem}
              SystemIcon={SystemIcon}
              onClose={() => setSidebarOpen(false)}
              userData={userData}
              onBackToDashboard={handleBackToDashboard}
            />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-64 lg:block">
        <div className="h-full bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700">
          <SidebarContent
            currentSystem={currentSystem}
            SystemIcon={SystemIcon}
            userData={userData}
            onBackToDashboard={handleBackToDashboard}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top header */}
        <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-white">{currentSystem.name} Dashboard</h1>
              </div>

              <div className="flex items-center gap-4">
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                >
                  Free Trial
                </Badge>
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${currentSystem.color} rounded-full flex items-center justify-center`}
                  >
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

        {/* Dashboard content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome to {currentSystem.name}</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Manage your {currentSystem.name.toLowerCase()} operations from this centralized dashboard.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${currentSystem.color} rounded-lg flex items-center justify-center`}
                  >
                    <SystemIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Total Records</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">1,234</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Active Items</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">856</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">This Month</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">342</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Pending Tasks</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">23</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content area */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${currentSystem.color} rounded-full flex items-center justify-center`}
                        >
                          <SystemIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 dark:text-white">Sample activity item #{item}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            This is a sample activity description for demonstration purposes.
                          </p>
                        </div>
                        <span className="text-sm text-slate-500">2 hours ago</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {currentSystem.menuItems.slice(1, 5).map((item, index) => (
                    <Button key={index} variant="outline" className="w-full justify-start" size="sm">
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">System Health</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                        Excellent
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Last Backup</span>
                      <span className="text-sm text-slate-900 dark:text-white">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600 dark:text-slate-400">Storage Used</span>
                      <span className="text-sm text-slate-900 dark:text-white">45%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface SidebarContentProps {
  currentSystem: any
  SystemIcon: any
  onClose?: () => void
  userData: {
    selectedSystems: string[]
    email: string
  }
  onBackToDashboard: () => void
}

function SidebarContent({ currentSystem, SystemIcon, onClose, userData, onBackToDashboard }: SidebarContentProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 bg-gradient-to-br ${currentSystem.color} rounded-lg flex items-center justify-center`}
            >
              <SystemIcon className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">SynqOps</span>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <h2 className="text-sm font-medium text-slate-600 dark:text-slate-400">{currentSystem.name}</h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        {/* Back to dashboard button (only show if user has multiple systems) */}
        {userData.selectedSystems.length > 1 && (
          <Button
            variant="ghost"
            className="w-full justify-start mb-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            onClick={onBackToDashboard}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        )}

        <nav className="space-y-1">
          {currentSystem.menuItems.map((item: any, index: number) => (
            <Button
              key={index}
              variant={index === 0 ? "secondary" : "ghost"}
              className="w-full justify-start"
              size="sm"
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <HelpCircle className="h-4 w-4 mr-3" />
          Help & Support
        </Button>
      </div>
    </div>
  )
}
