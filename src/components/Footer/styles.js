import styled from 'styled-components';


export const Container = styled.footer `
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-block: 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    > img {
        
        width: clamp(15vw, 10em, 30vw);
    }

    > p {
        font-family: 'DM Sans', sans-serif;
        font-weight: 100;
        font-size: 0.5rem ;
    }
`;