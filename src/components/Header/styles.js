import styled from 'styled-components';



export const Container = styled.header`
    grid-area: header;

    height: 6rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;

    > img {
        cursor: pointer;
        width: clamp(5vw, 10em, 30vw);
    }

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;
    }

    .hide {
        display: none;
    }

`;

export const MenuExpand = styled.div`

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;
    }

`;

export const MenuClose = styled.div`
    display: flex;
    align-items: center;
    
     #buttonClose {
        margin-right: -17rem;
    }

    > h1 {
        margin-left: 2rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`;


