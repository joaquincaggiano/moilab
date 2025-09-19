interface StructuredDataProps {
  type: 'organization' | 'website' | 'service';
}

const StructuredData = ({ type }: StructuredDataProps) => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MoiLab',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
    url: 'https://moilab.com',
    logo: 'https://moilab.com/img/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      'https://twitter.com/moilab',
      'https://linkedin.com/company/moilab',
      'https://github.com/moilab',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    foundingDate: '2024',
    numberOfEmployees: '1-10',
    industry: 'Software Development',
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MoiLab',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
    url: 'https://moilab.com',
    publisher: {
      '@type': 'Organization',
      name: 'MoiLab',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://moilab.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Desarrollo de Software y Aplicaciones Web',
    description:
      'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad.',
    provider: {
      '@type': 'Organization',
      name: 'MoiLab',
      url: 'https://moilab.com',
    },
    serviceType: 'Software Development',
    areaServed: {
      '@type': 'Country',
      name: 'Spain',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desarrollo de Software Personalizado',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Pages',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aplicaciones Web',
          },
        },
      ],
    },
  };

  const getData = () => {
    switch (type) {
      case 'organization':
        return organizationData;
      case 'website':
        return websiteData;
      case 'service':
        return serviceData;
      default:
        return organizationData;
    }
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getData(), null, 2),
      }}
    />
  );
};

export default StructuredData;
