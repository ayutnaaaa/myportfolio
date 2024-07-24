/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const {nextui} = require("@nextui-org/react");


module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        basePurple:"#483078",
        baseBlue: "#005bc5"
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        explosion: 'url("/img2/sky.jpg")',
        
      },
      backgroundColor: {
          primary : "#021024"
      }
    },
  },
  plugins: [nextui({
    themes: {
    
      dark: {
        colors: {
          background: "#021024",
          foreground: "#ecedee",
          primary: {
            foreground: '#ffffff',
            DEFAULT: '#006fee'
          }
        }
      }
    }
  })],
};
