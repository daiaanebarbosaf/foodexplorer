import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > header {
        display: flex;
        justify-content: center;

        > img {
            cursor: pointer;
            width: clamp(15vw, 20em, 130vw);
            margin-bottom: 3.5625rem;
        }

    }

    > main {

        > h1 {
            visibility: hidden;
        }

        > p {
            font-family: 'Roboto', sans-serif;
            font-size: 0.8rem;
            font-weight: 400;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            margin-bottom: 0.3rem;
        }

        .inputSignInP, .buttonEnter {
            margin-top: 1rem;
        }

        #inputSignIn::placeholder {
            font-size: 0.7rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        > footer {
            display: flex;
            justify-content: center;

            > a {

                margin-top: 1.5rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                font-family: 'Poppins', sans-serif;
                font-weight: 500;
            }
        }
    } 
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        > header {
            > img {
                width: clamp(15vw, 30em, 130vw);
            }
        }

        > main {
            > p {
                font-size: 1rem;
            }

            .inputSignInP, .buttonEnter {
                margin-top: 1.5rem; 
            }

            #inputSignIn::placeholder {
                font-size: 0.8rem;
            }

            .buttonEnter {
                font-size: 0.8rem;
            }

            > footer {
                > a {
                    font-size: 0.8rem;
                }
            }
        }


    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: flex;
        flex-direction: row;
        gap: 15rem;

        > main {
            width: 25rem;
            height: 28rem;

            padding: 3rem;
            border-radius: 16px;
            background-color: ${({ theme }) => theme.COLORS.DARK_700};

            > h1 {
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
                font-size: 2rem;

                text-align: center;

                margin-bottom: 2rem;

                visibility: visible;
            }
        }

        
    }
`;
