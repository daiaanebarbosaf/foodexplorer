import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 4rem;
    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    border-radius: 5px;

    > input {
   
      height: 2rem;
      width: 100%;

      padding: 0.5rem;


      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: transparent;
      border: 0;

      font-family: 'Roboto', sans-serif;
      font-weight: 400;
          font-size: 0.7rem;

       &placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
            
       }
    }

    > svg {
         margin-left: 0.5rem;
         width: 1rem;
    }
`;