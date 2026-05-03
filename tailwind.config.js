/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002B5B', // Navy
          light: '#2B4865',
          dark: '#001C30',
        },
        secondary: {
          DEFAULT: '#256D85', // Deep Green/Blue
          light: '#8FE3CF',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
