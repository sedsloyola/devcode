/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'emailFits': '382px', 
      'inputFits': '450px', 
      'textareaFits' : '1000px', 
      'imageAlign': '800px', 
      'imageResize': '900px' ,
      'navExpand' : '700px'
    },
    extend: {
      colors: {
        'darkBg': '#3C096C', 
        'hoverBg': '#9D4EDD', 
        'lightBg': '#9D4EDD'
      }
    },
  },
  plugins: [],
}

