// Slide types
export interface Slide {
  id: string
  label: string
  component: React.ComponentType
}

export type Direction = 'forward' | 'back'

export interface DeckContextType {
  currentSlide: number
  direction: Direction
  goNext: () => void
  goBack: () => void
  setCurrentSlide: (index: number) => void
  totalSlides: number
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export interface StatCard {
  value: string
  label: string
  suffix?: string
  prefix?: string
}

export interface AttractionCard {
  title: string
  description: string
  stat: string
  color: string
}

export interface SponsorshipTier {
  name: string
  tagline: string
  features: string[]
  featured?: boolean
}
