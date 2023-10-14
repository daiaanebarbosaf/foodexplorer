import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;

    gap: 0.5rem;
  
    background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.LIGHT_100};

    border: ${({ theme, isnew }) => isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    
    border-radius: 5px;
  

    > button {
       
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;

        border: none;
        background: none;

        margin-right: 1rem;
  
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
  
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: transparent;

    }

    > input {
        width: 100%;
        height: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 1rem;
      
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(0.9vw, 1.3em, 30vw);

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

    }

`;