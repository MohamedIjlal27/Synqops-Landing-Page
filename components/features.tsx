import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Clock, Smartphone } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, ensuring your data is always protected.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team members in real-time, no matter where they are.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with comprehensive analytics and reporting tools.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you succeed every step of the way.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your dashboard and manage your business from anywhere with our mobile app.",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and features your business needs to thrive in today's
            competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
