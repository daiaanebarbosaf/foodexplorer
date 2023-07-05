import styled from 'styled-components';



export const Container = styled.header`
    grid-area: header;

    height: 6rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
    cursor: pointer;

    > img {
        cursor: pointer;
        width: clamp(5vw, 10em, 30vw);
    }

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;

        cursor: pointer;
    }

    .hide {
        display: none;
    }

`;

export const Menu = styled.div`
    display: flex;

    > h1 {

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    > p {
        font-family: 'Poppins', sans-serif;
        font-weight: 100;
    }

    > h1, p {
        margin-left: 2rem;
    }
`;

export const MenuExpand = styled.div`

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;

        cursor: pointer;
    }

`;

export const MenuClose = styled.div`
    display: flex;
    align-items: center;
    
     #buttonClose {
        margin-right: -17rem;
        cursor: pointer;
    }
`;


