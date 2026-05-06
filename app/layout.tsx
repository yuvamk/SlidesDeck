import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dubai Mall — The World\'s Greatest Commercial Stage',
  description: 'Interactive sales deck for Dubai Mall — 105 million visitors, 1,200+ brands, and the world\'s most powerful commercial platform.',
  keywords: 'Dubai Mall, retail, luxury, sponsorship, advertising, leasing, Fashion Avenue',
  openGraph: {
    title: 'Dubai Mall — Partnership Opportunities',
    description: 'Explore world-class retail, luxury, dining, events, and sponsorship opportunities at the world\'s most visited destination.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dm-black text-dm-white overflow-hidden">
        {children}
      </body>
    </html>
  )
}
