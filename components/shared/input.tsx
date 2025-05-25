import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export interface TextInputProps {
  label: string;
  id: string;
  type?: 'email' | 'password' | 'text';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="grid w-full max-w-2xl items-center gap-1.5">
      <Label className="text-muted text-sm" htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="input w-full"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
