// Record API — wraps the three endpoints defined in the protocol,

import api from './http'
import type { RecordItem } from '../types'

// GET /api/record — list all records
export function getRecords(): Promise<RecordItem[]> {
  return api.get<RecordItem[]>('/record')
}

// GET /api/record?id=xx — load one record by id
export function getRecordById(id: number): Promise<RecordItem> {
  return api.get<RecordItem>(`/record?id=${id}`)
}

// POST /api/add — create a record from a piece of text
export function addRecord(content: string): Promise<RecordItem> {
  return api.post<RecordItem>('/add', { content })
}

// DELETE /api/delete?id=xx — delete a record by id
export function deleteRecord(id: number): Promise<{ ok: boolean }> {
  return api.delete<{ ok: boolean }>(`/delete?id=${id}`)
}
