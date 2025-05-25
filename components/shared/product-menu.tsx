import { cn } from '@/lib/utils';
import React from 'react';
import { HoverButton } from './hover-card';

interface Props {
  className?: string;
}

export const ProductMenu: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-2 max-w-[330px]', className)}>
      <HoverButton>Заказ</HoverButton>
      <HoverButton>Часто задаваемые вопросы</HoverButton>
      <hr className="border-2 border-primary/50 my-2" />
      <HoverButton>Специалисты</HoverButton>
    </div>
  );
};
