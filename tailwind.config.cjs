module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // change these to the colors you'll use most often from Figma
        "brand-black": "#383533",
        "brand-light": {
          DEFAULT: "#413C3B",
          300: "rgba(65,60,59,0.3)",
          500: "rgba(65,60,59,0.5)",
        },
        "brand-green": "#A1BD74",
        "brand-button-disabled": "#CDCDCD",
      },
      fontFamily: {
        montse: ["Montserrat", "sans-serif"],
        cinzel: ["Cinzel", "sans-serif"],
        corm: ["Cormorant", "sans-serif"],
      },
      fontSize: {
        sm: "0.8125rem", // 13px
        "3.5xl": "2.1875rem", // 35px
        "4xl": "2.5rem", // 40px
        "6.5xl": "4.375rem", // 70px
        "7xl": "5rem", // 80px
        "9xl": "7.5rem", // 120px
      },
      borderRadius: {
        "50%": "50%",
      },
      spacing: {
        "min-5.5": "-5.5rem", // -88px
        1.75: "0.46875rem", // 7.5px
        2.5: "0.625rem", // 10px
        6.5: "1.5625rem", // 25px
        7: "1.875rem", // 30px
        8.5: "2.125rem", // 24px
        13: "3.125rem", // 50px
        15: "3.75rem", // 60px
        17: "4.375rem", // 70px
        25: "6.25rem", // 100px
        30: "7.5rem", // 120px
        35: "9.375rem", // 150px
        44: "11.25rem", // 180px
      },
      backgroundImage: {
        "grey-texture": "url('/images/rectangle-34.png')",
        shadow:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))",
      },
      backgroundColor: {
        black: {
          DEFAULT: "#0F0F0F",
          700: "rgba(65, 60, 59, 0.7)",
        },
        white: {
          DEFAULT: "#fff",
          700: "rgba(255,255,255,0.7)",
        },
      },
      flexBasis: {
        "48%": "48%",
      },
      gap: {
        "4%": "4%",
      },
      bottom: {
        "10%": "10%",
      },
      boxShadow: {
        "3xl": "0px 0px 31px -10px rgba(0, 0, 0, 0.25)",
      },
      width: { "120%": "120%" },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      letterSpacing: {
        tight: "-0.03em",
      },
      lineHeight: {
        121: "1.21875",
        140: "1.4",
        3: "0.75",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
