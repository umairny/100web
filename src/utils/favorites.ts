import { useState, useEffect } from 'react'

const STORAGE_KEY = '100websites_favorites'
const STORAGE_NOTES_KEY = '100websites_favorites_notes'
const STORAGE_RATINGS_KEY = '100websites_favorites_ratings'

/**
 * Get all favorited website IDs from localStorage
 */
export function getFavoriteIds(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

/**
 * Get all personal notes for shortlisted websites from localStorage
 */
export function getFavoriteNotes(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    const data = localStorage.getItem(STORAGE_NOTES_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

/**
 * Save or delete a note for a shortlisted website
 */
export function saveFavoriteNote(id: string, note: string): void {
  if (typeof window === 'undefined') return
  try {
    const notes = getFavoriteNotes()
    if (note.trim()) {
      notes[id] = note.trim()
    } else {
      delete notes[id]
    }
    localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(notes))
    window.dispatchEvent(new Event('favorites-updated'))
  } catch {
    // ignore
  }
}

/**
 * Get all personal ratings for shortlisted websites from localStorage
 */
export function getFavoriteRatings(): Record<string, number> {
  if (typeof window === 'undefined') return {}
  try {
    const data = localStorage.getItem(STORAGE_RATINGS_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

/**
 * Save a 1-5 star rating for a shortlisted website
 */
export function saveFavoriteRating(id: string, rating: number): void {
  if (typeof window === 'undefined') return
  try {
    const ratings = getFavoriteRatings()
    if (rating > 0 && rating <= 5) {
      ratings[id] = rating
    } else {
      delete ratings[id]
    }
    localStorage.setItem(STORAGE_RATINGS_KEY, JSON.stringify(ratings))
    window.dispatchEvent(new Event('favorites-updated'))
  } catch {
    // ignore
  }
}

/**
 * Toggle a website ID in favorites
 */
export function toggleFavoriteId(id: string): boolean {
  if (typeof window === 'undefined') return false
  try {
    const list = getFavoriteIds()
    const index = list.indexOf(id)
    let isNowFavorited = false

    if (index > -1) {
      list.splice(index, 1)
      isNowFavorited = false
    } else {
      list.push(id)
      isNowFavorited = true
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
    window.dispatchEvent(new Event('favorites-updated'))
    return isNowFavorited
  } catch {
    return false
  }
}

/**
 * Hook to reactively track favorited status for a website or the whole list
 */
export function useFavorites(websiteId?: string) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(getFavoriteIds)
  const [notes, setNotes] = useState<Record<string, string>>(getFavoriteNotes)
  const [ratings, setRatings] = useState<Record<string, number>>(getFavoriteRatings)

  useEffect(() => {
    const handleUpdate = () => {
      setFavoriteIds(getFavoriteIds())
      setNotes(getFavoriteNotes())
      setRatings(getFavoriteRatings())
    }

    window.addEventListener('favorites-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)

    return () => {
      window.removeEventListener('favorites-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [])

  const isFavorited = websiteId ? favoriteIds.includes(websiteId) : false

  const toggle = (idToToggle?: string) => {
    const target = idToToggle || websiteId
    if (target) {
      toggleFavoriteId(target)
    }
  }

  const setNote = (id: string, note: string) => {
    saveFavoriteNote(id, note)
  }

  const setRating = (id: string, rating: number) => {
    saveFavoriteRating(id, rating)
  }

  const clear = () => {
    clearFavorites()
  }

  return {
    favoriteIds,
    notes,
    ratings,
    isFavorited,
    toggle,
    setNote,
    setRating,
    clear,
    count: favoriteIds.length,
  }
}

/**
 * Clear all favorites, notes, and ratings from localStorage
 */
export function clearFavorites(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(STORAGE_NOTES_KEY)
    localStorage.removeItem(STORAGE_RATINGS_KEY)
    window.dispatchEvent(new Event('favorites-updated'))
  } catch {
    // ignore
  }
}

/**
 * Bulk import favorite IDs (e.g. from a shared URL)
 */
export function importFavoriteIds(ids: string[]): number {
  if (typeof window === 'undefined' || !ids.length) return 0
  try {
    const existing = getFavoriteIds()
    const merged = Array.from(new Set([...existing, ...ids]))
    const newAddedCount = merged.length - existing.length
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
    window.dispatchEvent(new Event('favorites-updated'))
    return newAddedCount
  } catch {
    return 0
  }
}

/**
 * Build a shareable URL for the current favorites
 */
export function getShareableShortlistUrl(ids?: string[]): string {
  if (typeof window === 'undefined') return ''
  const targetIds = ids || getFavoriteIds()
  const base = `${window.location.origin}/`
  return `${base}?shortlist=${encodeURIComponent(targetIds.join(','))}`
}


