import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
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
    max-width: 80%;
    margin: 2rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    font-family: 'Roboto', sans-serif;

    > header {
        > h1 {
            font-family: 'Poppins', sans-serif;
            font-size: clamp(1.5vw, 2em, 30vw);
            font-weight: 400;

            margin-bottom: 1rem;
        }
    }

    > p {

        font-weight: 400;
        font-size: clamp(0.5vw, 1em, 30vw);
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        align-items: left;

        padding: 0.4rem;
        gap: 0.5rem;
    
        width: 100%;
        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
`;

export const ImgDishes = styled.div`
    position: relative;

    > p {
        margin-bottom: 0.8rem;

        font-weight: 400;
        font-size: clamp(0.5vw, 1em, 30vw);
    }

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

export const SelectCategory = styled.div`
    
    > p {
        margin-bottom: 0.8rem;

        font-weight: 400;
        font-size: clamp(0.5vw, 1em, 30vw);
    }

    > select {
        width: 100%;
        border: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        display: flex;
        align-items: center;
        padding: 0.5rem;
        gap: 0.5rem;

        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.5vw, 1em, 30vw);
        font-weight: 400;

        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

    }

`;

export const Ingredients = styled.div`
    
`;