import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

    > main {
        width: 100%;

        position: relative;
        padding-inline: 2.4rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .dishes {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            max-width: 15rem;
            padding-left: 1.5rem;

            --swiper-navigation-color: white;
            --swiper-navigation-size: 2rem;
            --swiper-navigation-bg: white;
            --swiper-pagination-color: white;
            

            --swiper-pagination-bullet-inactive-color: ${({ theme }) => theme.COLORS.LIGHT_300};

            animation-name: topdown;
            animation-duration: 900ms;

        }

        .dish {
            
        }

        .carousel {
            cursor: grab;
            overflow: hidden;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
            .dishes {
                max-width: 16rem;
            }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
            .dishes {
                max-width: 45rem;
            }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
              
            .dishes {
                max-width: 65rem;
            }

            #searchPlateHome {
                width: 55%;
                margin-top: -6rem;
                margin-left: -4rem;
            }
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
            #searchPlateHome {
                width: 58%;
                margin-top: -6rem;
                margin-left: -1rem;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}){

    }

    @keyframes topdown {
        0% {
            opacity: 0;
            transform: translateY(-35px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

`;

export const Profile = styled.div`
        display: flex;
        align-items: left;
        flex-direction: column;
       
        width: 100%;
        
        > span, p {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
        font-size: clamp(0.8vw, 1.3em, 30vw);

    }

    margin-bottom: 2rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        

    }
`;

export const Banner = styled.div`
    display: flex;
    align-content: center;

    background: linear-gradient(to bottom, #091E26, #00131C);

    width: 16rem;
    
    height: 110px;

    margin-top: 12rem;
    margin-bottom: 3rem;
    
    > img {
        width: 160px;
        height: 130px;

        position: relative;
        left: -25px;
        bottom: 15px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.SM}){
        width: 21rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 40.5rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 43rem;
        
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
        width: 75rem;
        height: 210px;

        margin-top: 13rem;

        > img {
            width: 450px;
            height: 320px;

            position: relative;
            left: -55px;
            bottom: 100px;
    
        }

        
    }

`;

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-right: 2rem;

    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > h1 {
        font-weight: 600;
        font-size: clamp(0.8vw, 1.3em, 30vw);
    }

    > p {
        font-weight: 400;
        font-size: 0.6rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        margin-right: 0rem;
        margin-left: 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
        > h1 {
            font-weight: 400;
            font-size: clamp(0.8vw, 3em, 30vw);
        }
    }
    
`;