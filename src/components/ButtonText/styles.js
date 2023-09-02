import styled from "styled-components";

export const Container = styled.button`

    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    border: none;
    font-size: clamp(0.8vw, 1.3em, 30vw);
`;