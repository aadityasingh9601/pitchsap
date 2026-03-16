"use client"

import { Rocket, Users, TrendingUp, Shield, Mic } from "lucide-react"

const reasons = [
  {
    icon: Rocket,
    title: "For Ideators",
    description: "Get honest, expert feedback early. Understand risks, refine your vision, and build a stronger startup plan from day one.",
    variant: "gradient" as const,
  },
  {
    icon: Users,
    title: "For Consultants",
    description: "Help founders who need you. Build reputation, expand your network, and unlock steady opportunities in a trusted community.",
    variant: "gradient" as const,
  },
  {
    icon: TrendingUp,
    title: "AI-Powered",
    description: "Faster, smarter reviews. AI brings clarity to complex ideas and gives both parties deeper, balanced insights.",
    variant: "light" as const,
  },
  {
    icon: Shield,
    title: "Transparent & Secure",
    description: "Simple steps, organized reviews, strong privacy. We build trust and protect your ideas at every stage.",
    variant: "light" as const,
  },
]

export function WhyPitchsap() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Light pinkish/lavender gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#2d1f3d] to-[#1a1a2e]" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Search-bar style header */}
        <div className="flex justify-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative flex items-center gap-4 px-8 py-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">?</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">PitchSap</span>
              </h2>
              <button className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors">
                <Mic className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {reason.variant === "gradient" ? (
                /* Purple gradient cards */
                <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Decorative circle */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/5 rounded-full transition-transform duration-500 group-hover:scale-150" />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full transition-transform duration-500 group-hover:scale-125" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                      <reason.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3 transition-transform duration-300 group-hover:translate-x-1">
                      {reason.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              ) : (
                /* Light/white cards */
                <div className="relative h-full p-6 rounded-2xl bg-card/90 backdrop-blur-sm border border-border/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/30">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center transition-all duration-300 group-hover:from-purple-500/20 group-hover:to-pink-500/20 group-hover:scale-110">
                      <reason.icon className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-foreground mb-3 transition-transform duration-300 group-hover:translate-x-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            One platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">Endless possibilities.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
