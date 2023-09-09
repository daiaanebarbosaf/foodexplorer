import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 9rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    border: none;
    resize: none;

    border-radius: 8px;
    padding: 1rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: clamp(0.5vw, 1em, 30vw);

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        padding-right: 3rem;
    }
`;