/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        baseReddishBrown: "#63101A",
        baseRed: "#B7292B",
        baseOrange: "#F36949",
        baseYellow: "#FFCE50",
        baseBrown: "#C4AD8E",
        baseBlack: "#021024",
        baseOne: "#dedcdc",
        baseTwo: "#1F093B",
        baseThree: "#989daa",
        baseFour: "#7b919c",
        baseFive: "#57707a",
        baseSix: "#27084E",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        explosion: 'url("/img/bg2.jpg")',
      },
    },
  },
  plugins: [],
};
