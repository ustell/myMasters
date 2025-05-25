'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  items: string[];
  category: string;
  count: number;
  allItem: string;
}

export const ProfiList: React.FC<Props> = ({
  className,
  items,
  category,
  count,
  allItem,
}) => {
  const onClick = (item: string) => {
    localStorage.setItem(
      'category',
      JSON.stringify({
        category,
        item,
      })
    );
  };
  return (
    <div className={cn('space-y-2', className)}>
      <h4 className="text-base font-semibold">
        {category} <span className="muted">({count})</span>
      </h4>
      <ul>
        {items.slice(0, 5).map((item) => (
          <li
            key={item}
            className="text-sm hover:underline cursor-pointer last:mb-0 mb-2"
          >
            <Link
              href={`/page/category/create-order`}
              onClick={() => onClick(item)}
            >
              {item}
            </Link>
          </li>
        ))}
        <li className="text-sm hover:underline cursor-pointer">
          <Link
            href={`/category/${encodeURIComponent(
              category
            )}/${encodeURIComponent(allItem)}`}
          >
            {allItem}
          </Link>
        </li>
      </ul>
    </div>
  );
};
