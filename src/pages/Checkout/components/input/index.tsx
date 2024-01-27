import { forwardRef } from 'react';
import { StyledInput } from './styles';

import { InputHTMLAttributes } from 'react'

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
    width: string;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(({ width, id, placeholder, ...props }: BaseInputProps, ref) => {
    return (
        <StyledInput
            ref={ref}
            width={width}
            id={id as string}
            placeholder={placeholder}
            {...props}
        />
    );
})
