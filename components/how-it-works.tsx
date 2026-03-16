"use client"

import { useState } from "react"
import {
  Lightbulb,
  Brain,
  TrendingUp,
  Users,
  Rocket,
  Target,
  UserCheck,
  ClipboardCheck,
  BadgeCheck,
  Compass,
  HeartHandshake,
  Library,
} from "lucide-react"

const ideatorSteps = [
  {
    icon: Lightbulb,
    title: "Submit Your Idea",
    description: "Share your startup concept through our intuitive platform. From rough sketches to detailed plans, we're ready.",
    number: "01",
  },
  {
    icon: Brain,
    title: "AI + Expert Review",
    description: "Get instant AI analysis followed by deep-dive feedback from industry professionals on market fit and feasibility.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Refine & Iterate",
    description: "Access community insights, templates, and case studies to sharpen your concept for maximum impact.",
    number: "03",
  },
  {
    icon: Users,
    title: "Connect with Mentors",
    description: "Book 1:1 sessions with domain experts and top consultants who can accelerate your journey.",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Build Your MVP",
    description: "Transform your idea into a working prototype. Validate fast and gather real market feedback.",
    number: "05",
  },
  {
    icon: Target,
    title: "Pitch to Investors",
    description: "Present to our network of VCs, angels, and accelerators with a polished deck and warm introductions.",
    number: "06",
  },
]

const consultantSteps = [
  {
    icon: UserCheck,
    title: "Quick Sign-Up",
    description: "Create your consultant profile in minutes. Join the platform empowering the next generation of founders.",
    number: "01",
  },
  {
    icon: ClipboardCheck,
    title: "Complete Your Profile",
    description: "Share your expertise, experience, and mentorship preferences. Our AI matches you with ideal opportunities.",
    number: "02",
  },
  {
    icon: BadgeCheck,
    title: "Get Verified",
    description: "Our team reviews and approves your profile. Become an official PitchSap consultant and mentor.",
    number: "03",
  },
  {
    icon: Compass,
    title: "Discover Ideas",
    description: "Receive curated startup ideas in your domain. Connect with founders seeking your specific expertise.",
    number: "04",
  },
  {
    icon: HeartHandshake,
    title: "Mentor & Invest",
    description: "Guide founders with actionable feedback. Optionally become an early investor in promising ventures.",
    number: "05",
  },
  {
    icon: Library,
    title: "Share Knowledge",
    description: "Contribute to our resource library. Build your reputation while helping the startup ecosystem grow.",
    number: "06",
  },
]

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"ideators" | "consultants">("ideators")

  const currentSteps = activeTab === "ideators" ? ideatorSteps : consultantSteps

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PitchSap</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're building the next big thing or guiding others to success, we've got your path mapped out.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-1.5 shadow-xl shadow-black/10">
            {/* Sliding indicator */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-gradient-to-r from-primary to-accent rounded-xl transition-transform duration-500 ease-out ${
                activeTab === "consultants" ? "translate-x-[calc(100%+6px)]" : "translate-x-0"
              }`}
            />
            <button
              onClick={() => setActiveTab("ideators")}
              className={`relative z-10 px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors duration-300 ${
                activeTab === "ideators" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FOR IDEATORS
            </button>
            <button
              onClick={() => setActiveTab("consultants")}
              className={`relative z-10 px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors duration-300 ${
                activeTab === "consultants" ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FOR CONSULTANTS
            </button>
          </div>
        </div>

        {/* Cards with staggered animation */}
        <div 
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {currentSteps.map((step, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="group relative animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-[1px] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/30">
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-primary/95 via-primary/85 to-accent/90 p-6 overflow-hidden">
                  {/* Large number watermark */}
                  <span className="absolute -top-4 -right-2 text-[120px] font-black text-white/[0.07] leading-none select-none">
                    {step.number}
                  </span>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full transition-transform duration-500 group-hover:scale-150" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with glow */}
                    <div className="mb-5 inline-flex">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                        <div className="relative w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/30 transition-colors duration-300">
                          <step.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Ready to begin?{" "}
            <a href="#" className="text-primary font-semibold hover:underline underline-offset-4 transition-colors">
              Get started for free
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
