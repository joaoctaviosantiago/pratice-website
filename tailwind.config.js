module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "ezpz-blue": "#45CBEA",
        "ezpz-blue-light": "rgb(97, 207, 232)",
        "ezpz-purple": "#2F2E41",
      },
      backgroundImage: {
        ezpz: "linear-gradient(to bottom, #FFF, #FFF, #FFF, #45CBEA)",
        "ezpz-inverted":
          "linear-gradient(to bottom, #45CBEA, #45CBEA, #45CBEA, #FFF)",
      },
      width: {
        inherit: "inherit",
      },
      minHeight: {
        ezpz: "calc(100vh - 79px)",
      },
      spacing: {
        "78px": "78px 0 0",
      },
      scrollMargin: {
        "78px": "78px",
      },
    },
  },
  plugins: [],
};
