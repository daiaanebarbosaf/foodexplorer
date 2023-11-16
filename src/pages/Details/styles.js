import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    background-image: ${({ theme }) => theme.COLORS.GRADIENT["100"]};

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 9.4rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        height: 100vh;
        grid-template-rows: 5rem auto 7.7rem;

        > main {

            ::-webkit-scrollbar {
                width: 0.8rem;
            }

            ::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
                border-radius: 0.8rem;
            }
            
        }

        .buttonsDetails {
            justify-content: initial;
            gap: 3.3rem;
        }
    }

`;

export const Content = styled.div`

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;

    margin-left: 2rem;
    margin-right: 2rem;
    gap: 1rem;

    .back {

        z-index: 9999;

        display: flex;
        align-items: center;

        margin-right: 12rem;

        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.8vw, 1.5em, 30vw);
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        > svg {
            font-size: clamp(0.8vw, 1.2em, 30vw);
        }

    }

    > main {
        > img {
            width: 10rem;
        }

        .dishDescription {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
            
            font-family: 'Poppins', sans-serif; 

            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            
        }
    }

    .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        gap: 1rem;
        margin-bottom: 1rem;

    }

    .orderInformation{
        display: flex;
        gap: 1rem;
        
    }

    .buttonEditDish {
        padding-left: 5rem;
        padding-right: 5rem;
        
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){

        display: flex;
        align-items: flex-start;

        padding-inline: 5rem;

        > main {
            display: flex;
            flex-direction: row;
            margin-top: 2rem;
            gap: 2rem;

            > img {
                width: 15rem;
            }

            .dishDescription {
                display: flex;
                align-items: flex-start;
                
                
                gap: 2rem;

                text-align: left;

                h1 {

                    font-size: 2rem;
                }

                p {
                    font-size: 1.5rem;
                }

                .tags {
                    align-items: flex-start;
                    justify-content: flex-start;
                }
                
                .tagsAndButtons {
                    display: flex;
                    flex-direction: column;
                    justify-items: flex-start;
            
                    gap: 1rem;
                }
            }

            .buttoneOrderDish{
                width: 10rem;
            }
        
        }

        .buttonEditDish {
        padding-left: 2rem;
        padding-right: 2rem;
        
        }
    }

`;