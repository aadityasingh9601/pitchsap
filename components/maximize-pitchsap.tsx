"use client"

import { Lightbulb, Users, Megaphone, Rocket, Heart, Sparkles } from "lucide-react"

const principles = [
  {
    title: "Engage Fully",
    description: "Leverage every resource — mentors, AI insights, and community — to accelerate your journey.",
    icon: Lightbulb,
    align: "left",
  },
  {
    title: "Stay Open",
    description: "Embrace feedback and new perspectives. Guidance sharpens every great idea.",
    icon: Users,
    align: "right",
  },
  {
    title: "Be Bolder",
    description: "Bring your wildest ideas. Courage breaks through barriers — we support you from day one.",
    icon: Megaphone,
    align: "left",
  },
]

export function MaximizePitchsap() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Maximize Your Potential</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            How To <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Maximize</span> PitchSap
          </h2>
          
          <p className="text-muted-foreground text-center max-w-xl text-lg">
            Turn your spark into a product people love and can't live without.
          </p>
        </div>

        {/* Principles Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden md:block transform -translate-x-1/2" />
          
          {/* Glowing Dot at Top */}
          <div className="absolute left-1/2 top-0 w-3 h-3 bg-primary rounded-full hidden md:block transform -translate-x-1/2 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

          <div className="space-y-8 md:space-y-0">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className={`relative flex items-center gap-6 md:gap-12 ${
                  principle.align === "right" ? "md:flex-row-reverse" : ""
                } ${index > 0 ? "md:mt-16" : ""}`}
              >
                {/* Card */}
                <div
                  className={`flex-1 ${
                    principle.align === "right" ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-primary/20 to-accent/10 border-primary/30 hover:border-primary/50"
                        : "bg-card/80 border-border hover:border-primary/30"
                    }`}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className={`relative flex items-start gap-4 ${principle.align === "right" ? "md:flex-row-reverse" : ""}`}>
                      <div className={`shrink-0 p-3 rounded-xl ${
                        index % 2 === 0 
                          ? "bg-primary/20 text-primary" 
                          : "bg-primary/10 text-primary"
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <principle.icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className={`absolute ${principle.align === "right" ? "left-0 rounded-bl-2xl" : "right-0 rounded-br-2xl"} bottom-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 shrink-0 z-10">
                  <span className="text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Glowing Dot at Bottom */}
          <div className="absolute left-1/2 bottom-0 w-3 h-3 bg-accent rounded-full hidden md:block transform -translate-x-1/2 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
        </div>

        {/* Relationships Section */}
        <div className="mt-32 relative">
          {/* Decorative Elements */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-10">
            <Heart className="w-40 h-40 text-primary" />
          </div>
          <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 opacity-10">
            <Sparkles className="w-40 h-40 text-accent" />
          </div>

          <div className="text-center max-w-3xl mx-auto relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">More Than a Platform</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Lasting</span> Relationships
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We're your long-term innovation partner. The bonds you form with mentors and fellow innovators become your support system and the key to unlocking new opportunities.
            </p>

            {/* Legacy Statement */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full" />
              <p className="relative text-2xl md:text-3xl font-semibold text-foreground">
                At PitchSap — we help you create a{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Legacy</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0 7 Q 25 0, 50 7 T 100 7" stroke="url(#legacy-gradient)" strokeWidth="2" fill="none" />
                    <defs>
                      <linearGradient id="legacy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(168, 85, 247)" />
                        <stop offset="100%" stopColor="rgb(139, 92, 246)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
