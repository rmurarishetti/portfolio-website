import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  const start = new Date(startDate)
  const opts: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }
  const startStr = start.toLocaleDateString('en-US', opts)
  if (!endDate) return `${startStr} — Present`
  const end = new Date(endDate)
  return `${startStr} — ${end.toLocaleDateString('en-US', opts)}`
}

export function formatYear(dateStr: string): string {
  return new Date(dateStr).getFullYear().toString()
}
