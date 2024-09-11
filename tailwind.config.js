/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0f2f67', // Nom de la couleur personnalisée
      },
      boxShadow: {
        custom: '11px 11px 11px 0px rgba(0, 0, 0, 0.14)', // Nom de l'ombre personnalisée
      },
    },
  },
  plugins: [],
}

