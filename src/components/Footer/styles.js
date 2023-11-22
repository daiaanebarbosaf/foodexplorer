import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer `
    grid-area: footer;
    
    > main {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        
        padding-block: 1rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background-color: ${({ theme }) => theme.COLORS.DARK_600}

        > img {
            width: clamp(15vw, 10em, 30vw);
        }

        > p {
            font-family: 'DM Sans', sans-serif;
            font-weight: 100;
            font-size: 0.5rem ;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        > main {
            justify-content: space-between;
            padding-inline: 5rem;
        }

    }
`;