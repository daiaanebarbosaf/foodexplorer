import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 6rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    
    justify-content: center;

    > img {
        width: 20rem;
    }
`;

