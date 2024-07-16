/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'emailFits': '382px',
      'inputFits': '450px',
      'textareaFits': '1000px',
      'imageAlign': '800px',
      'imageResize': '900px',
      'navExpand': '800px',
      'logoFits': '630px',
      'logoExpand': '750px',
      'eventsCardFit': '500px',
      'EventsRowWise': '1100px',
      'EventsExpand': '1350px'
    },
    extend: {
      colors: {
        'darkBg': '#130f40',
        'hoverBg': '#3e428a',
        'lightBg': '#30336b'
      },
      backgroundImage: {
        'staringImage': 'url("/assets/images/image3.png")'
      }
    },
  },
  plugins: [],
}

