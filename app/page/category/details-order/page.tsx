'use client';
import { Combobox } from '@/components/shared/select';
import React from 'react';

export default function DetailsOrder() {
  const [category, setCategory] = React.useState<string | null>(null);
  React.useEffect(() => {
    const row = localStorage.getItem('category');
    const data = JSON.parse(row!);
    if (!data) {
      return;
    }
    setCategory(data.item);
  }, []);

  return (
    <>
      <article>
        <h3>Какое направление?</h3>
        <Combobox
          title={'Выберите направление'}
          data={[]}
          selected={category || ''}
        />
      </article>
      <article>
        <h3>Какая нужна услуга?</h3>
        <Combobox title={'Выберите услугу'} data={[]} />
      </article>
      <article>
        <h3>Опишите детали задачи</h3>
        <Combobox title={'Выберите услугу'} data={[]} />
      </article>
    </>
  );
}
