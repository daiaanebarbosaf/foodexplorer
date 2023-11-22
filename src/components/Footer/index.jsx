import { Container } from './styles';

import logoFooter from '../../assets/logo-footer.svg';

export function Footer(){
    return(
        <Container>
            <main>
                <img  id="logoFooter" src={logoFooter} alt="Logo do footer" />
                <p>© 2023 - Todos os direitos reservados.</p>
            </main>
        </Container>
    )
}