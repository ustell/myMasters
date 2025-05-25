'use client';
import { TextInput } from '@/components/shared/input';
import { categoriesData } from '@/data/categories';
import { useCallback, useEffect, useState } from 'react';

export default function CreateOrder() {
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const handleFilterCategory = useCallback(
    (category: string | null) => {
      if (category) {
        const res = categoriesData.find((item) => item.category === category);
        setFilterCategory(res?.fullServices || []);
      } else {
        setFilterCategory([]);
      }
    },
    [categoriesData]
  );

  const onClick = (item: string) => {
    setValue(item);
    const raw = localStorage.getItem('category');
    const parsed = raw ? JSON.parse(raw) : {};
    const category = parsed.category;
    localStorage.setItem(
      'category',
      JSON.stringify({
        category,
        item,
      })
    );
  };

  useEffect(() => {
    const raw = localStorage.getItem('category');
    const selectedCategory = raw ? JSON.parse(raw) : null;
    if (selectedCategory) {
      handleFilterCategory(selectedCategory.category);
      setValue(selectedCategory.item || '');
    }
  }, [handleFilterCategory]);

  return (
    <article className="space-y-4">
      <h3>Что нужно сделать?</h3>
      <TextInput
        label={'Услуга или специалист'}
        placeholder="Введите название услуги или специалиста"
        id={'CreateOrder'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="border-t border-muted mt-4 pt-4 space-y-3">
        <p>Например</p>
        <div className="flex gap-2">
          {filterCategory.slice(0, 5).map((item, id) => (
            <button
              className="inline tip text-nowrap"
              key={id}
              onClick={() => onClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
