'use client';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  className?: string;
  url: string;
}

export const Step: React.FC<Props> = ({ className, url }) => {
  const router = useRouter();
  const prev = () => {
    router.back();
  };

  return (
    <div className="flex justify-between w-full gap-5">
      <button
        onClick={prev}
        className={cn(
          'w-[10%] flex items-center bg-muted-foreground rounded-lg justify-center',
          className
        )}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button className="w-[90%] bg-[#333]">
        <Link
          href={url}
          className={cn(
            'text-white w-full flex justify-center p-6 rounded-lg',
            className
          )}
        >
          Продолжить
          <ArrowRight className="ml-2" />
        </Link>
      </button>
    </div>
  );
};
