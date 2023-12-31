import { Container, Form, ImgDishes, SelectCategory } from './styles';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { useState, useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Footer } from '../../components/Footer';
import { Ingredients } from '../../components/Ingredients';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload} from 'react-icons/fi';


export function New(){

    const [dish, setDish] = useState("");
    const [data, setData] = useState([]);

    const [imgdish, setImgdish ] = useState("");
    const [imgdishFile, setImgdishFile ] = useState(null);

    const [title, setTitle] = useState("");
    const [categoty, setCategoty] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    function handleBack(){
        navigate(-1);
    }

    function handleAddTag(){

        if(newTag === ""){
            alert("Insira conteúdo na tag, você não pode deixar o campo está vazio");
          } else {
            setTags(prevState => [...prevState, newTag]); 
          }
    
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleSelectedImage(e) {
        const file = e.target.files[0];
        if (file) {
          setImgdish(file);
        }
      }

    async function handleNewDish(){
        if(!title){
            return alert("Digite o nome do prato.")
        }

        if (newTag){
            return alert("Você deixou um ingrediente sem salvar.");
        }

        try {

            if(imgdish) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("imgdish", imgdish);

                const { data: dish_id } = await api.post("/dishes", {
                    categoty,
                    title,
                    price,
                    tags,
                    description
                });

                fileUploadForm.append("dish_id", dish_id);
                await api.patch("/dishes", fileUploadForm);
            }    
                alert("Prato criado com sucesso!");
                navigate("/");

            } catch (error) {
                if (error.response) {
                  alert(error.response.data.message);
                } else {
                    console.log(error)
                  alert("Não foi possível cadastrar o prato.");
                }
            }

    }

    useEffect(() => {
        async function fetchDishes(){
          const response = await api.get("/dishes");
          setData(response.data);
        }
    
        fetchDishes();
      }, [dish]);

    return (
        <Container>
            <Header/>
            <main>
                <Link 
                    className="back"
                > 
                    <IoIosArrowBack/>
                    <ButtonText
                        title="voltar"
                        onClick={handleBack}
                    />
                </Link>
                <Form >
                    <header>
                        <h1>Novo Prato</h1>
                    </header>

                    <div className="imgDishes">
                        <ImgDishes>
                            <p>Imagem do prato</p>
                            <label 
                                htmlFor="imgDishes"
                            >
                                <FiUpload/>
                                <p>Selecione uma imagem</p>

                                <input 
                                    id="imgDishes" 
                                    type="file" 
                                    onChange={handleSelectedImage}
                                />
                            </label>
                        </ImgDishes>
                    </div>


                    <div className="inputName">
                        <p>Nome</p>
                        <Input 
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)} 
                        />
                    </div>

                    <div className="selectCategory">
                        <SelectCategory
                            onChange={e => setCategoty(e.target.value)} 
                        >
                            <p>Categoria</p>
                            <div className="input-select">
                                <select 
                                >
                                    <option value="">
                                        Selecionar
                                    </option>
                                    <option value="meal">
                                        Refeições
                                    </option>
                                    <option value="dessert">
                                        Sobremesas
                                    </option>
                                    <option value="drink">
                                        Bebidas
                                    </option>

                                </select>
                            </div>
                        </SelectCategory>
                    </div>
                    
                    <div className="ingredients">
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
                    </div>

                    <div className="price">
                        <p>Preço</p>
                        <Input 
                            placeholder="R$ 00,00"
                            onChange={e => setPrice(e.target.value)}  
                        />
                    </div>

                    <div className="description">
                        <p>Descrição</p>
                        <Textarea 
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            onChange={e => setDescription(e.target.value)} 
                        />
                    
                    </div>
                    
                    <div className="button">
                        <Button 
                            className="buttonSave" 
                            title="Salvar alterações"
                            onClick={handleNewDish}
                        /> 
                    </div>
                </Form>
            </main>
            <Footer/>
        </Container>  
    );
}