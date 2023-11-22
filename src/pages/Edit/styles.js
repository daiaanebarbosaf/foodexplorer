import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    #search{
        display: none;
    }

    > main {
        display: grid;
        grid-template-rows: 5rem auto;
        grid-template-areas: 
        "header"
        "content";
        
        align-items: center;
        justify-items: center;
        grid-area: content ;
        
        max-width: 20rem;
        padding-inline: 2.4rem;

        .back {
            display: flex;
            align-items: center;
            margin-top: 8rem;

            font-family: 'Poppins', sans-serif;
            font-size: clamp(0.8vw, 1.5em, 30vw);
            font-weight: 500;

            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            > svg {
                font-size: clamp(0.8vw, 1.2em, 30vw);
            }

        }

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
        > main {
            max-width: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        > main {
            max-width: 70rem;
            padding: 0rem;

            justify-content: center;
            align-items: center;

            .back {
                margin-top: 15rem;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        > main {
            max-width: 100%;
            padding: 0rem;

            margin-bottom: 2rem;

            .back {
                margin-top: 10rem;
            }
        }
    }
`;

export const Form = styled.form`
    
    max-width: 80%;
    margin-top: 5rem;

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

    > div {
        > p {
            font-weight: 400;
            font-size: clamp(0.5vw, 1em, 30vw);
            margin-bottom: 0.5rem;
            
        }

    }

    .ingredients {
        width: 100%;
        margin-bottom: 0.5rem;
    
    }

    .tags {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 0.5rem;
   
        height: 100%;

        padding-left: 0.5rem;
        padding-right: 0.5rem;
       
        
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        > footer {
            min-width: fit-content;
            display: flex;
            gap: 0.3rem;
            justify-content: flex-start;

            .tagsEdit {
                width: 10px;
            }
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

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        
        margin-top: 8rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 76rem;
        height: 70vh;

        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;

        > header {
            width: 76rem;
        }

        .tags {
            height: 2.5rem;
            flex-direction: row;

            > footer {
                flex-wrap: nowrap;
            }
        }

        .imgDishes{
            width: 15%;
        }

        .inputName {
            width: 60%;
        }

        .selectCategory {
            width: 20%;
        }

        .ingredients {
            width: 70%;
        }

        .price {
            width: 20%;
        }

        .description {
            width: 71rem;
        }

        .buttons {
            width: 100%;
            
            justify-content: flex-end;

            .buttonDelete {
                width: 20%;
            }

            .buttonSave {
                width: 20%;
            }
        }

    }
`;

export const ImgDishes = styled.div`
    position: relative;

    > p {
        margin-bottom: 0.5rem;

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
        margin-bottom: 0.5rem;

        font-weight: 400;
        font-size: clamp(0.5vw, 1em, 30vw);
    }

`;