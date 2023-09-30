import { Container, Menu, MenuExpand, MenuClose } from './styles';
import { FiSearch } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Link } from 'react-router-dom';

import logoAdmin from '../../assets/logo-admin.svg';
import buttonHidden from '../../assets/hidden-menu.svg';
import buttonClose from '../../assets/close-menu.svg';

import { Input } from '../../components/Input';


export function Header(){
    const [search, setSearch] = useState("");

    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    const [dishes, setDishes] = useState([]);

    function expandMenu(){
        
        var menuExpand = document.getElementById('buttonHidden');
        var adminLogo = document.getElementById('logoAdmin');

        var menu = document.getElementById('menu');
        var menuClose = document.getElementById('menuClose');
              

        menuExpand.classList.add('hide');
        adminLogo.classList.add('hide');

        menuClose.classList.remove('hide');
        menu.classList.remove('hide');
       
    }

    function closeMenu(){

        var menuExpand = document.getElementById('buttonHidden');
        var adminLogo = document.getElementById('logoAdmin');

        var menuClose = document.getElementById('menuClose');
        var menu = document.getElementById('menu');   
        
 
        menuClose.classList.add('hide');
        menu.classList.add('hide');


        menuExpand.classList.remove('hide');
        adminLogo.classList.remove('hide');
    }

    const { signOut } = useAuth();

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?title=${search}&tags=${tagsSelected}`);
            setDishes(response.data);
        }

        fetchDishes();
    },[tagsSelected, search]);

    return(
        <Container>
            <nav>
                <MenuExpand onClick={expandMenu}>
                    <img className="" id="buttonHidden" src={buttonHidden} alt="Imagem do menu escondido" />
                    <img className="" id="logoAdmin" src={logoAdmin} alt="Logo da Food Explorer" />
                </MenuExpand>
                
                <MenuClose id="menuClose" onClick={closeMenu} className="hide">
                    <img  id="buttonClose" src={buttonClose} alt="Imagem de um X para fechar o menu" />
                    <h1  id="menuText">Menu</h1>
                </MenuClose>
                <Menu id="menu" onClick={expandMenu} className="hide">
                    <div id="optionsMenu">
                        <Link id="buttonExit" onClick={signOut}>Sair</Link>
                        <Link id="buttonNewDishes" to="/new">Novo prato</Link>
                    </div>
                </Menu>
            </nav>
        </Container>
    );
}