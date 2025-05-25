'use client';
import React from 'react';
import { ReviewsCategory } from './reviews-category';
import { ReviewsPerson } from './reviews-person';
import { ReviewsText } from './reviews-text';

interface Props {
  userName: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  opinion: string;
  text: string;
  category: string;
  user: string;
}

export const ReviewCard: React.FC<Props> = (props) => {

  return (
    <div className="rounded-xl text-card-foreground shadow-sm space-y-4 mb-4">
      <ReviewsPerson
        userName={props.userName}
        avatar={props.avatar}
        rating={props.rating}
        reviewsCount={props.reviewsCount}
        opinion={props.opinion}
      />
      <ReviewsText text={props.text} user={props.user} />
      <ReviewsCategory label={props.category} />
    </div>
  );
};
