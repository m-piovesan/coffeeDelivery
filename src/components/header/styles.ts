import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 10rem;    
    border-bottom: 1px solid #ddd;

    nav {
        display: flex;
        align-items: center;
        gap: 2rem;

        span {
            display: flex;
            align-items: center;
            
            font-size: 1rem;
            font-weight: 200;

            padding: 0.5rem 1rem;

            color: ${props => props.theme["purple-300"]};
            background-color: ${props => props.theme["purple-100"]};
            border-radius: 8px;
        
            transition: all 0.3s;
        }

        span:hover {
            color: ${props => props.theme["purple-100"]};
            background-color: ${props => props.theme["purple-700"]};
        }
    }
`;