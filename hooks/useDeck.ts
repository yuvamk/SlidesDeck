'use client'
import { useContext } from 'react'
import { DeckContext } from '@/lib/deckContext'

export function useDeck() {
  return useContext(DeckContext)
}
