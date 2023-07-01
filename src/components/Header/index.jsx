import { Container, MenuExpand, MenuClose } from './styles';

import logoAdmin from '../../assets/logo-admin.svg';
import buttonHidden from '../../assets/hidden-menu.svg';
import buttonClose from '../../assets/close-menu.svg';

export function Header(){
    const menuExpand = document.getElementById('buttonHidden');
    const menuClose = document.getElementById('buttonClose');
    const adminLogo = document.getElementById('logoAdmin');
    const textMenu = document.getElementById('menuText');


    function expandMenu(){
        menuExpand.classList.add('hide');
        adminLogo.classList.add('hide');

        menuClose.classList.remove('hide');
        textMenu.classList.remove('hide');
        
    }

    function closeMenu(){
        menuClose.classList.add('hide');
        textMenu.classList.add('hide');

        menuExpand.classList.remove('hide');
        adminLogo.classList.remove('hide');
    }

    return(
        <Container>
            <MenuExpand onClick={expandMenu}>
                <img className="" id="buttonHidden" src={buttonHidden} alt="Imagem do menu escondido" />
                <img className="" id="logoAdmin" src={logoAdmin} alt="Logo da Food Explorer" />
            </MenuExpand>
            
            <MenuClose onClick={closeMenu}>
                <img className="hide" id="buttonClose" src={buttonClose} alt="Logo da Food Explorer" />
                <h1 className="hide" id="menuText">Menu</h1>
            </MenuClose>
            
        </Container>
    );
}