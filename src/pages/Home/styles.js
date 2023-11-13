import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`

    > main {
        position: relative;
        padding-inline: 2.4rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        .dishes {
            display: flex;
            align-items: flex-start;
            gap: 1rem;

            max-width: 50%;
        }

        .carousel {
            cursor: grab;
            overflow: hidden;
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
            #searchPlateHome {
                width: 50%;
                margin-top: -6rem;
            }
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
    
`;