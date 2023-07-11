import { Container, Menu, MenuExpand, MenuClose } from './styles';
import { FiSearch } from 'react-icons/fi';

import logoAdmin from '../../assets/logo-admin.svg';
import buttonHidden from '../../assets/hidden-menu.svg';
import buttonClose from '../../assets/close-menu.svg';

import { Input } from '../../components/Input';

export function Header(){

    function expandMenu(){
        
        var menuExpand = document.getElementById('buttonHidden');
        var menuClose = document.getElementById('buttonClose');
        var adminLogo = document.getElementById('logoAdmin');
        var textMenu = document.getElementById('menuText');
        var searchPlate = document.getElementById('searchPlate');
        var buttonExit = document.getElementById('buttonExit');      

        menuExpand.classList.add('hide');
        adminLogo.classList.add('hide');

        menuClose.classList.remove('hide');
        textMenu.classList.remove('hide');
        searchPlate.classList.remove('hide');
        buttonExit.classList.remove('hide');
       
    }

    function closeMenu(){

        var menuExpand = document.getElementById('buttonHidden');
        var menuClose = document.getElementById('buttonClose');
        var adminLogo = document.getElementById('logoAdmin');
        var textMenu = document.getElementById('menuText');
        var searchPlate = document.getElementById('searchPlate');
        var buttonExit = document.getElementById('buttonExit');
        
 
        
        menuClose.classList.add('hide');
        textMenu.classList.add('hide');
        searchPlate.classList.add('hide');
        buttonExit.classList.add('hide');

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
                    <img className="hide" id="buttonClose" src={buttonClose} alt="Imagem de um X para fechar o menu" />
                    <h1 className="hide" id="menuText">Menu</h1>
                </MenuClose>
                <Menu onClick={expandMenu}>
                    <Input 
                        className="hide"
                        icon={FiSearch} 
                        id="searchPlate" 
                        placeholder="Busque por pratos ou ingredientes" 
                    />
                    <a className="hide" id="buttonExit" href="#">Sair</a>
                </Menu>
        
        </Container>
    );
}