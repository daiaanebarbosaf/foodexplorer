import styled from 'styled-components';

export const Container = styled.div`
    width: 35%;
    
    display: flex;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
    
    border-radius: 5px;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        background: none;

        > svg {
            margin-right: 0.5rem;
        }
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {
        text-align: center;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(0.9vw, 1.3em, 30vw);

        width: 100%;
        padding: 0.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            
        }
    }
`;