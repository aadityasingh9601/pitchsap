"use client"

import { Button } from "./ui/button"
import { Rocket, Sparkles, ArrowRight, Zap, Target, Users } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-[1px]">
            <div className="rounded-3xl bg-background/80 backdrop-blur-xl p-8 md:p-16">
              {/* Icon cluster */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center rotate-[-8deg] hover:rotate-0 transition-transform">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                  <Rocket className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center rotate-[8deg] hover:rotate-0 transition-transform">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-balance">
                <span className="text-foreground">Ready to </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Ignite
                </span>
                <br className="hidden sm:block" />
                <span className="text-foreground"> Your Potential?</span>
              </h2>

              {/* Trimmed description */}
              <p className="text-muted-foreground text-center text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Expert guidance. AI insights. A community that believes in your vision.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                {[
                  { icon: Target, text: "Validate Ideas" },
                  { icon: Users, text: "Expert Network" },
                  { icon: Sparkles, text: "AI-Powered" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm text-muted-foreground"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Tagline */}
              <p className="text-center font-semibold text-lg md:text-xl text-foreground mb-8">
                Join PitchSap. Transform Ideas. Change the World.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="group relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Submit Your Idea Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-md overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </Button>
              </div>

              {/* Trust indicator */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Join 2,000+ founders already building with PitchSap
              </p>
            </div>
          </div>

          {/* Bottom decorative elements */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Your journey starts here</span>
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
