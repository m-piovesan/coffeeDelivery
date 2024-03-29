import styled from "styled-components";
// import { mixins } from '../../styles/mixins'

export const LandingPage = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 5rem;
`;

export const Content = styled.div`
    width: 60%;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 4.5rem;
    }

    p.subtitle {
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 2rem;
        line-height: 1.7rem;
    }

    ul {
        list-style: none;
        display: flex;

        flex-wrap: wrap; /* Adicionado para permitir que os itens quebrem para a próxima linha */

        li {
            display: flex;
            align-items: center;
            gap: .5rem;
            
            flex: 0 0 50%; /* Faz com que cada <li> ocupe 50% da largura */
            margin: 0.5rem 0;      

        }
    }
`;

export const Banner = styled.div`
    width: 40%;

    img {
        width: 100%;
    }
`;

export const CoffeeList = styled.section`
    max-width: 1160px;
    padding: 32px 20px 150px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 54px;

    > h2 {
        color: ${props => props.theme['base-title']};
        text-align: center;
    }

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 40px;
        grid-column-gap: 32px;
    }
`;