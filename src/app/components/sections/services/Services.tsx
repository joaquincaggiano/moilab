import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import { SectionLayout } from '../SectionLayout';
import ServicesSwap from './ServicesSwap';

const Services = () => {
  return (
    <SectionLayout id='services'>
      <TitleAndDescription
        title='¿Qué estás buscando?'
        description='Explora nuestra variedad de servicios diseñados para impulsar tu
            proyecto.'
      />

      <ServicesSwap />
    </SectionLayout>
  );
};

export default Services;
