import React from 'react';

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.div`
    display: flex;
    align-content: center;

    background: linear-gradient(to bottom, #091E26, #00131C);

    width: 85%;
    height: 110px;

    margin-top: 2rem;
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

export const Section = styled.div`

    margin-bottom: 2rem;

    > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: clamp(0.8vw, 1.3em, 30vw);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        margin-bottom: 1rem;
    }

    > ul {

        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 5rem;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_300};

        width: 13.125rem;
        height: 18.25rem;
        padding: 2rem;
        
        border-radius: 8px;

        list-style: none;

        > li {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            gap: 1rem;

            > a > svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: 2rem;
                margin-left: 8rem;
            }
            
            > p {
                display: flex;
                align-items: center;
                gap: 0.2rem;

                font-family: 'Poppins', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
            }

            .pPrice {
                font-family: 'Roboto', sans-serif;
                font-size: clamp(0.8vw, 1.3em, 30vw);
                font-weight: 400;

                color: ${({ theme }) => theme.COLORS.CAKE_200};
            }
        }
    }
`;