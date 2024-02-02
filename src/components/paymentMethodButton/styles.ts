import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    
    width: 13rem;
    padding: 16px;
    
    border-radius: 6px;
    border: 1px solid transparent;

    background-color: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    cursor: pointer;
    
    text-transform: uppercase;
    ${mixins.fonts.buttonM};
    
    transition: all 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme['base-hover']};
    }

    &[data-state='true'] {
        background-color: ${({ theme }) => theme['base-hover']};
        border-color: ${({ theme }) => theme['purple-700']};
        box-shadow: 0 0 5px rgba(75, 41, 149, 0.5);
    }

    input {
        display: none;
    }

    svg {
        color: ${({ theme }) => theme['purple-700']};
    }
`