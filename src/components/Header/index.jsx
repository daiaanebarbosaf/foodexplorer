import { Container } from './styles';
import logoAdmin from '../../assets/logo-admin.svg';
import hiddenMenu from '../../assets/hidden-menu.svg';
import closeMenu from '../../assets/close-menu.svg';

export function Header(){

    function expandMenu(){
        hiddenMenu.classList.add('hide');
        closeMenu.classList.remove('hide');
    }

    return(
        <Container>
            <img className="" id="hiddenMenu" onClick={expandMenu} src={hiddenMenu} alt="Imagem do menu escondido" />
            <img className="hide" id="closeMenu" src={closeMenu} alt="Imagem para fechar menu" />
            <img className="" id="logoAdmin" src={logoAdmin} alt="Logo da Food Explorer" />
            
        </Container>
    );
}