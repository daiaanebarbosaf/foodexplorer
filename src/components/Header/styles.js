import styled from 'styled-components';



export const Container = styled.header`
    grid-area: header;

    height: 6rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
     
    > img {
        width: 20rem;
        cursor: pointer;
    }

    #hiddenMenu, #closeMenu {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;

        

    }

    .hide {
        display: none;
    }

`;

