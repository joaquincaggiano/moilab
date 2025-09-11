import { Flame } from "lucide-react";
import LiNavbar from "../../ui/navbar/LiNavbar";

const links = [
  {
    href: "#home",
    text: "Inicio",
  },
  {
    href: "#services",
    text: "Servicios",
  },
  {
    href: "#projects",
    text: "Proyectos",
  },
  {
    href: "#contact",
    text: "Contacto",
  },
];

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
          {links.map((link) => (
            <LiNavbar key={link.href} href={link.href} text={link.text} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
