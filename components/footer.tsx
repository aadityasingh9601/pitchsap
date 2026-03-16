import Link from "next/link"
import { Mail, Instagram, Linkedin, Facebook, X } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 [background:radial-gradient(1000px_circle_at_20%_10%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(900px_circle_at_80%_70%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="rounded-3xl border border-border/60 bg-secondary/25 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]">
          <div className="px-6 py-10 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
              {/* Brand */}
              <div className="md:col-span-5">
                <Link href="/" className="inline-flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]">
                    <span className="text-lg font-bold text-primary-foreground">P</span>
                  </div>
                  <span className="text-xl font-semibold tracking-tight text-foreground">
                    Pitchsap
                  </span>
                </Link>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Pitchsap is committed to helping entrepreneurs turn their ideas into reality. With expert
                  guidance, community support, and a proven process, we’re your partner in success.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/90" />
                    AI + Experts + Community
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/90" />
                    Founder-first design
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="md:col-span-3">
                <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
                <div className="mt-4 space-y-3">
                  <Link
                    href="mailto:team@pitchsap.com"
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm text-muted-foreground backdrop-blur transition hover:bg-background/45 hover:text-foreground"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/50 border border-border/60 transition group-hover:bg-secondary/70">
                      <Mail className="h-4 w-4 text-foreground/80" />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-foreground/90 font-medium">Email</span>
                      <span className="block">team@pitchsap.com</span>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Socials */}
              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-foreground">Socials</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="#"
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/30 backdrop-blur transition hover:bg-background/45"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground" />
                  </Link>
                  <Link
                    href="#"
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/30 backdrop-blur transition hover:bg-background/45"
                    aria-label="X"
                  >
                    <X className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground" />
                  </Link>
                  <Link
                    href="#"
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/30 backdrop-blur transition hover:bg-background/45"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground" />
                  </Link>
                  <Link
                    href="#"
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/30 backdrop-blur transition hover:bg-background/45"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-muted-foreground transition group-hover:text-foreground" />
                  </Link>
                </div>
              </div>

              {/* Legal */}
              <div className="md:col-span-2">
                <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-border/70 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Pitchsap. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/80">
                Built with clarity, trust, and a little bit of purple magic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
