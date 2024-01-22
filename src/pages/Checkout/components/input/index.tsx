import { StyledInput } from './styles';

interface InputProps {
    width: string;
    id: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BaseInput({ width, id, placeholder, onChange }: InputProps) {
  return (
    <StyledInput
      width={width}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
