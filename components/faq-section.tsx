"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { cn } from "../lib/utils"
const faqs = [
  {
    question: "What is PitchSap?",
    answer: "A platform where founders validate ideas through AI insights, expert feedback, and community support.",
  },
  {
    question: "Who can join?",
    answer: "Anyone with a startup idea — from first-time founders to serial entrepreneurs and industry consultants.",
  },
  {
    question: "How does feedback work?",
    answer: "Submit your idea, get AI analysis instantly, then receive detailed reviews from vetted consultants.",
  },
  {
    question: "Do I need a subscription?",
    answer: "Start free with basic features. Upgrade anytime for unlimited reviews and premium mentorship.",
  },
  {
    question: "How does AI help?",
    answer: "AI spots gaps, risks, and opportunities in your idea — making every review smarter and faster.",
  },
  {
    question: "How are consultants rated?",
    answer: "Founders rate consultants on clarity and helpfulness, building trust through transparency.",
  },
  {
    question: "Can I build long-term connections?",
    answer: "Yes — connect with mentors, co-founders, and investors who believe in your vision.",
  },
  {
    question: "Can I change my plan anytime?",
    answer: "Absolutely. Upgrade, downgrade, or cancel anytime with no hidden fees.",
  },
  {
    question: "What if I exceed plan limits?",
    answer: "You'll get notified and can upgrade instantly or wait for the next billing cycle.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, within 7 days of purchase if you're not satisfied with the service.",
  },
]

function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onClick,
  index 
}: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-300",
        isOpen 
          ? "bg-gradient-to-br from-primary/10 via-accent/5 to-transparent shadow-lg shadow-primary/5" 
          : "bg-card/50 hover:bg-card/80"
      )}
    >
      {/* Subtle gradient border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
        "bg-gradient-to-br from-primary/20 via-accent/10 to-transparent",
        isOpen && "opacity-100"
      )} />
      
      <button
        onClick={onClick}
        className="relative w-full p-5 text-left flex items-start justify-between gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          {/* Number badge */}
          <span className={cn(
            "flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300",
            isOpen 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
          )}>
            {String(index + 1).padStart(2, '0')}
          </span>
          
          <span className={cn(
            "font-semibold text-base transition-colors duration-300 pt-0.5",
            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
          )}>
            {question}
          </span>
        </div>
        
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen 
            ? "bg-primary text-primary-foreground rotate-180" 
            : "bg-muted text-muted-foreground group-hover:bg-primary/20"
        )}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      
      {/* Answer with smooth height animation */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="relative px-5 pb-5 pl-[3.75rem] text-muted-foreground text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(4) // AI help open by default
  
  const leftColumn = faqs.filter((_, i) => i % 2 === 0)
  const rightColumn = faqs.filter((_, i) => i % 2 === 1)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Questions
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to know about PitchSap
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((faq, i) => {
              const actualIndex = i * 2
              return (
                <FAQItem
                  key={actualIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() => handleToggle(actualIndex)}
                  index={actualIndex}
                />
              )
            })}
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((faq, i) => {
              const actualIndex = i * 2 + 1
              return (
                <FAQItem
                  key={actualIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() => handleToggle(actualIndex)}
                  index={actualIndex}
                />
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Still have questions?</p>
                <p className="text-sm text-muted-foreground">We're here to help</p>
              </div>
            </div>
            <a
              href="mailto:team@pitchsap.com"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
