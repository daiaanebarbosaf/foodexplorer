import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  width: 100%;
  
`;

export const Button = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  > svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Number = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: ${({ isDetails }) => ( isDetails ? "1.2rem" : "1rem")} ;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

`;