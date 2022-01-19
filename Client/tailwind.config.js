module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        tiny: "0.75rem",
      },
      colors: {
        bckground: "#EEEEEE ",
        layer1: {
          50: "#545a63",
          100: "#4a5059",
          200: "#40464f",
          300: "#363c45",
          400: "#2c323b",
          500: "#222831",
          600: "#181e27",
          700: "#0e141d",
          800: "#040a13",
          900: "#000009",
        },
        layer2: "#393E46",
        defaultYellow: "#FFD369",
        snowWhite: "#FFFAFA",
        search: "#484C53",
        card: "#131417",
      },
      spacing: {
        1000: "1000px",
        700: "700px",
        "70p": "70%",
        90: "90%",
        95: "95%",
        "1/7": "14.2857143%",
      },
      scale: {
        180: "180deg",
      },
    },
  },
  plugins: [],
};
