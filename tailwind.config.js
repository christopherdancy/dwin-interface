module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans'],
      mono: ['IBM Plex Mono'],
    },
    extend: {
      colors: {
        'gray': {
          '25': '#f5f5f5',
          '50': '#b6b3ac',
          '100': '#606060',
          '200': '#484848',
          '300': '#393939',
          '400': '#2c2c2c',
          '500': '#212121',
          '600': '#1b1a1a',
          '700': '#161616',
          '800': '#0D0C0C',
        },
        'chocolate': {
          '400': '#272520',
          '500': '#36342f',
        },
        'red': '#ff7373',
        'gold': {
          '300': '#ffd26a',
          '500': '#fabd2e',
          '600': '#af8420',
        },
        'drab': {
          500: '#746338'
        },
        'sand': {
          500: '#FFDA85',
        }
      },
      letterSpacing: {
        widest: '.25em',
      },
      fontSize: {
        'xxs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      maxWidth: {
        'xxs': '18.5rem'
      },
      minWidth: {
        '20': '5rem',
        'xxs': '18.5rem'
      },
      backgroundImage: {
        'image-pattern': "url('./assets/images/bg-glow-top-left.png'), linear-gradient(to bottom, #272520, #1b1a18)",
      },
      boxShadow: {
        menu: '0px 8px 48px rgba(0, 0, 0, 0.5), 0px 0px 1px rgba(0, 0, 0, 0.25)'
      },
      animation: {
        'loading-flash': 'flash linear 500ms infinite',
      },
      keyframes: {
        'flash': {
          '0%': { transform: 'translateX(0)', width: '10%', opacity: '1'},
          '100%': { transform: 'translateX(100%)', width: '100%', opacity: '.1'}
        },
      },
      gridTemplateColumns: {
        'funding-token': '5rem 8rem minmax(10rem, 1fr) minmax(10rem, 1fr) 2rem',
        'treasury-token': '5rem 10rem 1fr minmax(5rem, 1fr)',
        'funding-nft': '5rem 10rem 1fr 2rem',
        'treasury-nft': '5rem 10rem 1fr',
      },
    }
  },
  plugins: [],
}