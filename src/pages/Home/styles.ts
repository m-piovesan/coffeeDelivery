import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    padding: 0 10rem;

    h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
`;

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
        margin-bottom: 2 rem;
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

const ICONS_COLORS = {
    'yellow-dark': 'yellow-700',
    yellow: 'yellow-300',
    'purple-dark': 'purple-700',
    gray: 'base-text',
} as const

interface IconsProps {
    iconsColor: keyof typeof ICONS_COLORS; 
}

export const Icon = styled.span<IconsProps>`
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme[ICONS_COLORS[props.iconsColor]]};
`;

export const CoffeeSection = styled.section`    
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: row;

    ul {
        width: 100%;

        list-style: none;
        display: flex;
        flex-wrap: wrap;

        gap: 1rem;
    }
`;

export const CoffeeCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    
    flex: 0 0 calc(25% - 1rem);
    
    background-color: ${props => props.theme['base-card']};
    border-radius: 0 15% 0 15%;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 80%;

        h4 {
            text-transform: uppercase;
            font-size: .8rem;

            padding: 0 .5rem;
            margin: .5rem;

            color: ${props => props.theme['yellow-700']};
            background: ${props => props.theme['yellow-100']};
            border-radius: 50px;
        }

        p {
            font-size: .9rem;
            margin-bottom: 1rem;
            text-align: center;
            color: ${props => props.theme['base-label']};
        }
    }
`;