/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/**/*.{vue,ts,js,scss}', './*.{ts,js}'],
  safelist: [
    {
      pattern: /^p(\w?)-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: {
        DEFAULT: '#969BA7',
        50: '#f6f6f7',
        100: '#eef0f1',
        200: '#dfe4e6',
        300: '#ccd1d5',
        400: '#b6bcc3',
        500: '#9da4ae',
        600: '#8c929f',
        700: '#797e89',
        800: '#636770',
        900: '#53575c',
        950: '#303136'
      },
      purple: {
        50: '#eeeeff',
        100: '#e0e1ff',
        200: '#c7c8fe',
        300: '#a5a7fc',
        400: '#8184f8',
        500: '#6366f1',
        600: '#4649e5',
        700: '#383bca',
        800: '#3032a3',
        900: '#2e3081',
        950: '#1b1c4b'
      },
      mirage: {
        50: '#f5f7fa',
        100: '#e9edf5',
        200: '#ced9e9',
        300: '#a3b8d6',
        400: '#7294be',
        500: '#5076a7',
        600: '#3e5d8b',
        700: '#334b71',
        800: '#2d415f',
        900: '#2a3850',
        950: '#1c2536',
        960: '#161e2b'
      },
      green: {
        50: '#edfff9',
        100: '#d5fff4',
        200: '#aeffe8',
        300: '#70ffd8',
        400: '#2bfdc1',
        500: '#00ffb7',
        600: '#10d79e',
        700: '#00966b',
        800: '#067557',
        900: '#076049',
        950: '#003728'
      },
      red: {
        DEFAULT: '#ff6161',
        '50': '#fff1f1',
        '100': '#ffe1e1',
        '200': '#ffc7c7',
        '300': '#ffa0a0',
        '400': '#ff6161',
        '500': '#f83b3b',
        '600': '#e51d1d',
        '700': '#c11414',
        '800': '#a01414',
        '900': '#841818',
        '950': '#480707'
      },

      blue: {
        DEFAULT: '#4a90e2',
        '50': '#f1f7fd',
        '100': '#dfedfa',
        '200': '#c6e0f7',
        '300': '#9ecdf2',
        '400': '#70b1ea',
        '500': '#4a90e2',
        '600': '#3978d7',
        '700': '#3063c5',
        '800': '#2d51a0',
        '900': '#29467f',
        '950': '#1d2c4e'
      },
      mango: {
        DEFAULT: '#e1801f',
        '50': '#fdf8ed',
        '100': '#f9eacc',
        '200': '#f3d494',
        '300': '#edb95e',
        '400': '#e8a037',
        '500': '#e1801f',
        '600': '#c75f18',
        '700': '#a54318',
        '800': '#873519',
        '900': '#6f2d18',
        '950': '#3f1509'
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      body: '"Mukta", system-ui, sans-serif;',
      head: '"Poppins", system-ui, sans-serif;'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '1xl': '1.625',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '7xl': '4.375rem'
    },
    extend: {
      gridTemplateColumns: {
        content:
          '[full-width-start] minmax(1rem, 1fr) [breakout-start] minmax(0, 100px) [content-large-start] minmax(0px, 250px) [content-start] min(100% - ((1rem)*2), 780px) [content-end] minmax(0px, 250px) [content-large-end] minmax(0, 100px) [breakout-end] minmax(1rem, 1fr) [full-width-end]'
      },
      keyframes: {
        loadingBar: {
          '0%': { transform: 'translateX(-80%)' },

          '50%': {},
          '100%': { transform: 'translateX(80%)' }
        },
        dialogTimer: {
          '0%': { width: '100%' },
          '50%': {},
          '100%': { width: '0' }
        },
        slidewords: {
          '0%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(-112%)' },
          '25%': { transform: 'translateY(-100%)' },
          '35%': { transform: 'translateY(-212%)' },
          '50%': { transform: 'translateY(-200%)' },
          '60%': { transform: 'translateY(-312%)' },
          '75%': { transform: 'translateY(-300%)' },
          '85%': { transform: 'translateY(-412%)' },
          to: { transform: 'translateY(-400%)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(.9)', opacity: '0' },
          '2%': { transform: 'scale(1)', opacity: '1' },
          '50%': {},
          '98%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(.9)', opacity: '0' }
        },
        pulsateGreen: {
          '0%': { 'box-shadow': '0 0 0 0 rgba(0, 192, 133, 0.4)' },
          '70%': { 'box-shadow': '0 0 0 10px rgba(0, 192, 133, 0)' },
          '100%': { 'box-shadow': '0 0 0 0 rgba(0, 192, 133, 0)' }
        },
        pulsatePurple: {
          '0%': { 'box-shadow': '0 0 0 0 rgba(70, 73, 229, 0.4)' },
          '70%': { 'box-shadow': '0 0 0 10px rgba(70, 73, 229, 0)' },
          '100%': { 'box-shadow': '0 0 0 0 rgba(70, 73, 229, 0)' }
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.2)' },
          '20%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1)' },
          '35%': { transform: 'scale(1.2)' },
          '45%': { transform: 'scale(1)' }
        },

        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'loading-bar': 'loadingBar 1s alternate ease-in-out infinite',
        'dialog-time': 'dialogTimer 5s normal linear 1',
        'scale-in-out': 'scaleIn 5s normal ease-in 1',
        'pulsate-slow-green': 'pulsateGreen 2s infinite',
        'pulsate-slow-purple': 'pulsatePurple 2s infinite',
        'heart-beat': 'heartBeat 1.2s ease-in-out infinite',
        'word-slider': 'slidewords 8s cubic-bezier(.16,1,.3,1) infinite',
        'infinite-scrolling-bar': 'infinite-scroll 50s linear infinite'
      }
    }
  }
}
