import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import { SectionLayout } from '../SectionLayout';
import ServicesGrid from './ServicesGrid';

const Services = () => {
  return (
    <SectionLayout id='services'>
      <TitleAndDescription
        title='¿Qué estás buscando?'
        description='Explora nuestra variedad de servicios diseñados para impulsar tu
            proyecto.'
      />

      <ServicesGrid />
    </SectionLayout>
  );
};

export default Services;
