interface SocialLinkProps {
  name: string;
  href: string;
  color: string;
  icon: React.ElementType;
}

export const SocialLinkButton = ({ name, href, color, icon }: SocialLinkProps) => {
  const Icon = icon;
  return (
    <a
      key={name}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-400/10 ${color} group`}
      aria-label={name}
    >
      <Icon className='w-5 h-5 transition-transform duration-300 group-hover:scale-110' />
    </a>
  );
};
