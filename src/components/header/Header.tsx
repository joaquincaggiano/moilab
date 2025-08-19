import { Flame } from "lucide-react";

const Header = () => {
  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[60%] max-w-2xl
        backdrop-blur-xl
        rounded-full border border-gray-400/20
        py-4 px-6 z-50
        flex items-center justify-between
        shadow-lg shadow-gray-900/10"
    >
      <div className="flex items-center gap-2">
        <Flame className="w-8 h-8 text-dark-primary" />
      </div>

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#home"
              className="text-dark-primary hover:text-dark-secondary transition-colors"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-dark-primary hover:text-dark-secondary transition-colors"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-dark-primary hover:text-dark-secondary transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-dark-primary hover:text-dark-secondary transition-colors"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
