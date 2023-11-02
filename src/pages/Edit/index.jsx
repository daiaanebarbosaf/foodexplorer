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

    const [dish, setDish] = useState(null);
    const [data, setData] = useState([]);

    const [imgdish, setImgdish ] = useState("");
    const [imgdishFile, setImgdishFile ] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const [title, setTitle] = useState(data.title);
    const [categoty, setCategoty] = useState("");
  
    const [price, setPrice] = useState(data.price);
    const [description, setDescription] = useState(data.description);

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

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags((prevState) => prevState.filter(tag => tag !== deleted));
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImgdish(file);
        setUpdatedImage(file);
        setFileName(file.name);
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
            setImgdishFile(dish.imgdish);
            setImgdish(dish.image);
            setTitle(dish.title);
            setCategoty(dish.categoty);
            setPrice(dish.price);
            setDescription(dish.description);
        
            const allTags = dish.tags.map((tag) => tag.name);
            setTags(allTags);
        }
      }, [dish]);

      async function handleUpdate(){

        const titleNew = title != data.title ? title : data.title;
        const categotyNew = categoty != data.categoty ? categoty : data.categoty;
        const priceNew = price != data.price ? price : data.price;
        const descriptionNew = description != data.description ? description : data.description;

        const tagsNew = tags != data.tags ? tags : data.tags;

        console.log(data.imgdish)

        const imgdishNew = imgdish != data.imgdish ? imgdish : data.imgdish;
       
        try {

            console.log(imgdishNew)

            if(imgdishNew) {

                const fileUploadForm = new FormData();
                fileUploadForm.append("imgdish", imgdishNew);

                const { data: dish_id } = await api.put(`/dishes/${params.id}`, {
                    title: titleNew,
                    categoty: categotyNew,
                    price: priceNew,
                    description: descriptionNew,
                    tags: tagsNew,
                });

                fileUploadForm.append("dish_id", params.id);
                await api.patch("/dishes", fileUploadForm);
                
            }
 
            await api.put(`/dishes/${params.id}`, {
                
                title: titleNew,
                categoty: categotyNew,
                price: priceNew,
                description: descriptionNew,
                tags: tagsNew,
            });


            alert("Nota alterada com sucesso!");
            navigate("/");

        } catch (error) {
            if (error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível editar o prato.");
              console.log(error)
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
                            <h1>Editar prato</h1>
                        </header>

                        <ImgDishes>
                            <p>Imagem do prato</p>
                            <label 
                                htmlFor="imgDishes"
                            >
                                <FiUpload/>
                                <span>{fileName || "Selecione imagem"}</span>

                                <input 
                                    id="imgDishes" 
                                    type="file"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </ImgDishes>

                        <p>Nome</p>
                        <Input
                            type="text"
                            placeholder="Salada Ceasar"
                            defaultValue={data.title} 
                            onChange={e => setTitle(e.target.value)}
                        />

                        <SelectCategory
                        >
                            <p>Categoria</p>
                            <div className="input-select">
                                <select 
                                    defaultValue={data.categoty}
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
                                                value={tag.name}
                                                onClick={() => handleRemoveTag(tag)}
                                            />
                                        )
                                    }
                                </footer>
                            }

                            {
                                tags.map((tag, index) =>
                                    <Ingredients 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
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
                            placeholder="R$ 40,00"
                            type="number" 
                            defaultValue={data.price}
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