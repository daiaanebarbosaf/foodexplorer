import styled from 'styled-components';

export const Container = styled.header`

    cursor: pointer;

    > nav {
        position: fixed;
        top: 0;
        left: 50%;

        width: 100%;

        height: 6rem;

        padding: 0 2rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        display: flex;
        align-items: center;
        justify-content: space-between;

        transform: translateX(-50%);

        .hide {
        
            display: none;
            visibility: none;
        }

        .opacity {
            opacity: 0;
        }

    }

`;

export const Menu = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;


    #optionsMenu {
        display: flex;
        flex-direction: column;

        justify-content: flex-start;

        gap: 1rem;

        > a {
            border-bottom-width: 0.1rem;
            border-bottom-style: solid;
            border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
        
    }
    
    margin-top: 15rem;

    #buttonClose {
        height: 1.5rem;
    }

    #buttonExit, #buttonNewDishes {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 100;
        font-size: clamp(2vw, 1.8em, 10vw);

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

    gap: 1rem;

     #buttonClose {
        height: 1.5rem;
        width: clamp(5vw, 2em, 30vw);
        
    }

    > h1 {
        
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(2vw, 2em, 10vw);
        
    }

`;


