import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
  
    background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_100};

    border: ${({ theme, isnew }) => isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    
    border-radius: 5px;

    > button {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.1rem;

        border: none;
        background: none;

        gap: 1rem;

        > svg {
            margin-right: 0.5rem;
        }
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
  
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;
    }

    > input {
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(0.9vw, 1.3em, 30vw);

        width: 100%;
        padding: 0.3rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }
`;