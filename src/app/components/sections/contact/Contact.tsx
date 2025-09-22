const avatar = '/img/perfil.png';
import ProfileCard from '../../ui/cards/ProfileCard';
import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import { SectionLayout } from '../SectionLayout';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <SectionLayout className='pt-30 pb-20' id='contact'>
      <TitleAndDescription
        title='Contáctanos'
        description='¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.'
      />

      <div className='flex flex-col-reverse xl:flex-row items-center justify-center w-full gap-20'>
        <ProfileCard
          name='Joaquín Caggiano'
          title='Full Stack Developer'
          handle='moilab.web@gmail.com'
          status='Disponible'
          avatarUrl={avatar}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />

        <ContactForm />
      </div>
    </SectionLayout>
  );
};

export default Contact;
