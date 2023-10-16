import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    margin-bottom: 2rem;
    gap: 1rem;

    > img {
        width: clamp(3vw, 10em, 30vw);
    }

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    padding: 3rem 1rem;

    > a > svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: clamp(1vw, 3em, 30vw);
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

            > footer {
                display: flex;
                gap: 0.5rem;
            }

`;