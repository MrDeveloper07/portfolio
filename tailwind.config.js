/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: { 
        "Anton": ['Roboto Slab', 'sans-serif'] ,
        "Archivo": ['Archivo Black', 'sans-serif'],
        "tinos": ['Tinos', 'serif']
    } 
    },
  },
  plugins: [
    require('daisyui'),
  ],
 
 
}