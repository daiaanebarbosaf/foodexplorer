import { Container, Form, ImgDishes, SelectCategory } from './styles';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Ingredients } from '../../components/Ingredients';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';


export function New(){


    const [imgdish, setImgdish ] = useState("");
    const [imgdishFile, setImgdishFile ] = useState("");

    const [title, setTitle] = useState("");
    const [categoty, setCategoty] = useState("");

    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleChangeImgDish(event){
        const file = event.target.files[0];
        setImgdishFile(file);

        const imagePreview = URL.createObjectURL(file);
        setImgdish(imagePreview);
    }

    async function handleNewDish(){
        if(!title){
            return alert("Digite o nome do prato.")
        }

        if (newTag){
            return alert("Você deixou um ingrediente sem salvar.");
        }

        try {
            await api.post("/dishes", {
                imgdish,
                title,
                categoty,
                price,
                description,
                tags
            });
            

            alert("Nota criada com sucesso!");
            navigate("/");

        } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível cadastrar o prato.");
            }
        }
    }

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
                        <h1>Novo Prato</h1>
                    </header>

                    <ImgDishes>
                        <p>Imagem do prato</p>
                        <label 
                            htmlFor="imgDishes"
                        >
                            <FiUpload/>
                            <p>Selecione uma imagem</p>
                            <img 
                                src={imgdish}
                                alt="Imagem do Parto" 
                            />

                            <input 
                                id="imgdish" 
                                type="file" 
                                onChange={handleChangeImgDish}
                            />
                        </label>
                    </ImgDishes>

                    <p>Nome</p>
                    <Input 
                        placeholder="Ex.: Salada Ceasar"
                        onChange={e => setTitle(e.target.value)} 
                    />

                    <SelectCategory
                        onChange={e => setCategoty(e.target.value)} 
                    >
                        <p>Categoria</p>
                        <div className="input-select">
                            <select 
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
                            tags.map((tag, index) =>
                                <Ingredients 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}}
                                />
                            )
                        }
                        
                        <Ingredients 
                            isNew 
                            placeholder="Adicionar"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>

                    <p>Preço</p>
                    <Input 
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}  
                    />

                    <p>Descrição</p>
                    <Textarea 
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)} 
                    />
                    
                    <Button 
                        className="buttonSave" 
                        title="Salvar alterações"
                        onClick={handleNewDish}
                    /> 
                </Form>
            </main>
            <Footer/>
        </Container>

        
    );
}