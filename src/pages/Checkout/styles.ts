import styled from "styled-components";
import { mixins } from '../../styles/mixins'

interface StyledPaymentButtonProps {
    isSelected?: boolean;
}
  

export const LandingPage = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-bottom: 5rem;
`;

export const OrderContainer = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h3 {
        ${mixins.fonts.titleS};
        margin-bottom: 2rem;
    }

`

export const InfoBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    flex-direction: column;

    background-color: ${props => props.theme['base-card']};
    padding: 2rem;
    border-radius: 10px;
`   

export const IBTitle = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    flex-direction: row; /* Mantém os dois primeiros elementos na mesma linha */
`;

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

export const BaseInput = styled.input`
    padding: 0.5rem;
    border: 1px solid ${props => props.theme['base-hover']};
    background-color: ${props => props.theme['base-input']};
    border-radius: 5px;
    gap: 1rem;

    width: ${props => props.width || '100%'};

    transition: all 0.2s ease-in-out;

    &:focus {
        border-color: ${props => props.theme['yellow-300']};
    }
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

export const PaymentButton = styled.button<StyledPaymentButtonProps>`
    background-color: ${props => (props.isSelected ? props.theme['base-hover'] : props.theme['base-button'])};
    color: ${props => props.theme['base-text']};
    border: ${props => (props.isSelected ? `2px solid ${props.theme['base-border']}` : `2px solid transparent`)};

    border-radius: 5px;
    padding: 1rem;
    gap: .5rem;
    width: 13rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    text-transform: uppercase;
    ${mixins.fonts.buttonM};

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.theme['base-hover']};
    }

    &:focus {
        border-color: ${props => props.theme['purple-700']};
    }
`   

export const SelectedCoffees = styled.div`
    width: 30%;
`   