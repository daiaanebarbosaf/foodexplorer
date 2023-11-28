import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  
   width: 100%;
   display: flex;
   justify-content: center;
   
   flex-direction: column;
   

    
    > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.8vw, 1.3em, 30vw);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin-bottom: 1rem;
    }

    > ul {
        
        padding-inline: 3rem;
        
        display: flex;
        gap: 1rem;        

        border-radius: 8px;

        list-style: none;

        > li {
            
            
            display: flex;
            align-items: center;

            padding: 2rem 1rem;

            background-color: ${({ theme }) => theme.COLORS.DARK_300};
            
            gap: 1rem;

            > a > svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: clamp(1vw, 3em, 30vw);
                margin-left: 8rem;
            }

            > img {
                width: clamp(3vw, 10em, 30vw);
            }
            
            > p {
                display: flex;
                align-items: center;
                gap: 0.2rem;

                font-family: 'Poppins', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }

            .pPrice {
                font-family: 'Roboto', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 400;

                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        margin-left: 2rem;
        
        > h2 {
            font-size: 2rem;
        }
    }

`;