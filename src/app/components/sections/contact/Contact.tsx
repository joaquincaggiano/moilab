const avatar = '/img/perfil.png';
import ProfileCard from '../../ui/cards/ProfileCard';
import { TitleAndDescription } from '../../ui/texts/TitleAndDescription';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className='w-full min-h-screen mt-40 mb-20' id='contact'>
      <div className='container mx-auto flex flex-col items-center gap-10'>
        <TitleAndDescription
          title='Contáctanos'
          description='¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.'
        />

        <div className='flex flex-col-reverse xl:flex-row items-center justify-center w-full gap-20'>
          <ProfileCard
            name='Joaquín Caggiano'
            title='Full Stack Developer'
            handle='moilab@gmail.com'
            status='Disponible'
            avatarUrl={avatar}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
          />

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
