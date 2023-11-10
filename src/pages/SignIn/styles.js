import styled from "styled-components";

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
`;
