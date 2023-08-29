/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pentelope-blue': '#056F94',
        'pentelope-pink': '#F04C94',
        'pentelope-green': '#84FC04',
        'pentelope-beige': '#F1E2BB',
      },
    },
  },
  plugins: [],
};
