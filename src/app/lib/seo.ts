export const seoConfig = {
  siteName: 'MoiLab',
  siteUrl: 'https://moilab.es',
  defaultTitle: 'MoiLab - Desarrollo de Software y Aplicaciones Web',
  defaultDescription:
    'Desarrollamos software personalizado, landing pages impactantes y aplicaciones web que convierten tu visión en realidad. Soluciones digitales que marcan la diferencia.',
  defaultKeywords: [
    'desarrollo de software',
    'aplicaciones web',
    'landing pages',
    'desarrollo web',
    'software personalizado',
    'programación',
    'desarrollo frontend',
    'desarrollo backend',
    'Next.js',
    'React',
    'TypeScript',
    'TailwindCSS',
  ],
  author: 'MoiLab',
  locale: 'es_ES',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/moilab-web',
    github: 'https://github.com/moilab-web',
  },
};

export const generateMetadata = (
  title?: string,
  description?: string,
  keywords?: string[]
) => {
  return {
    title: title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle,
    description: description || seoConfig.defaultDescription,
    keywords: keywords || seoConfig.defaultKeywords,
    openGraph: {
      title: title
        ? `${title} | ${seoConfig.siteName}`
        : seoConfig.defaultTitle,
      description: description || seoConfig.defaultDescription,
      url: seoConfig.siteUrl,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: 'website',
    },
    alternates: {
      canonical: seoConfig.siteUrl,
    },
  };
};
