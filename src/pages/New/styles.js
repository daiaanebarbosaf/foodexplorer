import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6rem auto;
    grid-template-areas: 
    "header"
    "content";

    .back {

        display: flex;
        align-items: center;

        margin-right: 15rem;

        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.8vw, 1.5em, 30vw);
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > svg {
            font-size: clamp(0.8vw, 1.2em, 30vw);
        }

    }
`;

export const Form = styled.form`
    max-width: 34.375rem;
    margin: 2.375rem auto;

    > h1 {

    }
`;