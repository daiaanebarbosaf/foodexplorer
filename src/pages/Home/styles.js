import React from 'react';

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    gap: 2rem;

    padding: 0 2rem;

`;

export const Banner = styled.div`
    display: flex;
    align-content: center;

    background: linear-gradient(to bottom, #091E26, #00131C);

    width: 90%;
    height: 120px;

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

    padding: 0 1rem;

    > h1 {
        font-family: 'Poppins', sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 600;
        font-size: clamp(0.8vw, 1em, 30vw);
    }

    > p {
        
    }
    
`;
