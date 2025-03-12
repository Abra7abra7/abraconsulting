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
          description: 'ABRA AI is an autonomous AI-powered assistant designed for businesses to automate repetitive tasks, manage data efficiently, and support decision-making.',
          sameAs: [
            'https://twitter.com/abraai',
            'https://www.linkedin.com/company/abraai',
            'https://www.facebook.com/abraai'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-123-456-7890',
            contactType: 'customer service',
            email: 'contact@abraconsulting.xyz',
            availableLanguage: ['English']
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 AI Street',
            addressLocality: 'Tech City',
            addressRegion: 'TC',
            postalCode: '12345',
            addressCountry: 'US'
          }
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
          serviceType: 'AI Business Assistant',
          provider: {
            '@type': 'Organization',
            name: 'ABRA AI'
          },
          description: 'AI-powered assistant designed for businesses to automate tasks, manage data, and support decision-making',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        })
      }}
    />
  );
}
