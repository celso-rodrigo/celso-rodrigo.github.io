/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fffffe',
        black: '#2b2c34',
        blue: '#6246ea',
        gray: '#F2F2F2',
        red: '#e45858',
      },
      fontFamily: {
				"ubuntu": ['Ubuntu', 'ui-sans-serif', 'system-ui'],
			},
    },
  },
  plugins: [],
}

