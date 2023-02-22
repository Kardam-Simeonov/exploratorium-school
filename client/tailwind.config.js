/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

const newScreens = Object.entries(defaultTheme.screens).reduce(
  (breakpoints, [label, value]) => {
    if (label === '2xl') {
      breakpoints['1xl'] = '1300px'
    }
    breakpoints[label] = value
    return breakpoints
  },
  {}
)

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'explo-background': '#6368AC',
        'explo-darkblue': '#575DAA',
        'explo-lightblue': '#9695C9',
        'explo-whiteblue': '#EEF4F9',
        'explo-darkercard': '#99A142',
        'explo-darklitecard': '#AFB84B',
        'explo-darkcard': '#B8C24E',
        'explo-darkergreen': '#399845',
        'explo-darkgreen': '#CADA2B',
        'explo-lightgreen': '#ECE82B',
        'explo-darkyellow': '#FECE32',
        'explo-lightyellow': '#F5EC17',
        'explo-darkred': '#EB2124',
        'explo-lightred': '#EB6262',
        'explo-darkpurple': '#5957AA'
      },
      borderWidth: {
        12: '12px',
        14: '14px',
        16: '16px'
      },
      dropShadow: {
        offcenter: '15px 15px 0 rgb(150, 149, 201)'
      },
      typography: ({ theme }) => ({
        explo: {
          css: {
            '--tw-prose-body': theme('colors.explo-whiteblue'),
            '--tw-prose-headings': theme('colors.explo-darkgreen'),
            '--tw-prose-lead': theme('colors.explo-darkgreen'),
            '--tw-prose-links': theme('colors.explo-darkgreen'),
            '--tw-prose-bold': theme('colors.explo-whiteblue'),
            '--tw-prose-counters': theme('colors.explo-whiteblue'),
            '--tw-prose-bullets': theme('colors.explo-whiteblue'),
            '--tw-prose-hr': theme('colors.explo-whiteblue'),
            '--tw-prose-quotes': theme('colors.explo-whiteblue'),
            '--tw-prose-quote-borders': theme('colors.explo-darkgreen'),
            '--tw-prose-captions': theme('colors.explo-whiteblue'),
            '--tw-prose-code': theme('colors.explo-whiteblue'),
            '--tw-prose-pre-code': theme('colors.explo-whiteblue'),
            '--tw-prose-pre-bg': theme('colors.explo-darkblue'),
            '--tw-prose-th-borders': theme('colors.explo-whiteblue'),
            '--tw-prose-td-borders': theme('colors.explo-whiteblue')
          }
        }
      })
    },
    fontFamily: {
      lobster: ['Lobster', 'cursive'],
      roboto: ['Roboto', 'sans-serif']
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    screens: newScreens
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
