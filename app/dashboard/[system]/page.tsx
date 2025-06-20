"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { SystemDashboard } from "@/components/system-dashboard"

interface UserData {
  selectedSystems: string[]
  email: string
}

export default function SystemPage() {
  const params = useParams()
  const router = useRouter()
  const [userData, setUserData] = useState<UserData | null>(null)
  const systemId = params.system as string

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData)
      setUserData(parsedData)

      // Check if user has access to this system
      if (!parsedData.selectedSystems.includes(systemId)) {
        router.push("/dashboard")
      }
    } else {
      router.push("/login")
    }
  }, [systemId, router])

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading system...</p>
        </div>
      </div>
    )
  }

  return <SystemDashboard systemId={systemId} userData={userData} />
}
