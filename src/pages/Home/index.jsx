import { Container, Banner, BannerText, Profile } from './styles';

import { motion } from 'framer-motion';

import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { api } from '../../services/api';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';

import { FiSearch } from 'react-icons/fi';


import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Dishes } from '../../components/Dishes';
import { ButtonText } from '../../components/ButtonText';

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

    const [width, setWidth] = useState(0);

    const navigate = useNavigate();
    const params = useParams();

    const { user } = useAuth();

    const [slidePerView, setSlidePerView] = useState();

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

    const carousel = useRef();

    useEffect(() => {

        function handleResize(){
            if(window.innerWidth > 720){
                setSlidePerView(3)
            } else {
                setSlidePerView(1);
            } 
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return() => {
            window.addEventListener("resize", handleResize);
        }
    }, [])

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
                    <span>Olá, <strong>{user.name}</strong> </span>
                    <p>Perfil de {user.role} </p>
                </Profile>

                <Section title="Refeições">

                    <Swiper 
                        className="dishes"
                        slidesPerView={slidePerView}
                        pagination={{clickable: true}}
                        navigation
                        
                        >
                        {!dishes ? <p>Sem resultados</p> : ""} 
                        {
                            dishes && dishes.map((dish, categoty) => (
                                <SwiperSlide >
                                    <Dishes
                                        key={String(dish.id)}
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

                    <motion.div                         
                            ref={carousel}
                            className="carousel"
                            whileTap={{cursor: "grabbing"}}> 
                        <motion.div 
                            className="dishes"
                            drag="x"
                            dragConstraints={{right: 0, left: -500}}
                            initial={{ x: 100}}
                            animate={{ x: 0}}
                            transition={{duration: 0.8}}
                        >
                            {!dessert ? <p>Sem resultados</p> : ""}                
                            {
                                dessert && dessert.map((dessert) => (
                                        <Dishes
                                            key={String(dessert.id)}
                                            imgdish={`${api.defaults.baseURL}/files/${dessert.imgdish}`}
                                            data={dessert}
                                            dishId={dessert.id}
                                            onClick={() => handleDetails(dessert.id)} 
                                    />
                                    
                                ))
                            }
                        
                        </motion.div>
                    </motion.div>

                </Section>

                <Section title="Bebidas">       

                <motion.div 
                    ref={carousel}
                    className="carousel"
                    whileTap={{cursor: "grabbing"}}
                > 
                    <motion.div 
                        className="dishes"
                        drag="x"
                        dragConstraints={{right: 0, left: -500}}
                        initial={{ x: 100}}
                        animate={{ x: 0}}
                        transition={{duration: 0.8}}
                        >
                            {!drink ? <p>Sem resultados</p> : ""}                
                            {
                                drink && drink.map((drink) => (
                                        <Dishes
                                            key={String(drink.id)}
                                            imgdish={`${api.defaults.baseURL}/files/${drink.imgdish}`}
                                            data={drink}
                                            dishId={drink.id}
                                            onClick={() => handleDetails(drink.id)} 
                                    />
                                    
                                ))
                            }
                        </motion.div>
                    
                    
                    
                </motion.div>

                </Section>
            </main>
            
            <Footer />

        </Container>
    );
}