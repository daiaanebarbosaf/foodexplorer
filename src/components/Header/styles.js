import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

        .orderInformation, .svgsignOut {
            visibility: hidden;
        }



        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){


        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
            > nav {
                z-index: 0;
                background: transparent;
            }

            #logoAdmin, #logoCustomer {
            
                height: 20rem;
                width: 20rem;
            }

            .searchPlateHeader{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .searchPlate {
                width: 50%;
                
            }

            .orderInformation {
                width: 20%;
                margin-left: 30rem;
            }

            .orderInformation, .searchPlate, .svgsignOut {
                visibility: visible;
            }

            .svgsignOut {
                height: 1.5rem;
                width: 1.5rem;
            }
        }

    }

`;

export const Menu = styled.div`
    width: 100%;
    padding-inline: 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;

    height: 6rem;

    #logoAdmin, #logoCustomer, #buttonHidden {
        height: 1.5rem;
    }

    #buttonHidden {
        width: clamp(5vw, 2em, 10vw);
    }

    #logoAdmin, #logoCustomer {
        width: clamp(5vw, 20em, 85vw);
    }

    #receipt {
        left: 10rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
 
        #logoAdmin, #logoCustomer {
                
                height: 20rem;
                width: 20rem;
            }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        #buttonHidden,  #receipt {
            display: none;
        }
    }

`;

export const MenuExpand = styled.div`
 
    display: flex;
    align-items: center;
    flex-direction: column;

    z-index: 9999;  

    width: 200vw;
    height: 100vh;

    margin-top: -2rem; 

    padding: 2rem;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    #optionsMenu {    

        display: flex;
        flex-direction: column;

        padding-right: 1rem;
        width: 100%;
   
        gap: 1rem;
        z-index: 9999;
        padding-right: 2rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_400};

        > a {
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
            width: 48%;
        }

        @media (max-width: 700px){
            > a {
                width: 46%;
            }
        }
        
    }

    #buttonExit, #buttonNewDishes {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Poppins', sans-serif;
        font-weight: 100;
        font-size: clamp(2vw, 1.8em, 10vw);

        margin-bottom: 0.5rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        background: transparent;
    

        #optionsMenu, #buttonExit, #buttonNewDishes {
            visibility: hidden;
        }
        
    }

`;

export const Search = styled.div`

    width: 100%;
    height: 6rem;

    padding: 2rem;

    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    
        background: transparent;
        width: 90%;

        margin-left: 20rem;
        
        #search {
            visibility: visible;

        }
        
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

    gap: 1rem;

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

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

        background: transparent;

        #buttonClose, #menuClose {
            visibility: hidden;
        }

        h1 {
            visibility: hidden;
        }
    }
        
`;




