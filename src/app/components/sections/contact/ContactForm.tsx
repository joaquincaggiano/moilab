import Form from "next/form";
import { sendEmailAction } from "@/app/actions/sendEmail";

const ContactForm = () => {
  return (
    <Form
      action={sendEmailAction}
      className="w-full max-w-xl bg-gray-800 p-6 rounded-lg space-y-4 flex flex-col gap-2"
    >
      {/* Campo de nombre completo */}
      <div className="flex flex-col">
        <label htmlFor="fullName" className="text-white mb-2 font-medium">
          Nombre Completo
        </label>
        <div className="flex flex-col gap-1">
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Tu nombre completo"
            required
            className="px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Campo de email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-white mb-2 font-medium">
          Email
        </label>
        <div className="flex flex-col gap-1">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="moilab@gmail.com"
            required
            className="px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Campo de mensaje */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-white mb-2 font-medium">
          Mensaje
        </label>
        <div className="flex flex-col gap-1">
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            rows={6}
            required
            className="px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
          />
        </div>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="cursor-pointer w-full text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 duration-400 bg-gradient-to-r from-blue-400 to-purple-600 hover:bg-blue-400 hover:from-blue-400 hover:to-blue-400"
      >
        Enviar Mensaje
      </button>
    </Form>
  );
};

export default ContactForm;
