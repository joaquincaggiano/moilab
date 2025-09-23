import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://moilab.com${item.href}`,
    })),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData, null, 2),
        }}
      />
      <nav aria-label='Breadcrumb' className='mb-4'>
        <ol className='flex items-center space-x-2 text-sm text-gray-400'>
          {items.map((item, index) => (
            <li key={index} className='flex items-center'>
              {index > 0 && (
                <svg
                  className='w-4 h-4 mx-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className='text-white font-medium' aria-current='page'>
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className='hover:text-white transition-colors duration-200'
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
