"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { MessageCircle, Send, X } from "lucide-react"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
}

function getLoggedInState() {
  try {
    const w = window as unknown as { __PITCHSAP_IS_LOGGED_IN__?: boolean }
    if (typeof w.__PITCHSAP_IS_LOGGED_IN__ === "boolean") return w.__PITCHSAP_IS_LOGGED_IN__

    const ls = window.localStorage
    const candidates = [
      "auth_token",
      "access_token",
      "token",
      "session",
      "user",
      "pitchsap_auth",
    ]
    if (candidates.some((k) => Boolean(ls.getItem(k)))) return true

    if (document.cookie && /session|token|auth/i.test(document.cookie)) return true
  } catch {
    // ignore
  }
  return false
}

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`
}

export function AiChatWidget() {
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uid(),
      role: "assistant",
      content: "Hi! Ask me anything about Pitchsap.",
    },
  ])
  const [draft, setDraft] = useState("")
  const [busy, setBusy] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const refresh = () => setIsLoggedIn(getLoggedInState())
    refresh()

    const onStorage = () => refresh()
    window.addEventListener("storage", onStorage)
    window.addEventListener("focus", refresh)
    document.addEventListener("visibilitychange", refresh)
    return () => {
      window.removeEventListener("storage", onStorage)
      window.removeEventListener("focus", refresh)
      document.removeEventListener("visibilitychange", refresh)
    }
  }, [])

  const canChat = isLoggedIn && !busy

  const send = async () => {
    const content = draft.trim()
    if (!content || !canChat) return
    setDraft("")

    const userMsg: ChatMessage = { id: uid(), role: "user", content }
    setMessages((prev) => [...prev, userMsg])
    setBusy(true)

    try {
      await new Promise((r) => setTimeout(r, 450))
      const assistantMsg: ChatMessage = {
        id: uid(),
        role: "assistant",
        content:
          "Chat is wired up visually. Next step is connecting this to your AI endpoint.",
      }
      setMessages((prev) => [...prev, assistantMsg])
    } finally {
      setBusy(false)
    }
  }

  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [open, messages.length])

  const panel = useMemo(() => {
    if (!open) return null

    return (
      <div
        className="fixed bottom-24 right-5 z-50 w-[min(360px,calc(100vw-2.5rem))]"
        role="dialog"
        aria-label="AI chat"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-secondary/30 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.65)]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-16 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="relative flex items-center justify-between gap-4 border-b border-border/70 px-4 py-3">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-foreground">Chat</div>
              <div className="text-xs text-muted-foreground">
                {isLoggedIn ? "Ask away." : "Log in to message the AI."}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-background/30 text-muted-foreground transition hover:bg-background/45 hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="relative px-4 py-3">
            <div
              ref={listRef}
              className="h-64 overflow-auto pr-1 [scrollbar-width:thin]"
            >
              <div className="space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={
                      m.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }
                  >
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3 py-2 text-sm text-primary-foreground shadow-sm"
                          : "max-w-[85%] rounded-2xl rounded-bl-md border border-border/70 bg-background/25 px-3 py-2 text-sm text-foreground shadow-sm"
                      }
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {busy && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-border/70 bg-background/25 px-3 py-2 text-sm text-muted-foreground">
                      Thinking…
                    </div>
                  </div>
                )}
              </div>
            </div>

            {!isLoggedIn && (
              <div className="mt-3 rounded-xl border border-border/70 bg-background/25 px-3 py-3 text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Sign in required</div>
                <div className="mt-1 text-xs leading-relaxed">
                  You can open the chat anytime, but you’ll only be able to send
                  messages after logging in.
                </div>
                <div className="mt-3">
                  <Button asChild className="h-9 px-4">
                    <Link href="#">Login</Link>
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-3 flex items-center gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") void send()
                }}
                placeholder={isLoggedIn ? "Type a message…" : "Login to chat…"}
                disabled={!isLoggedIn || busy}
                className="h-10 flex-1 rounded-xl border border-border/70 bg-background/30 px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary/70 focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-70"
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={!isLoggedIn || busy || !draft.trim()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }, [busy, draft, isLoggedIn, messages, open])

  return (
    <>
      {panel}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_40px_-18px_rgba(0,0,0,0.8)] transition hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/25"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <span className="relative">
          <MessageCircle className="h-6 w-6" />
          <span
            aria-hidden
            className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_2px_rgba(0,0,0,0.25)]"
          />
        </span>
      </button>
    </>
  )
}

