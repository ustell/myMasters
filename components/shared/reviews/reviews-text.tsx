import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface Props {
  text: string;
  className?: string;
  user: string;
}

export const ReviewsText: React.FC<Props> = ({ user, text, className }) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <p>{user.split(' ')[0]} оставил отзыв</p>

      <div className="flex flex-row gap-2">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} color="yellow" />
        ))}
      </div>
      <p className="text-muted">Отлчино {text}</p>
    </div>
  );
};
