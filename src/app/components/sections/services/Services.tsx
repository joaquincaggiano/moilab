import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import ServicesSwap from './ServicesSwap';

const Services = () => {
  return (
    <section className='w-full min-h-screen mt-20' id='services'>
      <div className='container mx-auto flex flex-col items-center gap-10'>
        <TitleAndDescription
          title='¿Qué estás buscando?'
          description='Explora nuestra variedad de servicios diseñados para impulsar tu
            proyecto.'
        />

        <ServicesSwap />
      </div>
    </section>
  );
};

export default Services;
