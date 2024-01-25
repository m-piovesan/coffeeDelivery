import { StyledInput } from './styles';

import { InputHTMLAttributes } from 'react'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
    width: string;
}

export function BaseInput({ width, id, placeholder }: BaseInputProps) {
    return (
        <StyledInput
            width={width}
            id={id as string}
            placeholder={placeholder}
        />
    );
}
