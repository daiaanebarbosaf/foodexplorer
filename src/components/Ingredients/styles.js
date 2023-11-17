import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;  

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({ theme }) =>  theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  
    border-radius: 5px;
    padding-right: 1rem;

    > button {

        display: flex;
        align-items: center;
        justify-self:center;

        gap: 0.5rem;

        border: none;
        background: none;
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

        height: 1.5rem;
        width: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        margin-left: 1rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            
        }


    }
`;