import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    background-image: ${({ theme }) => theme.COLORS.GRADIENT["100"]};

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6rem auto;
    grid-template-areas: 
    "header"
    "content";

`;

export const Content = styled.div`

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    gap: 2rem;
    

    .back {

        display: flex;
        align-items: center;

        margin: 2rem 15rem 0rem 1.5rem;

        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.8vw, 1.5em, 30vw);
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > svg {
            font-size: clamp(0.8vw, 1.2em, 30vw);
        }

    }

    .dishDescription {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        
        font-family: 'Poppins', sans-serif; 

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        .col-b {
            > h1 {
                font-size: clamp(0.8vw, 1.6em, 30vw);
                font-weight: 500;
            }

            > p {
                font-size: clamp(0.8vw, 1.1em, 30vw);
                font-weight: 400;

                padding: 0rem 3rem 0rem 3rem;
            }
        }

        > img {
            width: clamp(3vw, 20em, 40vw);
        }
        
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        gap: 1rem;

        margin-bottom: 2rem;

    }

    .orderInformation{
        display: flex;
        gap: 1rem;
    }

    .buttonEditDish {
        width: 80%;
        margin: 2rem 15rem 2rem 1.5rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        .buttonEditDish {
            margin-left: 3rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        .back {
            margin-right: 70rem;
        }

        > main {

            .dishDescription {
                display: grid;
                grid-template-columns: 20rem 1fr;
                grid-template-areas:
                'A B';
      
                .col-a {
                    grid-area: A;
                    display: flex;
                    justify-content: flex-start;
                }

                .col-b {
                    grid-area: B;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .titleAndDescription {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;

                    > h1 {
                        font-size: 2rem;
                    }

                    > p {
                        font-size: 1rem;
                        font-weight: 300;

                        padding: 0rem;
                    }
                }

            }

            .tags {
                margin-top: -5rem;
                margin-right: 4rem;
            }

            .buttonEditDish {
                width: 15%;

                margin-bottom: 6rem;
                margin-left: 21rem;
            }
        }
    }
`;