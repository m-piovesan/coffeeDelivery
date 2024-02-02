import { styled } from 'styled-components';

export const StyledInput = styled.input`
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme['base-hover']};
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 5px;
    gap: 1rem;

    width: ${(props) => props.width || '100%'};

    transition: all 0.2s ease-in-out;

    &:focus {
        border-color: ${(props) => props.theme['yellow-300']};
    }
`;