// Shared types used across chat components
export interface Session {
  id: number
  title: string
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

// A record returned by the backend (/api/record, /api/add)
export interface RecordItem {
  id: number
  content: string
}
