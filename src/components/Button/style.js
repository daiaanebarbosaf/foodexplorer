import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 2.5rem;
    border: 0;
 
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.7rem;

    > svg {
        width: 1.4rem;
        height: 1.4rem;
    }

    &:disabled{
        opacity: 0.5;
    }

 
`;