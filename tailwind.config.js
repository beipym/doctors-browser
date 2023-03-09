module.exports = {
   theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue'    : '#1fb6ff',
      'purple'  : '#692BEC',        //purple
      'textcolor'     : '#434343',      //text
      'searchboxgray' : '#E1E1E1',  // search box background
      'disabledgray'  : '#D0D0D0',  //disabled 
      'bodygray'   : '#F4F8F8', //body
      'liteyellow' : '#FFFADC', //yellow light
      'yellow'     : '#FFD43D', //yellow
      'litepink'   : '#FF1F6', // pink light
      'pink'      : '#FB377E', //pink
      'litegreen' : '#E9FFF4', // green light 
      'green'     : '#00A858', //green
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        // 'application': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}