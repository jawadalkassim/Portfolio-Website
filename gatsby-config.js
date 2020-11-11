// import favicon16 from "./static/fav.png";

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
    // image:'/website-image.jpg',
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: `Jawad Alkassim Portfolio`,
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
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon-32x32.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon-16x16.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          
        ],
        
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
