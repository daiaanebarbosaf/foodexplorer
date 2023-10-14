import styled from 'styled-components';

export const Container = styled.span`
    width: auto;

    font-family: 'Poppins', sans-serif;
    font-size: clamp(0.8vw, 1.3em, 30vw);
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};

    border-radius: 5px;
    padding: 0.3125rem 0.875rem;

    
`;