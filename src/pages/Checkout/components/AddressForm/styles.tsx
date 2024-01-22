import { styled } from 'styled-components'

export const IBForm = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
    width: 100%;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 0.5rem;
`

export const UFSelect = styled.select`
    padding: 0.5rem;
    border-radius: 5px;
    width: 10%;

    border: 1px solid ${props => props.theme['base-hover']};
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};

    transition: all 0.2s ease-in-out;

    &:focus {
        border-color: ${props => props.theme['yellow-300']};
    }
` 