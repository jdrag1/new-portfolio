/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme with blue accents
        'bg-main': '#0D0D0D',
        'bg-elevated': '#141414',
        'bg-card': '#1A1A1A',
        'bg-hover': '#202020',
        
        'text-main': '#FFFFFF',
        'text-muted': '#9CA3AF',
        'text-subtle': '#6B7280',
        
        // Blue accent colors
        'accent-main': '#3B82F6',       // Beautiful blue
        'accent-light': '#60A5FA',      // Light blue
        'accent-dark': '#2563EB',       // Dark blue
        'accent-glow': 'rgba(59, 130, 246, 0.3)', // Blue glow
        
        'border-subtle': '#2A2A2A',
        'border-main': '#333333',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(217, 91%, 60%, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(217, 91%, 60%, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(217, 91%, 60%, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-xl': '0 0 60px rgba(59, 130, 246, 0.5)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}