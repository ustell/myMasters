interface Props {
  label: string;
  className?: string;
}

export const ReviewsCategory: React.FC<Props> = ({ label, className }) => {
  return (
    <span
      className={`inline-block text-xs text-muted px-2 py-1 rounded ${className}`}
    >
      {label}
    </span>
  );
};
