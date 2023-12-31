import { Container, Banner, BannerText, Profile } from './styles';

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';

import { FiSearch } from 'react-icons/fi';


import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Dishes } from '../../components/Dishes';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

register();

export function Home(){

    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [drink, setDrink] = useState([]);    

    const navigate = useNavigate();
    const params = useParams();

    const { user } = useAuth();

    const isDesktop = useMediaQuery({ minWidth: 1024 });
 
    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchDishes(){
            const { data } = await api.get(`/dishes?title=${search}`);
            setDishes(data.filter((dish) => dish.categoty === "meal" ))
            setDessert(data.filter((dessert) => dessert.categoty === "dessert"))
            setDrink(data.filter((drink) => drink.categoty === "drink"))
            
        }

        fetchDishes();
    },[search]);

    console.log(search)

    useEffect(() => {
        async function fetchDish(){
          const response = await api.get(`/dishes/${params.id}`);
          setData(response.data);
        }
    
        fetchDish();
      }, []);
      

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();
    }, []);

    return(
        <Container>
            <main>
                <Header>
                    <div id="searchPlateHome">
                        <Input
                            icon={FiSearch} 
                            id="searchPlate" 
                            placeholder="Busque por pratos ou ingredientes" 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </Header>
        
                <Banner className="gradient-container">
                    <img src={unparalleledFlavors} alt="Quitutes ao ar" />

                    <BannerText>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </BannerText>
                    
                </Banner>
                
                <Profile>
                    <span>Olá, <strong>{user.name}</strong>! </span>
                </Profile>

                <Section title="Refeições">

                    <Swiper
                        className="dishes"
                        slidesPerView={isDesktop ? 3 : 2 }
                        pagination={{clickable: true}}
                        navigation={isDesktop ? true : false}
                        grab-cursor="true"
                                         
                    >
                        {!dishes ? <p>Sem resultados</p> : ""} 
                        {
                            dishes && dishes.map((dish, categoty) => (
                                <SwiperSlide 
                                    key={String(dish.id)}
                                    
                                >
                                    <Dishes
                                        className="dish"
                                        
                                        imgdish={`${api.defaults.baseURL}/files/${dish.imgdish}`}
                                        data={dish}
                                        dishId={dish.id}
                                        onClick={() => handleDetails(dish.id)} 
                                        categoty={categoty}
                                    />                               
                                
                                </SwiperSlide>
                            ))
                        } 

                    </Swiper>
                    
                </Section>

                <Section title="Sobremesas">

                    <Swiper                        
                        className="dishes "
                        slidesPerView={isDesktop ? 3 : 2 }
                        pagination={{clickable: true}}
                        navigation={isDesktop ? true : false}
                        
                    > 
                        {!dessert ? <p>Sem resultados</p> : ""} 
                        {
                            dessert && dessert.map((dessert) => (
                                <SwiperSlide key={String(dessert.id)}>
                                        <Dishes
                                            className="dish"
                                            imgdish={`${api.defaults.baseURL}/files/${dessert.imgdish}`}
                                            data={dessert}
                                            dishId={dessert.id}
                                            onClick={() => handleDetails(dessert.id)} 
                                        />
                                </SwiperSlide>
                                
                            ))
                        }
      
                    </Swiper>

                </Section>

                <Section title="Bebidas">

                    <Swiper
                        className="dishes "
                        slidesPerView={isDesktop ? 3 : 2 }
                        pagination={{clickable: true}}
                        navigation={isDesktop ? true : false}
                    >
                        
                        {!drink ? <p>Sem resultados</p> : ""}   
                            {
                                drink && drink.map((drink) => (
                                    <SwiperSlide>
                                        <Dishes
                                            className="dish"
                                            key={String(drink.id)}
                                            imgdish={`${api.defaults.baseURL}/files/${drink.imgdish}`}
                                            data={drink}
                                            dishId={drink.id}
                                            onClick={() => handleDetails(drink.id)} 
                                        />
                                    </SwiperSlide>                                          
                                ))
                            }
                            
                    </Swiper>       

                </Section>
            </main>
            
            <Footer />

        </Container>
    );
}