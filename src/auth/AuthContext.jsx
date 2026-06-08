import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import {
  apiJson,
  refreshAccessToken,
  setAccessToken,
  setUnauthorizedHandler,
} from '../api/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const clearSession = useCallback(() => {
    setAccessToken(null)
    setUser(null)
  }, [])

  useEffect(() => {
    setUnauthorizedHandler(clearSession)
  }, [clearSession])

  useEffect(() => {
    let cancelled = false

    async function restoreSession() {
      const refreshed = await refreshAccessToken()
      if (refreshed) {
        try {
          const { user: me } = await apiJson('/auth/me')
          if (!cancelled) setUser(me)
        } catch {
          if (!cancelled) clearSession()
        }
      }
      if (!cancelled) setLoading(false)
    }

    restoreSession()
    return () => {
      cancelled = true
    }
  }, [clearSession])

  async function login(username, password) {
    const data = await apiJson('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    setAccessToken(data.accessToken)
    setUser(data.user)
  }

  async function logout() {
    await apiJson('/auth/logout', { method: 'POST' }).catch(() => {})
    clearSession()
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
