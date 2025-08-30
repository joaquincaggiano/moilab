interface Props {
  href: string;
  text: string;
}

const LiNavbar = ({ href, text }: Props) => {
  return (
    <li>
      <a
        href={href}
        className="
            font-regular
            text-md
            text-white
            relative
            transition-colors
            after:content-['']
            after:absolute
            after:left-0
            after:bottom-[-4px]
            after:w-0
            after:h-[2px]
            after:bg-[#60a5fa]
            after:transition-all
            after:duration-300
            hover:after:w-full"
      >
        {text}
      </a>
    </li>
  );
};

export default LiNavbar;
