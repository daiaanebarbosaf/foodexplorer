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

        margin: 2rem 0rem 0rem 1.5rem;
        

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
        justify-content: center;

        gap: 0.5rem;
   
        height: 2.5rem;

        padding-left: 0.5rem;
        padding-right: 0.5rem;
        
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        > footer {
            width: 120px;
            display: flex;
            justify-content: flex-start;
        }
    }

    .buttons{
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .buttonSave {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

    .buttonDelete {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};

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
     
     .input-select {
        display: flex;
        padding: 0.5rem;
        
        width: 100%;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 5px;
        border: none;

        > select {
            width: 100%;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            font-family: 'Poppins', sans-serif;
            font-size: clamp(0.5vw, 1em, 30vw);
            font-weight: 400;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};

            border: none;
        }
     }
    
    > p {
        margin-bottom: 0.8rem;

        font-weight: 400;
        font-size: clamp(0.5vw, 1em, 30vw);
    }

`;