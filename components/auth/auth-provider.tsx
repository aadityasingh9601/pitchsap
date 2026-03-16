"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type AuthContextValue = {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
  toggle: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const raw = window.localStorage.getItem("pitchsap_is_logged_in")
    if (raw === "true") setIsLoggedIn(true)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("pitchsap_is_logged_in", String(isLoggedIn))
  }, [isLoggedIn])

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
      toggle: () => setIsLoggedIn((v) => !v),
    }),
    [isLoggedIn],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider />")
  return ctx
}

