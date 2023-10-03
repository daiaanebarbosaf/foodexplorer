import { Container, Banner, BannerText, Search } from './styles';

import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';
import saladRavanello from '../../assets/dishes/saladRavanello.png';
import spaguettiGambe from '../../assets/dishes/spaguettiGambe.png';
import prugnaPie from '../../assets/dishes/prugnaPie.png';
import peachyPastrie from '../../assets/dishes/peachyPastrie.png';
import espresso from '../../assets/dishes/espresso.png';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';


import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';

export function Home(){

    const [search, setSearch] = useState("");

    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    const [dishes, setDishes] = useState([]);

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
            <Header>
 
       
            </Header>

            <Banner className="gradient-container">
                <img src={unparalleledFlavors} alt="Quitutes ao ar" />

                <BannerText>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </BannerText>
                
            </Banner>

            <Input
                    icon={FiSearch} 
                    id="searchPlate" 
                    placeholder="Busque por pratos ou ingredientes" 
                    onChange={() => setSearch(e.target.value)}
                />

            <Section title="Refeições">
                <ul>
                            <li>
                                <Link to="/edit">
                                    <PiPencilSimpleBold/>
                                </Link>
                    
                                <img 
                                    src={saladRavanello} 
                                    alt="Prato de Salada Ravanello" 
                                />
                    
                                <p>
                                    Salada Ravanello 
                                    <IoIosArrowForward/>
                                </p>
                                <p className="pPrice">R$ 49,97</p>
                            </li>
                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={spaguettiGambe} 
                            alt="Prato de Spaguetti Gambe" 
                        />

                        <p>
                            Spaguetti Gambe 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 79,97</p>
                    </li>
                </ul>
            </Section>

            <Section title="Pratos principais">
                <ul>
                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={prugnaPie} 
                            alt="Prato de Prugna Pie" 
                        />

                        <p>
                            Prugna Pie 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 79,97</p>
                    </li>

                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={peachyPastrie} 
                            alt="Prato de Peachy pastrie" 
                        />

                        <p>
                            Peachy pastrie 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 32,97</p>
                    </li>
                </ul>
            </Section>

            <Section title="Pratos principais">
                <ul>
                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={espresso} 
                            alt="Bebida Expressa" 
                        />

                        <p>
                            Espresso
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 15,97</p>
                    </li>

                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={espresso} 
                            alt="Copo de suco de maracujá" 
                        />

                        <p>
                            Suco de maracujá
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 13,97</p>
                    </li>
                </ul>
            </Section>

            <Footer />

        </Container>
    );
}