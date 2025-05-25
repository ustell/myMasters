import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  img: string;
  title: string;
}

export const ProfiCard: React.FC<Props> = ({ className, img, title }) => {
  return (
    <div className={cn('flex flex-col gap-2 group', className)}>
      <div className="max-w-[250px] w-full group-hover:bg-black/10">
        <span className="">{img}</span>
      </div>
      <p className="group-hover:text-primary">{title}</p>
    </div>
  );
};
