import { Navbar } from "../components/navbar"
import { Hero } from "../components/hero"
import { Features } from "../components/features"
import { HowItWorks } from "../components/how-it-works"
import { WhyPitchsap } from "../components/why-pitchsap"
import { MaximizePitchsap } from "../components/maximize-pitchsap"
import { Pricing } from "../components/pricing"
import { CTASection } from "../components/cta-section"
import { FAQSection } from "../components/faq-section"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyPitchsap />
      <MaximizePitchsap />
      <Pricing />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
