import { Container, Menu, MenuExpand, MenuClose, Search } from './styles';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Link, useNavigate } from 'react-router-dom';

import logoAdmin from '../../assets/logo-admin.svg';
import logoCustomer from '../../assets/logo-customer.svg';

import buttonHidden from '../../assets/hidden-menu.svg';
import buttonClose from '../../assets/close-menu.svg';
import receipt from '../../assets/receipt.svg';

import { PiReceipt } from 'react-icons/pi';
import { PiSignOutFill } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Header({children}){
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    const [dishes, setDishes] = useState([]);

    function expandMenu(){
        
        var menuExpand = document.getElementById('buttonHidden');
        var adminLogo = document.getElementById('logoAdmin');

        var menu = document.getElementById('menu');
        var menuClose = document.getElementById('menuClose');
        var search = document.getElementById('search');

        
              
        menuExpand.classList.add('hide');
        adminLogo.classList.add('hide');

        search.classList.remove('hide');
        menuClose.classList.remove('hide');
        menu.classList.remove('hide');
       
    }

    
    function handleHome(){
        navigate("/");
    }

    function handleNew(){
        navigate("/new");
    }

    function closeMenu(){

        var menuExpand = document.getElementById('buttonHidden');
        var adminLogo = document.getElementById('logoAdmin');

        var search = document.getElementById('search');
        var menuClose = document.getElementById('menuClose');
        var menu = document.getElementById('menu');   
        
 
        menuClose.classList.add('hide');
        menu.classList.add('hide');
        search.classList.add('hide');

        menuExpand.classList.remove('hide');
        adminLogo.classList.remove('hide');
    }

    const { signOut, user } = useAuth();

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
                <Menu onClick={expandMenu}>
                    <img className="" id="buttonHidden" src={buttonHidden} alt="Hidden menu icon" />

                    {
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <img className="soon" id="logoAdmin" src={logoAdmin} onClick={handleHome} alt="SoonFood Explorer" />
                    }

                    {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <img className="soon" id="logoAdmin" src={logoCustomer} onClick={handleHome} alt="Soon Food Explorer" />
                    }

                    {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <img  id="receipt" src={receipt} alt="Soon Food Explorer" />
                    }

                   
                    <div className="searchPlate">
                        <Input
                            icon={FiSearch} 
                            className="searchPlateHeader"
                            placeholder="Busque por pratos ou ingredientes" 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {
                      [USER_ROLE.CUSTOMER].includes(user.role) &&
                      <>
                        <div className="orderInformation">
                            <Button
                              className="buttoneOrderDish"
                              title="Pedidos (0)"
                              icon={PiReceipt}
                            />
                        </div>
                      </>
                    }

                    {
                      [USER_ROLE.ADMIN].includes(user.role) &&
                      <>
                        <div className="orderInformation">
                            <Button
                              className="buttoneOrderDish"
                              title="Novo prato"
                              onClick={handleNew}
                            />
                        </div>
                      </>
                    }

                    <PiSignOutFill
                        className="svgsignOut"
                        onClick={signOut}
                        to="/"
                    />
                    
                </Menu>

                <MenuClose id="menuClose" onClick={closeMenu} className="hide">
                    <img  id="buttonClose" src={buttonClose} alt="Imagem de um X para fechar o menu" />
                    <h1  id="menuText">Menu</h1>
                    
                </MenuClose>
                <Search id="search" className="hide">
                    {children}
                </Search>
                <MenuExpand id="menu" onClick={closeMenu} className="hide">
                    <div id="optionsMenu">
                        
                        <Link id="buttonExit" onClick={signOut} to="/"> Sair</Link>
                        {
                            [USER_ROLE.ADMIN].includes(user.role) &&
                            <>
                                <Link id="buttonNewDishes" to="/new">Novo prato</Link>
                            </>
                        }
                        
                    </div>
                </MenuExpand>
            </nav>
        </Container>
    );
}