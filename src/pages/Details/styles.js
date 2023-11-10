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
    margin: 2rem;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
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

    .dishDescription {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        
        font-family: 'Poppins', sans-serif; 

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > img {
            width: clamp(3vw, 50em, 60vw);
        }

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

    .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        gap: 1rem;

        margin-bottom: 2rem;

    }

    .buttoneEditDish {
        width: 98%;
    }
    
`;