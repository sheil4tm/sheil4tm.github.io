/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        lilac: {
          DEFAULT: 'rgb(var(--color-lilac) / <alpha-value>)',
          soft: 'rgb(var(--color-lilac-soft) / <alpha-value>)',
          deep: 'rgb(var(--color-lilac-deep) / <alpha-value>)',
        },
        matcha: {
          DEFAULT: 'rgb(var(--color-matcha) / <alpha-value>)',
          soft: 'rgb(var(--color-matcha-soft) / <alpha-value>)',
          deep: 'rgb(var(--color-matcha-deep) / <alpha-value>)',
        },
        mochi: {
          DEFAULT: 'rgb(var(--color-mochi) / <alpha-value>)',
          soft: 'rgb(var(--color-mochi-soft) / <alpha-value>)',
          deep: 'rgb(var(--color-mochi-deep) / <alpha-value>)',
        },
        shelf: {
          books: 'rgb(var(--color-shelf-books) / <alpha-value>)',
          film: 'rgb(var(--color-shelf-film) / <alpha-value>)',
          series: 'rgb(var(--color-shelf-series) / <alpha-value>)',
          tech: 'rgb(var(--color-shelf-tech) / <alpha-value>)',
          esports: 'rgb(var(--color-shelf-esports) / <alpha-value>)',
          misc: 'rgb(var(--color-shelf-misc) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(61, 53, 72, 0.06)',
        card: '0 4px 20px rgba(61, 53, 72, 0.05)',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
};
