'use client';

interface Props {
  href: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

const LiNavbar = ({ href, text, className, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const header = document.querySelector('header');
        const offset = header ? header.getBoundingClientRect().bottom + 20 : 20;
        const top = targetElement.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className={`relative transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#60a5fa] after:transition-all after:duration-300 hover:after:w-full ${className}`}
      >
        {text}
      </a>
    </li>
  );
};

export default LiNavbar;
