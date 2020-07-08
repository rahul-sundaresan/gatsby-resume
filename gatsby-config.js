module.exports = {
  
  siteMetadata: {
    title : `Welcome to my personal website!`,
    siteUrl: `https://rsun.dev`,
    description: `Rahul's personal website written in gatsby`
  },
  plugins:[
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon:'src/assets/img/website-icon.png'
      },
    }
  ]
};
