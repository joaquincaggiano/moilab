const avatar = "/img/perfil.png";
import ProfileCard from "../../ui/cards/ProfileCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-gray-900 mt-20" id="contact">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo
            realidad.
          </p>
        </div>

        <div className="flex items-center justify-center w-full gap-20">
          <ProfileCard
            name="Joaquín Caggiano"
            title="Full Stack Developer"
            handle="moilab@gmail.com"
            status="Disponible"
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
