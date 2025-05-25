import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Combobox } from './select';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-muted-foreground py-3 shadow-lg">
      <div
        className={cn(
          'container flex justify-between items-center ',
          className
        )}
      >
        <div className="flex justify-between items-center gap-2">
          <Link href={'/'} className="text-lg font-bold text-primary uppercase">
            Мастера
          </Link>
          <Combobox title={'Анталия'} data={[]} />
        </div>
        <div className="flex justify-between items-center gap-2">
          <Combobox title={'Специалисты'} data={[]} />
          <h4 className="text-lg">Войти</h4>
        </div>
      </div>
    </div>
  );
};
