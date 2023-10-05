import styled from 'styled-components';

export const Container = styled.header`
    
    cursor: pointer;

    > nav {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 50%;

        width: 100%;

        display: flex;
        flex-direction: column;

        transform: translateX(-50%);

        .hide {
            display: none;
            visibility: none;
        }
    }

`;

export const Menu = styled.div`
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;

    height: 6rem;

    #logoAdmin, #buttonHidden {
        height: 1.5rem;
    }

    #buttonHidden {
        margin-left: 2rem;
        width: clamp(5vw, 2em, 30vw);
    }

    #logoAdmin {
        width: clamp(15vw, 150em, 80vw);
    }

`;

export const MenuExpand = styled.div`
 
    display: flex;
    align-items: center;
    flex-direction: column;

    z-index: 9999;  

    width: 200vw;
    height: 100vh;

    padding: 0 2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};


    #optionsMenu {      

        display: flex;
        flex-direction: column;

        width: 100%;
   
        gap: 1rem;
        

        > a {
            border-bottom-width: 0.1rem;
            border-bottom-style: solid;
            border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
        
    }


    #buttonExit, #buttonNewDishes {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 100;
        font-size: clamp(2vw, 1.8em, 10vw);

        margin-bottom: 0.5rem;
    }

`;

export const MenuClose = styled.div`
    
    position: fixed;
    top: 0;
    left: 50%;

    width: 100%;
    height: 6rem;

    transform: translateX(-50%);

    display: flex;
    align-items: center;
    flex-direction: row;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    #buttonClose {
            margin-left: 2rem;
            height: 1.5rem;
            width: clamp(5vw, 2em, 30vw);
    }

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: clamp(2vw, 2em, 10vw);     
    }
        
`;

export const Search = styled.div`

    width: 100%;
    height: 6rem;

    padding: 2rem;

    z-index: 9999;  
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

  @media (max-width: 700px){
    margin-bottom: 1rem;
  }
`;


