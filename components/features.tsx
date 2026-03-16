import { Sparkles, Users, Brain, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get intelligent feedback on your startup ideas with our advanced AI that analyzes market trends, competition, and viability.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Connect with experienced consultants and industry experts who provide personalized guidance to refine your vision.",
  },
  {
    icon: Sparkles,
    title: "Community Feedback",
    description:
      "Validate your ideas with real founder feedback. Get honest opinions from a community that understands the startup journey.",
  },
  {
    icon: TrendingUp,
    title: "Founder Hacks",
    description:
      "Access proven strategies and shortcuts from successful founders. Learn what works and avoid common pitfalls.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Benefits</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Everything you need to validate your idea
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Your idea deserves momentum. Pitchsap helps you refine, validate, and move forward with confidence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
