
require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {

  siteMetadata: {
    siteTitle: `Jawad Alkassim`,
    siteHeadline: `Jawad Alkassim - Web Developer Portfolio`,
    siteDescription: `Hi, I'm Jawad Alkassim, a freelance web Developer `,
    siteLanguage: `en`,
    siteImage: `/website-image.png`,
    siteUrl: `https://jawadalkassim.netlify.app/`,
    author: `@jawadAlkassim`,
    siteTitleAlt: `Jawad Alkassim Portfolio`,

    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available optionse 
      options: {},
    },
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jawad Alkassim`,
        short_name: `Jawad`,
        description: `Portfolio`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icon:'./static/favicon-32x32.png',
        
      },
      
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
