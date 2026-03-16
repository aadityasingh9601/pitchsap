import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AiChatWidget } from "../components/ai-chat-widget"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PitchSap – First End-to-End Startup Platform Blending AI, Expert Mentorship & Founder Hacks",
  description: "Turn ideas into action with confidence. PitchSap combines expert guidance, AI-powered insights, and community feedback to help you shape, validate, and move forward with clarity.",
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AiChatWidget />
      </body>
    </html>
  )
}
