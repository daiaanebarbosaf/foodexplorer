import { Container, Form, ImgDishes, SelectCategory } from './styles';

import { useState, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';

import { Link, useParams, useNavigate  } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Ingredients } from '../../components/Ingredients';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

export function Edit(){
    const params = useParams();
    const navigate = useNavigate();

    const { updateDish } = useAuth();

    const [dish, setDish] = useState(null);
    const [data, setData] = useState([]);

    const [title, setTitle] = useState("");
    const [categoty, setCategoty] = useState("");
  
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleBack(){
        navigate("/");
    }
    

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover o prato?");

        if(confirm) {
            await api.delete(`/dishes/${params.id}`);
            handleBack();
        }
    }

    async function handleUpdate(){
        const dish = {
            title,
            categoty,
            price,
            description,
        }

        await updateDish({dish});
    }

    function handleAddTag(){
        setTags((prevState) => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags((prevState) => prevState.filter((tag) => tag !== deleted));
    }

    useEffect(() => {
        async function fetchTags(){
          const response = await api.get("/tags");
          setData(response.data);
        }
    
        fetchTags();
      }, [tags]);

      useEffect(() => {
        async function fetchDish(){
          const response = await api.get(`/dishes/${params.id}`);
          setData(response.data);
        }
    
        fetchDish();
      }, [params.id]);

      useEffect(() => {
        if (dish) {
          setTitle(dish.title);
          setCategoty(dish.categoty);
          setPrice(dish.price);
          setDescription(dish.description);
      
          const allTags = dish.tags.map((tag) => tag.name);
          setTags(allTags);
        }
      }, [dish]);

    return (
        <Container>
            <Header/>
            <Link 
                className="back"
                to="/"
            >
                
                <IoIosArrowBack/>
                <ButtonText
                    title="voltar"
                />
            </Link>
                <main>
                    <Form>
                        <header>
                            <h1>Editar prato</h1>
                        </header>

                        <ImgDishes>
                            <p>Imagem do prato</p>
                            <label 
                                htmlFor="imgDishes"
                            >
                                <FiUpload/>
                                <p>Selecione imagem para alterá-la</p>

                                <input 
                                    id="imgDishes" 
                                    type="file" 
                                />
                            </label>
                        </ImgDishes>

                        <p>Nome</p>
                        <Input
                            type="text"
                            placeholder="Salada Ceasar"
                            value={data.title} 
                            onChange={e => setTitle(e.target.value)}
                        />

                        <SelectCategory
                        >
                            <p>Categoria</p>
                            <div className="input-select">
                                <select 
                                    value={data.categoty}
                                    onChange={e => setCategoty(e.target.value)}
                                >
                                    <option value="1">
                                        Refeição
                                    </option>
                                    <option value="2">
                                        Pratos Principais
                                    </option>
                                </select>
                            </div>
                        </SelectCategory>

                        <p>Ingredientes</p>

                        <div className="tags">

                        {
                            data.tags &&
                            <footer>
                                {    
                                    data.tags.map((tag, index) => 
                                        <Ingredients
                                            key={String(index)}
                                            title={tag.name}
                                            onClick={() => handleRemoveTag(tags)}
                                        />
                                    )
                                }
                            </footer>
                        }
                            
                            <Ingredients 
                                isnew
                                placeholder="Adicionar"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>

                        <p>Preço</p>
                        <Input 
                            placeholder="R$ 40,00"
                            type="number" 
                            value={data.price}
                            onChange={e => setPrice(e.target.value)}
                        />

                        <p>Descrição</p>
                        <Textarea 
                            placeholder="A Salada César é uma opção refrescante para o verão."
                            defaultValue={data.description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <div className="buttons">
                            <Button 
                                className="buttonDelete" 
                                title="Excluir prato"
                                onClick={handleRemove}
                            /> 
                            <Button 
                                className="buttonSave" 
                                title="Salvar alterações"
                                onClick={handleUpdate}
                            /> 
                        </div>
                    </Form>
                </main>

            <Footer/>
        </Container>

        
    );
}