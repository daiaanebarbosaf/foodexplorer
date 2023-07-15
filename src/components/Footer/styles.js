import styled from 'styled-components';


export const Container = styled.footer `
    width: 100%;

    display: flex;
    align-items: center;

    padding-block: 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    > img {
        margin-left: 2rem;
        width: clamp(15vw, 10em, 30vw);
    }

    > p {
        font-family: 'DM Sans', sans-serif;
        font-weight: 100;
        font-size: clamp(0.7rem, 0.5rem, 1vw);
    }
`;