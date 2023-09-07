import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_500};
    color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(0.5vw, 1.5em, 30vw);

        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            
        }
    }
`;