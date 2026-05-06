import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dm-black': '#0A0A0A',
        'dm-surface': '#111111',
        'dm-navy': '#0D1117',
        'dm-gold': '#C9A96E',
        'dm-gold-light': '#E8C98A',
        'dm-white': '#F5F0E8',
        'dm-muted': '#8A8070',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(60px, 8vw, 120px)', { lineHeight: '1' }],
        'display-lg': ['clamp(48px, 6vw, 90px)', { lineHeight: '1.05' }],
        'display-md': ['clamp(36px, 4vw, 64px)', { lineHeight: '1.1' }],
        'section-label': ['11px', { lineHeight: '1.5', letterSpacing: '0.25em' }],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
