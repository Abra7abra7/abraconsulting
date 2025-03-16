import React from 'react';

interface FeatureJsonLdProps {
  title: string;
  description: string;
  slug: string;
  mainEntityOfPage?: string;
}

export const FeatureJsonLd = ({
  title,
  description,
  slug,
  mainEntityOfPage = 'https://www.abraconsulting.xyz/features',
}: FeatureJsonLdProps) => {
  const featureUrl = `https://www.abraconsulting.xyz/features/${slug}`;
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `ABRA AI - ${title}`,
    description: description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: 'ABRA AI',
      url: 'https://www.abraconsulting.xyz',
    },
    url: featureUrl,
    mainEntityOfPage: mainEntityOfPage,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const FeaturesCollectionJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ABRA AI Features',
    description: 'Comprehensive suite of AI autonomous business features including one-click automation, intuitive workflow, edge hosting, and AI-powered business insights.',
    url: 'https://www.abraconsulting.xyz/features',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'One-Click Automation',
        url: 'https://www.abraconsulting.xyz/features/one-click-automation',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Intuitive Workflow',
        url: 'https://www.abraconsulting.xyz/features/intuitive-workflow',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Edge Hosting',
        url: 'https://www.abraconsulting.xyz/features/edge-hosting',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'AI-Powered Business Insights',
        url: 'https://www.abraconsulting.xyz/features/business-insights',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
