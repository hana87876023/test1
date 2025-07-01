/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        taiwan: {
          red: '#FF0000',
          blue: '#0000FF',
          green: '#34D399',
          ocean: '#0EA5E9',
          mountain: '#6B7280',
        }
      },
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}