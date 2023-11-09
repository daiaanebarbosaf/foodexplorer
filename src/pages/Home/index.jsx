import { Container, Banner, BannerText, Profile } from './styles';

import { useState, useEffect } from 'react';
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
                <div className="dish"> 
                
                    {!dishes ? <p>Sem resultados</p> : ""}                
                    {
                        dishes && dishes.map((dish, categoty) => (
                                <Dishes
                                    key={String(dish.id)}
                                    imgdish={`${api.defaults.baseURL}/files/${dish.imgdish}`}
                                    data={dish}
                                    dishId={dish.id}
                                    onClick={() => handleDetails(dish.id)} 
                                    categoty={categoty}
                            />
                            
                        ))
                    }
                    
                </div>
            </Section>

            <Section title="Sobremesas">

            <div className="dish"> 
                
                {!dishes ? <p>Sem resultados</p> : ""}                
                {
                    dishes && dishes.map((dish, categoty) => (
                            <Dishes
                                key={String(dish.id)}
                                imgdish={`${api.defaults.baseURL}/files/${dish.imgdish}`}
                                data={dish}
                                dishId={dish.id}
                                onClick={() => handleDetails(dish.id)} 
                                categoty={categoty}
                        />
                        
                    ))
                }
                
            </div>

            </Section>

            <Section title="Pratos principais">

            </Section>

            <Footer />

        </Container>
    );
}