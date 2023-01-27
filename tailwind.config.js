module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
  theme: {
    colors: {
      'deep-space': '#4A6163',
      'white-smoke': '#F9FAF4',
      'mustard': '#FFC94B',
      'peach': '#F17A7E',
      'orange': '#F9A66C',
      'blue': '#2563eb',
      'green': '#22c55e',
      'red': '#f87171'
    },
  }
}
