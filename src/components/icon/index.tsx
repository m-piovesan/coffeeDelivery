import { IconComponent, ICONS_COLORS } from './styles';
import { ReactNode } from 'react';

export interface IconsProps {
    iconsColor: keyof typeof ICONS_COLORS;
    children?: ReactNode; // Adicionando a propriedade children
}
  
export function Icon({ iconsColor, children }: IconsProps) {
    return (
        <IconComponent iconsColor={iconsColor}>
            {children}
        </IconComponent>
    )
}