import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    flex-direction: column;

    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    padding: 1rem 2rem;
    margin-bottom: 2rem;

    > div > svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: clamp(1vw, 3em, 30vw);
                margin-left: 8rem;
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

            .pPrice {
                font-family: 'Roboto', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 400;

                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }

            > footer {
                display: flex;
                gap: 0.5rem;
            }
    
    .buttonInclude {
        width: 130%;
        height: 1.8rem;
        margin-top: 1rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

    }

`;

