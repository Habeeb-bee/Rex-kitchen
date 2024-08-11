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


    screens: {
      'xs': '375px',
      's': '390px',
    },

    

  

    // @keyframes moveInLeft {
    //   0% {
    //     opacity: 0;
    //     transform: translateX(-2rem); }
    //   80% {
    //     opacity: .8;
    //     transform: translateX(1.5rem); }
    //   100% {
    //     opacity: 1;
    //     transform: translate(0); } }
    
    // @keyframes moveInRight {
    //   0% {
    //     opacity: 0;
    //     transform: translateX(2rem); }
    //   80% {
    //     opacity: .8;
    //     transform: translateX(-1.5rem); }
    //   100% {
    //     opacity: 1;
    //     transform: translate(0); } }
  

    fontFamily: {
      "head": ["dancing", "sans-serif"],
      "body": ["josefinsans"]
    }

  },
  },
  plugins: [],
}

