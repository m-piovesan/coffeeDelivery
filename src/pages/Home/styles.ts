import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    padding: 0 10rem;
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

            span {
                display: flex;
                align-items: center;

                padding: 0.5rem;
                border-radius: 50%;
                background: ${props => props.theme["purple-300"]};
            }
        }
    }
`;

export const Banner = styled.div`
    width: 40%;

    img {
        width: 100%;
    }
`;