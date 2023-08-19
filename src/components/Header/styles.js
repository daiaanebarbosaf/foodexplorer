import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 6rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    .hide {
        display: none;
        visibility: none;
    }

    .opacity {
        opacity: 0;
    }

`;

export const Menu = styled.div`
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;


    #optionsMenu {

        margin-left: -7rem;

        display: flex;
        flex-wrap: wrap;

        justify-content: space-between;

        gap: 1rem;
        
        border-bottom-width: 0.1rem;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    
    margin-top: 15rem;

    #buttonClose {
        height: 1.5rem;
    }

    #buttonExit {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 100;

        margin-bottom: 0.5rem;
    }
`;

export const MenuExpand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    #logoAdmin, #buttonHidden {
        height: 1.5rem;
    }

    #buttonHidden {
        width: clamp(5vw, 2em, 30vw);
    }

    #logoAdmin {
        width: clamp(15vw, 150em, 80vw);
    }

`;

export const MenuClose = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    margin-left: 2rem;

    gap: 1rem;

     #buttonClose {
        height: 1.5rem;
        width: clamp(5vw, 2em, 30vw);
        
    }

    > h1 {
        

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(2vw, 2em, 10vw);;
        
    }

`;


