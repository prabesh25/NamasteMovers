/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.Sajilopackersandmovers.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => {
    const paths = [
      { loc: '/', changefreq: 'daily', priority: 1.0 },
      { loc: '/services', changefreq: 'weekly', priority: 0.9 },
      { loc: '/about', changefreq: 'monthly', priority: 0.8 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
      { loc: '/branches', changefreq: 'monthly', priority: 0.8 },
      { loc: '/locations', changefreq: 'monthly', priority: 0.8 },
      { loc: '/blog', changefreq: 'weekly', priority: 0.7 },
    ];
    return paths;
  },
};