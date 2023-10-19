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
        black: '#2F2E41',
        blue: '#6246ea',
        gray: '#F2F2F2',
        red: '#e45858',
      },
      fontFamily: {
				"ubuntu": ['Ubuntu', 'ui-sans-serif', 'system-ui'],
			},
      backgroundImage: {
				"heroBg": "url('./assets/heroBg.png')",
			},
      boxShadow: {
        lgUp: " 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -4px rgba(0, 0, 0, 0.1)",
        card: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      },
    },
  },
  plugins: [],
}

