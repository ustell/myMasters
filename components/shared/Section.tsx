import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  return (
    <section className="container wrapper py-8 sm:py-10 lg:py-14">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-muted text-sm sm:text-base mb-4">{subtitle}</p>
      )}
      <div className={cn('mt-4', className)}>{children}</div>
    </section>
  );
};
