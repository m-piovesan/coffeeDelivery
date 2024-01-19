import styled from "styled-components";
import { mixins } from '../../styles/mixins'

export const LandingPage = styled.div`
    width: 100%;

    display: flex;
    gap: 2rem;

    margin-bottom: 5rem;
`;

export const OrderConfirmed = styled.div`
    width: 50%;
    
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    h1 {
        ${mixins.fonts.titleL};
        color: ${props => props.theme['yellow-700']};
    }

    p {
        ${mixins.fonts.textL};
    }
`

export const OrderDetails = styled.div`
    width: 100%;

    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    padding: 3rem;
    border: 1px solid black;
    border-radius: 5px 50px;
    margin-top: 2rem;
`

export const OrderDetailsRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`

export const OrderDetailsText = styled.div`
    display: flex;
    flex-direction: column;
    gap: .1rem;
    justify-content: center;
    align-items: center;
`