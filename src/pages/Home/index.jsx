import { Container, Banner, BannerText } from './styles';

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
import { Dishes } from '../../components/Dishes';

export function Home(){

    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get(`/dishes?title=${search}`);
            setDishes(response.data);
        }

        fetchDishes();
    },[search]);

    return(
        <Container>
            <Header>
                <Input
                    icon={FiSearch} 
                    id="searchPlate" 
                    placeholder="Busque por pratos ou ingredientes" 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>
    
            <Banner className="gradient-container">
                <img src={unparalleledFlavors} alt="Quitutes ao ar" />

                <BannerText>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </BannerText>
                
            </Banner>

            <Section title="Refeições">
                {
                    tags.map(tag =>{
                        <li
                            key={String(tag.id)}
                        >
                        </li>
                    })
                }

                {
                    dishes.map(dish => (
                        <Dishes
                            key={String(dish.id)}
                            data={dish}
                        />
                    ))
                }
            </Section>

            <Section title="Pratos principais">

            </Section>

            <Section title="Pratos principais">

            </Section>

            <Footer />

        </Container>
    );
}