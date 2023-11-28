import { Container, Form, ImgDishes, SelectCategory } from './styles';

import React, { useState, useEffect } from 'react';

import { Link, useParams, useNavigate  } from 'react-router-dom';
import { api } from '../../services/api';

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
    const params = useParams();
    const navigate = useNavigate();

    const [dish, setDishes] = useState(null);
    const [data, setData] = useState([]);

    const [imgdish, setImgdish ] = useState("");
    const [imgdishFile, setImgdishFile ] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const [title, setTitle] = useState(data.title);
    const [categoty, setCategoty] = useState(data.categoty);
  
    const [price, setPrice] = useState(data.price);
    const [description, setDescription] = useState(data.description);

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    let displayName = data.categoty;


    if(displayName == "meal"){
        displayName = "Refeição"
    }

    if(displayName == "dessert"){
        displayName = "Sobremesas"
    }

    if(displayName == "drink"){
        displayName = "Bebidas"
    }

   
    function handleBack(){
        navigate(-1);
    }
    

    async function handleRemove(){
        const confirm = window.confirm("Deseja realmente remover o prato?");

        if(confirm) {
            await api.delete(`/dishes/${params.id}`);
            handleBack();
        }
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
        setTags((prevState) => prevState.filter(tag => tag !== deleted));
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        setImgdish(file);
        setUpdatedImage(file);
        setFileName(file.name);
      }


      useEffect(() => {
        async function fetchDish(){
          const { data } = await api.get(`/dishes/${params.id}`);
          setData(data);
          
        }

        fetchDish();
      }, [params.id]);

      async function handleUpdate(){

        const titleNew = title != data.title ? title : data.title;
        const categotyNew = categoty != data.categoty ? categoty : data.categoty;
        const priceNew = price != data.price ? price : data.price;
        const descriptionNew = description != data.description ? description : data.description;

        const tagsNew = tags != data.tags ? tags : data.tags;

        console.log(titleNew)

        const imgdishNew = imgdish != data.imgdish ? imgdish : data.imgdish;
       
        try {

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

            if(!categoty){
                return alert("Escolha uma categoria")
            }
 
            await api.put(`/dishes/${params.id}`, {
                
                title: titleNew,
                categoty: categotyNew,
                price: priceNew,
                description: descriptionNew,
                tags: tagsNew,

                
            });

            console.log(titleNew)
            alert("Prato alterado com sucesso!");
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
                    <Form>
                        <header>
                            <h1>Editar prato</h1>
                        </header>

                        <div className="imgDishes">
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
                        </div>

                        <div className="inputName">
                            <p>Nome</p>
                            <Input
                                type="text"
                                placeholder="Salada Ceasar"
                                defaultValue={data.title} 
                                onChange={e => setTitle(e.target.value)}
                            />  
                        </div>

                        <div className="selectCategory">
                            <SelectCategory
                            >
                                <p>Categoria</p>
                                <label className="input-select" htmlFor="categoty">
                                    <select 
                                        defaultValue={categoty}
                                        onChange={e => setCategoty(e.target.value)}
                                    >
                                        <option value="">{displayName}</option>
                                        <option value="meal">Refeições</option>
                                        <option value="dessert">Sobremesas</option>
                                        <option value="drink">Bebidas</option>
                                    </select>
                                </label>
                            </SelectCategory>
                        </div>

                        <div className="ingredients">
                            <p>Ingredientes</p>
                            <div className="tags">
                            {
                                data.tags &&
                                <footer className="tagsEdit">
                                    {    
                                        data.tags.map((tag, index) => 
                                            <Ingredients
                                                key={String(index)}
                                                defaultValue={tag.name}
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
                                        defaultValue={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                )
                            }
                            
                            <Ingredients 
                                isNew
                                placeholder="Adicionar"
                                onChange={e => setNewTag(e.target.value)}
                                defaultValue={newTag}
                                onClick={handleAddTag}
                                
                            />
                        </div>

                        </div>

                        <div className="price">
                            <p>Preço</p>
                            <Input 
                                placeholder="R$ 40,00"
                                type="text" 
                                defaultValue={data.price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="description">
                            <p>Descrição</p>
                            <Textarea 
                                placeholder="A Salada César é uma opção refrescante para o verão."
                                defaultValue={data.description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>


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