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

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
            #logoAdmin, #logoCustomer {
                z-index: 9999;
                height: 2rem;
                width: 20%;
                margin-left: -3rem;
            }

            .orderInformation, .searchPlate, .svgsignOut {
                visibility: visible;
            }

            .searchPlate {
                width: 40%;
                
            }

            .orderInformation {
                width: 15%;
                margin-left: 16rem;
            }

  
            .svgsignOut {
                height: 5rem;
                width: 2%;

                margin-left: 2rem;
                
            }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.XL}){

            #logoAdmin, #logoCustomer {
                height: 2rem;
                width: 40%;
                margin-left: -8rem;
            }

            .searchPlateHeader{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .searchPlate {
                width: 30%;
                
            }

            .buttoneOrderDish{
                margin-left: -2rem;
            }

            .orderInformation {
                width: 15%;
                margin-left: 38rem;
            }

            .svgsignOut {
                margin-left: 2rem; 
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
    

    #buttonHidden {
        height: 1.5rem;
    }

    #buttonHidden {
        width: clamp(5vw, 2em, 10vw);
    }

    #logoAdmin, #logoCustomer {
        height: 12rem;
        width: 12rem;
    }

    #receipt {
        left: 10rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
        #logoAdmin, #logoCustomer {
                
                height: 18.5rem;
                width: 18.5rem;
            }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
 
        #logoAdmin, #logoCustomer {
                margin-left: 5rem;
                height: 30rem;
                width: 25rem;
        }

        #receipt {
            margin-left: 7.5rem;
        }

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        #buttonHidden,  #receipt {
            display: none;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XG}){
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

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

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}){

        
    }

`;

export const Search = styled.div`

    display: flex;
    
    justify-content: center;
    align-items: center;

    background: none;

    height: 3rem;

    margin-top: 2rem;
    margin-bottom: 2rem;
    

 
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 60%;
        
        margin-top: -1.5rem;
        margin-left: 14rem;
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




