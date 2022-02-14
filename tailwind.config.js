module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        HarryP: ["HarryP"],
        Wizarding: ["Wizarding"],
      },
      colors:{
        'hp_blue': '#0C1631',
        'text_yellow': '#D3BA32'
      },
    },
  },
  plugins: [],
}
