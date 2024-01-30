import { styled } from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    p {
        ${mixins.fonts.textM};
    }
`

export const CoffeeImg = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 0.5rem;
`

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
`

export const ButtonsSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    ${mixins.fonts.buttonM};
    color: ${({ theme }) => theme['base-text']};
    background-color: ${({ theme }) => theme['base-button']};
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        filter: brightness(0.8);
    }

    &:disabled {
        filter: brightness(0.8);
        cursor: not-allowed;
    }

    &:disabled:hover {
        filter: brightness(0.8);
    }
`