import Link from 'next/link';

export const HoverButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Link
      href={'/'}
      className="group relative z-10 my-2 py-3 text-black font-semibold  w-full text-left"
    >
      <span className="relative z-20">{children}</span>
      <span
        className="absolute -inset-x-4 -inset-y-2 bg-muted-foreground opacity-0 group-hover:opacity-100 rounded-md transition-all duration-300 z-10"
        aria-hidden="true"
      />
    </Link>
  );
};
