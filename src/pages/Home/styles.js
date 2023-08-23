import React from 'react';

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    padding: 0 2rem;

`;

export const Banner = styled.div`
    display: flex;
    align-content: center;

    background: linear-gradient(to bottom, #091E26, #00131C);

    width: 90%;
    height: 120px;

    margin-top: 2rem;

    > img {
        width: 150px;
        height: 120px;

        position: relative;
        left: -25px;
        bottom: -4px;
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
