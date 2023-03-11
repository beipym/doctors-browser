/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend:{

      colors: {
        'thpurple'        : '#692BEC',        //purple
        'thtextcolor'     : '#434343',      //text
        'thsearchboxbg'   : '#E1E1E1',  // search box background
        'thdisabled'      : '#D0D0D0',  //disabled 
        'thbodygray'   : '#F4F8F8', //body
        'thliteyellow' : '#FFFADC', //yellow light
        'thyellow'     : '#FFD43D', //yellow
        'thlitepink'   : '#FF1F6', // pink light
        'thpink'       : '#FB377E', //pink
        'thlitegreen'  : '#E9FFF4', // green light 
        'thgreen'      : '#00A858', //green
        'thinputplaceholder' : '#a5abb5', 

      },

    }
  },
  prefix: '',
  content: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
}