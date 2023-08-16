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

    > img {
        cursor: pointer;
        width: clamp(15vw, 20em, 130vw);
        margin-bottom: 4.5625rem;
    }

    > p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        margin-bottom: 0.5rem;
    }

    .inputSignIn {
        margin-top: 1rem;
    }
`;
