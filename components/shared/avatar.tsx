import { cn } from '@/lib/utils';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export interface ProfiAvatars {
  className?: string;
  img: string;
  user: string;
}

export const ProfiAvatar: React.FC<ProfiAvatars> = ({ className, img, user }) => {
  return (
    <Avatar className={cn('w-10 h-10', className)}>
      <AvatarImage src={img} alt={user} />
      <AvatarFallback>{user}</AvatarFallback>
    </Avatar>
  );
};
