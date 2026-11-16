// A thin wrapper around fetch, so components don't repeat
// JSON parsing / error handling everywhere.
// All requests go through the /api prefix, which Vite proxies to the Go backend.

const BASE = '/api'

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(BASE + url, options)
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`)
  }
  // 204 No Content has an empty body
  if (res.status === 204) {
    return undefined as T
  }
  return res.json() as Promise<T>
}

export function get<T>(url: string): Promise<T> {
  return request<T>(url)
}

export function post<T>(url: string, body?: unknown): Promise<T> {
  return request<T>(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
}

export function del<T>(url: string): Promise<T> {
  return request<T>(url, { method: 'DELETE' })
}

const api = {
  get,
  post,
  delete: del,
}

export default api
