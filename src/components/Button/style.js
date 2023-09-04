import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 2.5rem;
    border: 0;
 
    border-radius: 5px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`;