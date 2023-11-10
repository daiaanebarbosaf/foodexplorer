import { Container, Banner, BannerText, Profile } from './styles';

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

register();

export function Home(){

    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [drink, setDrink] = useState([]);

    const swiperElRef1 = useRef(null);

    const navigate = useNavigate();
    const params = useParams();

    const { user } = useAuth();

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchDishes(){
            const { data } = await api.get(`/dishes?title=${search}`);
            setDishes(data.filter((dish) => dish.categoty === "meal"))
            setDessert(data.filter((dessert) => dessert.categoty === "dessert"))
            setDrink(data.filter((drink) => drink.categoty === "drink"))
            
        }

        fetchDishes();
    },[search]);

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
                
                <Profile>
                    <span>Olá, <strong>{user.name}</strong> </span>
                    <p>Perfil de {user.role} </p>
                </Profile>

                <Section title="Refeições">

                    <swiper-container
                    
                            slides-per-view="auto"
                            loop="true"
                            grab-cursor="true"
                        >
                            <div className="dishes"> 
                    
                                {!dishes ? <p>Sem resultados</p> : ""}                
                                {
                                    dishes && dishes.map((dish, categoty) => (
                                        <swiper-slide key={String(dish.id)}>
                                            <Dishes
                                                imgdish={`${api.defaults.baseURL}/files/${dish.imgdish}`}
                                                data={dish}
                                                dishId={dish.id}
                                                onClick={() => handleDetails(dish.id)} 
                                                categoty={categoty}
                                            />
                                        </swiper-slide>                                
                                    ))
                                }

                            </div>

                    </swiper-container>
                    
                </Section>

                <Section title="Sobremesas">

                <div className="dish"> 
                    
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
                    
                </div>

                </Section>

                <Section title="Bebidas">

                <div className="dish"> 
                    
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
                    
                </div>

                </Section>
            </main>
            
            <Footer />

        </Container>
    );
}