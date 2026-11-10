// Shared types used across chat components
export interface Session {
  id: number
  title: string
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
}
