import styled from "styled-components";
import { mixins } from '../../styles/mixins'

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
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`

const BaseInput = styled.input`
    background: transparent;
    border: 0;
    height: 2.5rem;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${props => props.theme['gray-100']};

    transition: border-color 0.2s;

    &:focus {
        box-shadow: none;
        border-color: ${props => props.theme['green-500']};
    }

    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;
    
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const SelectedCoffees = styled.div`
    width: 30%;
`   