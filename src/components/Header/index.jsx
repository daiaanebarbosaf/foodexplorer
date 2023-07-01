import { Container } from './styles';
import logoAdmin from '../../assets/logo-admin.svg';
import hiddenMenu from '../../assets/hidden-menu.svg';

export function Header(){
    return(
        <Container>
            <img id="hiddenMenu" src={hiddenMenu} alt="Imagem do menu escondido" />
            <img id="logoAdmin" src={logoAdmin} alt="Logo da Food Explorer" />
        </Container>
    );
}