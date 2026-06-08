let accessToken = null
let onUnauthorized = null

export function setAccessToken(token) {
  accessToken = token
}

export function setUnauthorizedHandler(handler) {
  onUnauthorized = handler
}

async function rawRequest(path, options = {}) {
  const headers = { ...(options.headers ?? {}) }
  if (options.body) headers['Content-Type'] = 'application/json'
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`

  const apiBase = import.meta.env.VITE_API_BASE ?? '/api'

  return fetch(`${apiBase}${path}`, {
    ...options,
    headers,
    credentials: 'include',
  })
}

export async function apiRequest(path, options = {}) {
  let response = await rawRequest(path, options)

  if (response.status === 401 && path !== '/auth/refresh' && path !== '/auth/login') {
    const refreshed = await refreshAccessToken()
    if (refreshed) {
      response = await rawRequest(path, options)
    } else {
      onUnauthorized?.()
      return response
    }
  }

  return response
}

let refreshInFlight = null

export function refreshAccessToken() {
  if (!refreshInFlight) {
    refreshInFlight = (async () => {
      const response = await rawRequest('/auth/refresh', { method: 'POST' })
      if (!response.ok) return false

      const data = await response.json()
      setAccessToken(data.accessToken)
      return true
    })().finally(() => {
      refreshInFlight = null
    })
  }
  return refreshInFlight
}

export async function apiJson(path, options = {}) {
  const response = await apiRequest(path, options)
  const data = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(data?.error ?? 'İstek başarısız oldu')
  }
  return data
}
