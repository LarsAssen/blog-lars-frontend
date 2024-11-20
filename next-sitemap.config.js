// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://lars-assen.com',  // Replace with your site's domain
    generateRobotsTxt: true,            // (optional) Generate robots.txt
    sitemapSize: 7000,                  // (optional) Set max entries per sitemap
    outDir: './public',                 // Output directory for the sitemap files
    changefreq: 'daily',                // Frequency at which URLs are likely to change
    priority: 0.7,                      // Default priority for all URLs
    // Optional additional settings
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
      ],
    },
  };
  