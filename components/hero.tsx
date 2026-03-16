import { Button } from "../components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">First End-to-End Startup Platform</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="text-primary">IDEAS</span>
            <span className="text-foreground"> are Wild</span>
            <br />
            <span className="text-foreground">PITCHSAP </span>
            <span className="text-primary">Tames Them</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Turn ideas into action with confidence. Pitchsap combines expert guidance, AI-powered insights, and community feedback to help you shape, validate, and move forward with clarity.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-foreground font-semibold px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Trusted by founders worldwide</p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground ml-2">500+ founders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
