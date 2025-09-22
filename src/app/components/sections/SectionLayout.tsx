interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
}

export const SectionLayout = ({ children, className, id }: Props) => {
  return (
    <section className={`w-full min-h-screen py-10 ${className}`} id={id}>
      <div className='container mx-auto flex flex-col items-center gap-10'>
        {children}
      </div>
    </section>
  );
};
