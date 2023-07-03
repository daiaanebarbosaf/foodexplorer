import { Container, MenuExpand, MenuClose } from './styles';

import logoAdmin from '../../assets/logo-admin.svg';
import buttonHidden from '../../assets/hidden-menu.svg';
import buttonClose from '../../assets/close-menu.svg';

export function Header(){

    function expandMenu(){
        
        var menuExpand = document.getElementById('buttonHidden');
        var menuClose = document.getElementById('buttonClose');
        var adminLogo = document.getElementById('logoAdmin');
        var textMenu = document.getElementById('menuText');

        menuExpand.classList.add('hide');
        adminLogo.classList.add('hide');

        menuClose.classList.remove('hide');
        textMenu.classList.remove('hide');
    }

    function closeMenu(){

        var menuExpand = document.getElementById('buttonHidden');
        var menuClose = document.getElementById('buttonClose');
        var adminLogo = document.getElementById('logoAdmin');
        var textMenu = document.getElementById('menuText');
 
        
        menuClose.classList.add('hide');
        textMenu.classList.add('hide');

        menuExpand.classList.remove('hide');
        adminLogo.classList.remove('hide');
    }

    return(
        <Container>
            <MenuExpand onClick={expandMenu}>
                <img className="ride" id="buttonHidden" src={buttonHidden} alt="Imagem do menu escondido" />
                <img className="ride" id="logoAdmin" src={logoAdmin} alt="Logo da Food Explorer" />
            </MenuExpand>
            
            <MenuClose onClick={closeMenu}>
                <img className="hide" id="buttonClose" src={buttonClose} alt="Logo da Food Explorer" />
                <h1 className="hide" id="menuText">Menu</h1>
            </MenuClose>
            
        </Container>
    );
}