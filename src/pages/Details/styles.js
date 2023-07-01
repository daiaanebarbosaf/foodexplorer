import styled from 'styled-components';

export const Container = styled.div`
    background-image: ${({ theme }) => theme.COLORS.GRADIENT["100"]};

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6rem auto;
    grid-template-areas: 
    "header"
    "content";
`;