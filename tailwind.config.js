/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        feyn: {
          dark: '#0c161d',          // Deep Prussian slate
          navy: '#152432',          // Deep navy
          blue: '#38a8ff',          // Logo brand electric blue
          'blue-dark': '#0284c7',   // High-contrast readable brand blue
          'blue-light': '#70bfff',  // Lighter blue accent
          'blue-ice': '#bae6fd',    // Soft sky highlight
          'blue-subtle': '#f0f8ff', // Alice blue background tint
          muted: '#526374',         // Neutral technical slate text
          border: '#e2e8f0',        // Cool slate border
          bg: '#ffffff',            // Pristine enterprise canvas
          surface: '#f8fafc',       // Subtle cool slate container
          'dark-bg': '#080d12',     // Dark section canvas
          'dark-card': '#0f1822',   // Dark section card
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
