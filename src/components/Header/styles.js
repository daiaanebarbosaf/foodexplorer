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

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;
    }

    .hide {
        display: none;
    }

    .rise{
        display: flex;
    }
     

`;

export const MenuExpand = styled.div`
    > img {
        width: 20rem;
        cursor: pointer;
    }

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;
    }

    .hide {
        display: none;
    }

    .rise{
        display: flex;
    }
`;

export const MenuClose = styled.div`
    display: flex;
    align-items: center;
    

    > img {
        width: 20rem;
        cursor: pointer;
    }

    #buttonHidden, #buttonClose {
        height: 1.5rem;
        margin-left: 2rem;
        margin-right: -20rem;
    }

    .hide {
        display: none;
    }

    .rise{
        display: flex;
    }

    > h1 {
        margin-left: 2rem;
        
    }
`;


