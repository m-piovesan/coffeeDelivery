import styled from 'styled-components';
import { IconsProps } from './index';

export const ICONS_COLORS = {
  'yellow-dark': 'yellow-700',
  yellow: 'yellow-300',
  'light-purple': 'purple-300',
  'purple-dark': 'purple-700',
  gray: 'base-text',
} as const;

export const IconComponent = styled.span<IconsProps>`
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme[ICONS_COLORS[props.iconsColor]]};
`;
