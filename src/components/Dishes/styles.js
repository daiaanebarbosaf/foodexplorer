import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    width: 13rem;
    height: 20rem;
    padding: 1rem;

    margin-bottom: 2rem;

    > a > svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: clamp(1vw, 3em, 30vw);
                margin-left: 8rem;
            }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 18rem;
        height: 22rem;
        
        padding: 1rem;
    }

`;

export const Content = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    margin-bottom: 2rem;
    gap: 0.5rem;

    > img {
        width: 6rem;
        margin-top: -2rem;
    }

    border-radius: 8px;

    > p {
                display: flex;
                align-items: center;
                gap: 0.2rem;

                font-family: 'Poppins', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }

            .pDescription {
                display: none;
            }

            .pPrice {
                font-family: 'Roboto', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 400;

                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }

            > footer {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 0.5rem;                
            }
    
    .buttonInclude {
        width: 70%;
        height: 1.8rem;
        margin-top: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        
        .pTitle {
            font-weight: bold;
            font-size: 1rem;
        }

        .pDescription {
            display: flex;
            font-size: 0.7rem;
            text-align: center;
            font-weight: 400;
        }

        .pPrice {
            font-size: 2rem;
        }
    }

`;

