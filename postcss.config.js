const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelist: [],
  whitelistPatternsChildren: [/skill$/, /flag$/, /banner-img$/, /topmar$/]
})

module.exports = {
  plugins: [
    tailwindcss('app/javascript/packs/tailwind.config.js'),
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
}
