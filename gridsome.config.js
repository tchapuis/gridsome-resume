module.exports = {
  siteName: 'Thomas Chapuis - Développeur Web Fullstack Freelance',
  siteDescription: 'Je suis développeur Web Fullstack expérimenté, spécialisé dans les technologies PHP et notamment le framework Symfony',
  siteUrl: 'https://www.thomas-chapuis.dev',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}
