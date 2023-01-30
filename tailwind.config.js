module.exports = {

    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          footer: '#23669E ',
          footerHover: '#F47621',
          backToTop: '#37375F',
          // second: '#232020',
          body: '#F7F7F7',
          red:'#ff0000',
          // first: '#F47621',
        },
        fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
          intersb: ['Inter', 'sans-serif'],
        },
        fontSize: {
          tiny: '.79rem',
        },
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        }
      },
    },
    
  }
  