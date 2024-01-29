import styled from "styled-components";
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
    width: 256px;
    
    background-color: ${({ theme }) => theme['base-card']};
    padding: 0 20px 20px;
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;

    text-align: center;
`;

export const CoffeeImg = styled.img`
    margin-top: -20px;
    max-width: 120px;
    max-height: 120px;
    align-self: center;
`

export const Tags = styled.div`
    margin-top: 12px;

    display: flex;
    align-items: center;
    align-self: center;
    gap: 4px;

    span {
        padding: 4px 8px;
        border-radius: 100px;
        background-color: ${({ theme }) => theme['yellow-light']};
        color: ${({ theme }) => theme['yellow-dark']};
        text-transform: uppercase;
        ${mixins.fonts.tag}
    }
`

export const Title = styled.h3`
    margin-top: 16px;

    color: ${({ theme }) => theme['base-subtitle']};
    ${mixins.fonts.titleS}
`

export const Description = styled.span`
    margin-top: 8px;
    width: 100%;

    color: ${({ theme }) => theme['base-label']};
    ${mixins.fonts.textS}
`

export const Control = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 32px;
`

export const Price = styled.div`
    display: flex;
    align-items: baseline;
    gap: 2px;

    span:first-child {
        ${mixins.fonts.textS};
        color: ${({ theme }) => theme['base-text']};
    }

    span:last-child {
        ${mixins.fonts.titleM};
        color: ${({ theme }) => theme['base-text']};
    }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;

    > button {
        background-color: ${({ theme, $itemAdded }) => 
            $itemAdded ? theme['yellow-700'] : theme['purple-700']};
        
        transition: background-color 0.2s;
        border-radius: 6px;
        padding: 8px;
        display: flex;

        &:hover {
            background-color: ${({ theme, $itemAdded }) =>
            $itemAdded ? theme["yellow-300"] : theme['purple-300']};
        }
    }
`