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
        margin: 2rem;

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
    max-width: 34rem;
    margin: 2rem;

    font-family: 'Roboto', sans-serif;

    > header {
        > h1 {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.5vw, 2em, 30vw);
            font-weight: 400;
        }
    }
`;

export const ImgDishes = styled.div`
    position: relative;
    margin: 0 auto 32px;

    > label {
        width: 100%;
        height: 2rem;

        display: flex;
        align-items: center;
        padding: 0.9rem;
        gap: 0.5rem;

        border-radius: 5px;
        

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        

        > input {
            display: none;
        }
    }
`;