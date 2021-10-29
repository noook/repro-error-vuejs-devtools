import { defineConfig } from 'windicss/helpers';

const colorPalette = [
  'fushia',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'deep-blue',
  'purple',
  'black',
];

export default defineConfig({
  safelist: [
    colorPalette.map((color) => `bg-analysis-type-${color} text-analysis-type-${color}`),
  ],
  theme: {
    extend: {
      boxShadow: {
        file: '0px 4px 8px rgba(26, 26, 26, 0.2);',
      },
      fontSize: {
        '3xs': '.5rem',
        11: '.6875rem',
        '2xs': '.625rem',
      },
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%',
        6: '1.5rem',
        8: '2rem',
        full: '100%',
        200: '200px',
        max: 'max-content',
      },
      minHeight: {
        6: '1.5rem',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      width: {
        800: '800px',
      },
      padding: {
        36: '9rem',
      },
      margin: {
        18: '4.5rem',
      },
      borderWidth: {
        1: '1px',
      },
    },
    colors: {
      transparent: 'transparent',
      white: {
        DEFAULT: '#ffffff',
        700: '#F9F9F9',
      },
      black: {
        DEFAULT: '#1A1A1A',
        500: '#000000',
      },
      lightgray: {
        DEFAULT: '#E1E9ED',
        600: '#6A92A0',
      },
      gray: {
        DEFAULT: '#1A1A1A',
        100: '#1A1A1A',
        80: '#656565',
        60: '#A1A1A1',
        40: '#C7C7C7',
        5: '#E4E4E4',
        0: '#F1F1F1',
      },
      'g-orange': {
        DEFAULT: '#FF742C',
        100: '#FF742C',
      },
      orange: {
        DEFAULT: '#FFB545',
        100: '#FFE9DD',
        200: '#FFE5BE',
        300: '#FFCC81',
        400: '#FF742C',
        500: '#FF9056',
      },
      archived: {
        200: '#EEF2F3',
        DEFAULT: '#8A9BA4',
      },
      red: {
        100: '#FDEBEB',
        200: '#FFCACA',
        300: '#FA9696',
        DEFAULT: '#FE5959',
      },
      blue: {
        100: '#F4FBFF',
        200: '181, 230, 255',
        300: '#C9EDFF',
        DEFAULT: '#00AAFF',
      },
      fuchsia: {
        DEFAULT: '#E83E5C',
      },
      'gradient-red': {
        DEFAULT: '#FF3938',
      },
      green: {
        100: '#F0FFF5',
        200: '#DBF3E3',
        300: '#9BD7AF',
        DEFAULT: '#3BCA74',
      },
      'dark-purple': '#051D5C',
      'bg-purple': '#281E64;',
      'DEFAULT-bg': '#FBFDFE',
      'gray-border': {
        300: '#C7C7C7',
        DEFAULT: '#E5E5E5',
      },
      navy: {
        100: '#F8F8F8',
        200: '#EFF7FB',
        300: '#D3E0E7',
        DEFAULT: '#003855',
        500: '#004867',
        600: '#163B4A',
        700: '2, 65, 96',
      },
      purple: {
        DEFAULT: '#1E0338',
        100: '#1E0338',
        80: '#4B3560',
        60: '#786888',
        40: '#A59AAF',
        20: '#D2CDD7',
        10: '#E9E6EB',
        5: '#F7F7F8',
        0: '#F9F9FB',
      },
      error: {
        DEFAULT: '#BE4300',
        20: '#FCEAE5',
      },
      success: {
        DEFAULT: '#4ABB77',
        100: '#4ABB77',
        80: '#6FC892',
        60: '#93D6AE',
        40: '#B7E4C9',
        10: '#EEF8F1',
        5: '#F6FCF8',
      },
      warning: {
        DEFAULT: '#FFAC4C',
        100: '#FFAC4C',
        80: '#FFBC70',
        60: '#FFCD94',
        40: '#FDDCB6',
        5: '#FFFBF6',
      },
      alert: {
        DEFAULT: '#EB4949',
        100: '#EB4949',
        80: '#EF6D6D',
        60: '#F39292',
        40: '#F5B4B4',
        10: '#FDEDEC',
        5: '#FEF6F6',
      },
      info: {
        DEFAULT: '#47B5EB',
        100: '#47B5EB',
        80: '#6CC4EF',
        60: '#91D3F3',
        40: '#D1EBF8',
        5: '#F6FBFE',
      },
      'analysis-type': {
        fushia: '#E72370',
        red: '#EB4949',
        orange: '#FF742C',
        yellow: '#FFC228',
        green: '#4ABB77',
        blue: '#47B5EB',
        'deep-blue': '#004867',
        purple: '#4B3560',
        black: '#000',
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    screens: {
      xs: '640px',
      // => @media (min-width: 640px) { ... }

      sm: '768px',
      // => @media (min-width: 768px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }

      xl: '1366px',
      // => @media (min-width: 1366px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
});
