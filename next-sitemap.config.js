/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.arcobalenosenzaglutine.it',
  generateRobotsTxt: false, // già gestito manualmente
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/privacy-policy', '/cookie-policy'],
  additionalPaths: async (config) => [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/ricette', priority: 0.9, changefreq: 'weekly' },
  ],
}
