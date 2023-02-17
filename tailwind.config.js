module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,njk}",
    "./src/blog/**/*.{html,md,njk}",
    "./src/pages/**/*.{html,md,njk}",
    "./src/index.{html,md,njk}",
  ],
  theme: {
    extend: {
      animation: {
        notification: 'notif 1.8s infinite ease-in-out'
      },
      keyframes: {
        notif: {
          '0%': { 
            transform: 'translateY(0px)',
            'background-color': '#fecaca'
          },
          '28%': { 
            transform: 'translateY(-7px)',
            'background-color': '#dc2626'
          },
          '44%': { 
            transform: 'translateY(0px)',
            'background-color': '#ef4444'
          }
        }
      },
      colors: {
        'deep-space': '#4A6163',
        'white-smoke': '#F9FAF4',
        'mustard': '#FFC94B',
        'peach': '#F17A7E',
        'orange': '#F9A66C',
        'glob': '#22C553',
        'blob': '#F87171'
      },
      screens: {
        '2xlm': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
        'xlm': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
        'lgm': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'mmd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'smm': {'max': '639px'},
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
