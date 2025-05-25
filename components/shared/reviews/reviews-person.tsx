import { Star } from 'lucide-react';
import React from 'react';
import { ProfiAvatar } from '../avatar';

interface Props {
  userName: string;
  rating: number;
  reviewsCount: number;
  opinion: string;
  avatar: string;
  className?: string;
}

export const ReviewsPerson: React.FC<Props> = ({
  userName,
  rating,
  reviewsCount,
  opinion,
  avatar,
  className,
}) => {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <ProfiAvatar img={avatar} user={userName} />
      <div>
        <h6 className="text-base font-medium">{userName}</h6>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {rating.toFixed(1)}
          </div>
          <span>· {reviewsCount} отзывов</span>
          <span>· {opinion}</span>
        </div>
      </div>
    </div>
  );
};
