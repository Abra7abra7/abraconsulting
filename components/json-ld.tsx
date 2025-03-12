import React from 'react';

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ABRA AI',
          url: 'https://www.abraconsulting.xyz',
          logo: 'https://www.abraconsulting.xyz/logo.png',
          description: 'ABRA AI delivers cutting-edge autonomous business solutions using MCP protocol for intelligent decision making. Serving Slovakia and Central Europe with AI-powered business automation.',
          slogan: 'Autonomous Business Solutions for Central Europe',
          keywords: 'AI autonomous business, MCP protocol, decision making, Slovakia AI solutions',
          sameAs: [
            'https://twitter.com/abraai',
            'https://www.linkedin.com/company/abraai',
            'https://www.facebook.com/abraai',
            'https://github.com/abraai'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+421-123-456-789', // Updated with Slovakia country code
            contactType: 'customer service',
            email: 'contact@abraconsulting.xyz',
            availableLanguage: ['English', 'Slovak', 'Czech', 'Hungarian', 'Polish']
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hlavná 123',
            addressLocality: 'Bratislava',
            addressRegion: 'Bratislavský kraj',
            postalCode: '81101',
            addressCountry: 'SK'
          },
          areaServed: [
            {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 48.1486,
                longitude: 17.1077
              },
              geoRadius: '1000km',
              description: 'Central Europe'
            }
          ]
        })
      }}
    />
  );
}

export function ServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Autonomous Business Solutions',
          serviceType: 'AI Business Automation',
          provider: {
            '@type': 'Organization',
            name: 'ABRA AI',
            url: 'https://www.abraconsulting.xyz'
          },
          description: 'Advanced AI autonomous business solutions using MCP protocol for intelligent decision making and business process automation',
          areaServed: {
            '@type': 'Place',
            name: 'Central Europe',
            address: {
              '@type': 'PostalAddress',
              addressCountry: ['SK', 'CZ', 'HU', 'PL', 'AT']
            }
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR'
          },
          termsOfService: 'https://www.abraconsulting.xyz/terms-of-service',
          audience: {
            '@type': 'BusinessAudience',
            audienceType: 'Businesses in Central Europe'
          },
          category: ['AI Services', 'Business Automation', 'Decision Support']
        })
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://www.abraconsulting.xyz',
          name: 'ABRA AI Consulting',
          image: 'https://www.abraconsulting.xyz/logo.png',
          url: 'https://www.abraconsulting.xyz',
          telephone: '+421-123-456-789',
          priceRange: '€€',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hlavná 123',
            addressLocality: 'Bratislava',
            addressRegion: 'Bratislavský kraj',
            postalCode: '81101',
            addressCountry: 'SK'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 48.1486,
            longitude: 17.1077
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '17:00'
            }
          ],
          sameAs: [
            'https://twitter.com/abraai',
            'https://www.linkedin.com/company/abraai',
            'https://www.facebook.com/abraai'
          ],
          description: 'ABRA AI delivers cutting-edge autonomous business solutions using MCP protocol for intelligent decision making in Slovakia and Central Europe.'
        })
      }}
    />
  );
}
