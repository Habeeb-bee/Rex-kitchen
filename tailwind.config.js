/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: { 
      animation:{
      "loop-scroll": "loop-scroll 8s linear infinite",
    },
      keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },

    fontFamily: {
      "head": ["dancing", "sans-serif"],
      "body": ["josefinsans"]
    }

  },
  },
  plugins: [],
}

