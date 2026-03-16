"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { 
  Sparkles, 
  Rocket, 
  Crown, 
  Check, 
  Zap,
  MessageSquare,
  BookOpen,
  Headphones,
  Users,
  Lightbulb,
  TrendingUp
} from "lucide-react"

const plans = [
  {
    name: "Free",
    icon: Sparkles,
    tagline: "For Early Ideators",
    price: "0",
    description: "Start validating your ideas",
    cta: "Get Started",
    popular: false,
    features: [
      { name: "Idea Submissions", value: "2/month" },
      { name: "AI Reviews", value: "2 quick reviews" },
      { name: "Consultant Access", value: "5 messages" },
      { name: "Workshops", value: "1/month" },
      { name: "Resource Library", value: "Basic" },
      { name: "Support", value: "48h response" },
    ]
  },
  {
    name: "Alpha",
    icon: Rocket,
    tagline: "For Growing Ideators",
    price: "799",
    description: "Structured guidance & feedback",
    cta: "Upgrade Now",
    popular: true,
    features: [
      { name: "Idea Submissions", value: "5/month" },
      { name: "AI Reviews", value: "5 in-depth" },
      { name: "Consultant Access", value: "Unlimited (5)" },
      { name: "Workshops", value: "3/month" },
      { name: "Resource Library", value: "Essential" },
      { name: "Support", value: "4h response" },
    ]
  },
  {
    name: "Omega",
    icon: Crown,
    tagline: "Investment-Ready",
    price: "1299",
    description: "Premium mentorship & investors",
    cta: "Go Premium",
    popular: false,
    features: [
      { name: "Idea Submissions", value: "Unlimited" },
      { name: "AI Reviews", value: "Unlimited" },
      { name: "Consultant Access", value: "All consultants" },
      { name: "Workshops", value: "All access" },
      { name: "Resource Library", value: "Complete" },
      { name: "Support", value: "1h (24/7)" },
    ]
  }
]

const audiences = [
  { icon: Lightbulb, label: "Ideators" },
  { icon: Users, label: "Consultants" },
  { icon: TrendingUp, label: "Investors" },
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Choose Your </span>
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Transform ideas into reality. Start your entrepreneurial journey today.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                  isAnnual ? 'translate-x-1' : 'translate-x-[-120%]'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-xs text-purple-600 font-semibold">-20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-15 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const displayPrice = isAnnual 
              ? Math.round(parseInt(plan.price) * 0.8) 
              : plan.price

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 text-white shadow-2xl shadow-purple-500/30 scale-105 z-10'
                    : 'bg-white text-gray-900 shadow-xl shadow-gray-200/50 hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    plan.popular 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-br from-purple-100 to-violet-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-purple-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-lg">₹</span>
                    <span className="text-5xl font-bold">{displayPrice}</span>
                    <span className={`text-sm ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                      /mo
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.popular ? 'text-purple-200' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-6 h-12 text-base font-semibold transition-all ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-gray-100 shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:opacity-90'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature.name} className="flex items-center justify-between text-sm">
                      <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>
                        {feature.name}
                      </span>
                      <span className={`font-medium ${
                        plan.popular ? 'text-white' : 'text-purple-600'
                      }`}>
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center border border-amber-200/50">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Rocket className="w-6 h-6 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to Launch?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Join thousands of entrepreneurs building thriving businesses.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { icon: Check, text: "No Setup Fees" },
                { icon: Check, text: "Cancel Anytime" },
                { icon: Headphones, text: "24/7 Support" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2 text-purple-600 font-medium">
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Audience Tags */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">One Platform for Everyone</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {audiences.map((audience) => (
              <span
                key={audience.label}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:border-purple-300 hover:bg-purple-50 transition-colors cursor-pointer"
              >
                <audience.icon className="w-4 h-4 text-purple-600" />
                {audience.label}
              </span>
            ))}
          </div>
          <p className="text-lg font-medium">
            <span className="text-gray-900">At PitchSap </span>
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              we help create Legacy
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
