import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { TextInput } from './input';

interface Props {
  className?: string;
  value?: string;
}

export const Search: React.FC<Props> = ({ className, value }) => {
  return (
    <div className={cn('flex w-full items-end space-x-2 ', className)}>
      <TextInput
        type="text"
        placeholder="Введите название услуги или специалиста"
        label={'Услуга или специалист'}
        id={'search'}
        value={value}
      />
      <Button type="submit">Найти</Button>
    </div>
  );
};
