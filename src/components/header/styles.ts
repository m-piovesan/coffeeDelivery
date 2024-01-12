import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 10rem;
    margin-bottom: 5rem;    
    border-bottom: 1px solid #ddd;

    nav {
        display: flex;
        align-items: center;
        gap: 2rem;

        a {
            display: flex;
            align-items: center;
            gap: 0.2rem;
            
            font-size: 1rem;
            font-weight: 200;
            text-decoration: none;

            padding: 0.5rem 1rem;

            color: ${props => props.theme["purple-300"]};
            background-color: ${props => props.theme["purple-100"]};
            border-radius: 8px;
        
            transition: all 0.3s;
        }

        a:last-child {
            color: ${props => props.theme["yellow-300"]};
            background-color: ${props => props.theme["yellow-100"]};
        }

        a:hover {
            color: ${props => props.theme["purple-100"]};
            background-color: ${props => props.theme["purple-700"]};
        }

        a:last-child:hover {
            color: ${props => props.theme["yellow-100"]};
            background-color: ${props => props.theme["yellow-700"]};
        }
    }
`;