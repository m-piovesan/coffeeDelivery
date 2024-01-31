import { styled } from 'styled-components'
import { mixins } from '../../../../styles/mixins'
import { Price } from '../../../../components/card/styles'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: .5rem;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 0 2rem 0;

    border-bottom: 1px solid ${({ theme }) => theme['base-hover']};

    p {
        ${mixins.fonts.textM};
    }
`

export const CoffeeImg = styled.img`
    max-width: 60px;
    height: auto;
    border-radius: 0.5rem;
`

export const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const ButtonsSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    color: ${({ theme }) => theme['base-text']};
    background-color: ${({ theme }) => theme['base-button']};
    
    border: none;
    border-radius: 8px;
    
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    p {
        text-transform: uppercase;
        ${mixins.fonts.buttonM};
    }

    &:hover {
        filter: brightness(0.9);
    }
`