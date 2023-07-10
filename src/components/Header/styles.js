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
    flex-direction: column;
    justify-content: flex-start;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    

    margin-top: 15rem;
    margin-left: -5rem;

    gap: 1rem;

    #buttonExit {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 100;

        margin-bottom: 0.5rem;
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
    
     #buttonClose {
        margin-right: -17rem;
        cursor: pointer;
    }

    > h1 {

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        
    }

    > h1 {
        margin-left: 2rem;
    }
`;


