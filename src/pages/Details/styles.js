import styled from 'styled-components';

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

export const Content= styled.div`
    padding: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

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

    .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        gap: 1rem;
    }
`;