import { Container, Form, ImgDishes, SelectCategory } from './styles';

import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Ingredients } from '../../components/Ingredients';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

export function Edit(){
    const { dish } = useAuth();

    const [title, setTitle] = useState(dish.title);
    const [categoty, setCategoty] = useState();
    const [tag, setTag] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
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
                        placeholder="Salada Ceasar" 
                        value={title}
                    />

                    <SelectCategory
                        
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
                    <Input placeholder="R$ 40,00" />

                    <p>Descrição</p>
                    <Textarea placeholder="A Salada César é uma opção refrescante para o verão."/>
                    <div className="buttons">
                        <Button className="buttonDelete" title="Excluir prato"/> 
                        <Button className="buttonSave" title="Salvar alterações"/> 
                    </div>
                </Form>
            </main>
            <Footer/>
        </Container>

        
    );
}