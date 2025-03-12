import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.abraconsulting.xyz';
  const currentDate = new Date();
  
  // Define main routes in the application
  const mainRoutes = [
    {
      route: '',
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      route: '/privacy-policy',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      route: '/terms-of-service',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      route: '/cookie-policy',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      route: '/login',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Define language-specific routes for Central European countries
  const languages = [
    { code: 'en-US', priority: 1.0 },
    { code: 'sk-SK', priority: 0.9 }, // Slovak
    { code: 'cs-CZ', priority: 0.9 }, // Czech
    { code: 'hu-HU', priority: 0.9 }, // Hungarian
    { code: 'pl-PL', priority: 0.9 }, // Polish
  ];

  // Create sitemap entries for main routes
  const mainSitemapEntries = mainRoutes.map(({ route, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  // Create sitemap entries for language-specific routes
  const languageSitemapEntries = languages.flatMap(({ code, priority }) => 
    mainRoutes.map(({ route, lastModified, changeFrequency }) => ({
      url: `${baseUrl}/${code}${route}`,
      lastModified,
      changeFrequency,
      priority: priority * (route === '' ? 1.0 : 0.8), // Adjust priority based on route importance
    }))
  );

  // Future blog posts placeholder (to be implemented)
  const blogSitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Combine all sitemap entries
  return [...mainSitemapEntries, ...languageSitemapEntries, ...blogSitemapEntries];
}
