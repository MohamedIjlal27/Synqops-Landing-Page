import { ThemeToggle } from "@/components/theme-toggle"
import { ERPLanding } from "@/components/erp-landing"

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </header>
      <ERPLanding />
    </div>
  )
}
