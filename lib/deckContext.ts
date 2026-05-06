'use client'
import { createContext } from 'react'
import { DeckContextType } from './types'

export const DeckContext = createContext<DeckContextType>({
  currentSlide: 0,
  direction: 'forward',
  goNext: () => {},
  goBack: () => {},
  setCurrentSlide: () => {},
  totalSlides: 10,
  isLoading: true,
  setIsLoading: () => {},
})
