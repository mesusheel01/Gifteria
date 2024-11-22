/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
        colors:{
            "mandy-50": "#fef2f3",
            "mandy-200": "#fbd0d5",
            "mandy-300": "#f7aab2",
            "mandy-600": "#ea546c",
            "mandy-900": "#48091a"
        },
        fontFamily: {
        handjet: ['Handjet', 'sans-serif'],
        kablammo: ['Kablammo', 'cursive'],
        sofia: ['"Princess Sofia"', 'cursive'],
        poppins:['Poppins'],
        poller:['Poller One'],
        suse: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
