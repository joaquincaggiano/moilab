interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`relative inline-block font-regular ${className}`}
      style={{
        color: disabled ? '#b5b5b5a4' : 'transparent',
        background: disabled
          ? 'none'
          : 'linear-gradient(90deg, #ffffff 0%, #9ca3af 25%, #ffffff 50%, #9ca3af 75%, #ffffff 100%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: disabled
          ? 'none'
          : `shineKeyframes ${animationDuration} linear infinite`,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
