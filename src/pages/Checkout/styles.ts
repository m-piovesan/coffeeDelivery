import styled from "styled-components";
import { mixins } from '../../styles/mixins'

interface StyledPaymentButtonProps {
    isSelected?: boolean;
}

interface StyledInputProps {
    isValid?: boolean;
}
  
export const LandingPage = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-bottom: 5rem;

    h2 {
        ${mixins.fonts.titleS};
    }
`;

export const OrderContainer = styled.div`
    width: 65%;

    display: flex;
    flex-direction: column;
    gap: 2rem;
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

export const IBForm = styled.form`
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

    p {
        ${mixins.fonts.textXS};
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
    border: ${props => (props.isSelected ? `2px solid ${props.theme['purple-700']}` : `2px solid transparent`)};

    border-radius: 5px;
    padding: 1rem;
    gap: .5rem;
    width: 13rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    text-transform: uppercase;
    ${mixins.fonts.buttonM};
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${props => props.theme['base-hover']};
    }

    /* Estilo condicional quando o botão está selecionado */
    ${props => props.isSelected && `
      border-color: #4B2995;
      box-shadow: 0 0 5px rgba(75, 41, 149, 0.5);
    `}
`   

export const SelectedCoffees = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
    justify-content: start;
` 

export const PriceDisplay = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const PriceRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    &:last-child {
        p {
            ${mixins.fonts.textL};
            font-weight: bold;
        }
    }
`

export const ConfirmButton = styled.button<StyledInputProps>`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px;
    background-color: ${(props) => (props.isValid ? props.theme['yellow-300'] : props.theme['yellow-700'])};
    border: none;
    border-radius: 8px;

    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: ${(props) => (props.isValid ? 'pointer' : 'not-allowed')};
    opacity: ${(props) => (props.isValid ? 1 : 0.5)};
    
    p {
        ${mixins.fonts.buttonG};
        text-transform: uppercase;
        color: ${props => props.theme['white']};
    }

    &:hover {
        background-color: ${props => props.theme['yellow-700']};
    }
`