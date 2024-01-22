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

export const GradientBorder = styled.div`
    margin-top: 2rem;
    width: 100%;

    border: double 1px transparent;
    background-image: linear-gradient(white, white), linear-gradient(to right, ${props => props.theme['yellow-700']}, ${props => props.theme['purple-700']});
    background-origin: border-box;
    background-clip: content-box, border-box;
    border-radius: 5px 50px;
`

export const OrderDetails = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    padding: 2.5rem;
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
    align-items: start;

    p {
        ${mixins.fonts.textM};
    }
`

export const BannerImage = styled.div`
    width: 50%;
    display: flex;
    margin-top: 5.5rem;

    img {
        width: 100%;
    }
`