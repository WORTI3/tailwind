module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    extend: {
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
