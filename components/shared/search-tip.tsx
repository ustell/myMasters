'use client';

import { Category } from '@/data/categories';
import Link from 'next/link';
import React from 'react';
import { Search } from './search';

interface Props {
  className?: string;
  data: Category[];
}

export const SearchTip: React.FC<Props> = ({ data }) => {
  const [value, setValue] = React.useState('');

  const onClick = (item: string, category: string) => {
    setValue(item);
    localStorage.setItem('category', JSON.stringify({ category, item }));
  };

  return (
    <>
      <Search value={value} />
      <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground">
        {data.map((tipItem) => {
          const item = tipItem.fullServices[0];
          return (
            <li key={tipItem.id}>
              <Link
                href={`/page/category/create-order`}
                onClick={() => onClick(item, tipItem.category)}
                className="px-3 py-1 rounded-md bg-muted hover:bg-muted/70 transition"
              >
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
