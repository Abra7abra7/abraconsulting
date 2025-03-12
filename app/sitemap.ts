import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.abraconsulting.xyz';
  
  // Define all routes in the application
  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/login',
  ];

  // Create sitemap entries with appropriate lastModified and changeFrequency values
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
