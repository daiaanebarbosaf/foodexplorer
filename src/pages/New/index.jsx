import { Container, Form, ImgDishes, SelectCategory } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Ingredients } from '../../components/Ingredients';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';



export function New(){
    return (
        <Container>
            <Header/>
            <a 
                className="back"
                href="#"
            >
                
                <IoIosArrowBack/>
                <ButtonText
                    title="voltar"
                />
            </a>

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

                            <input 
                                id="imgDishes" 
                                type="file" 
                            />
                        </label>
                    </ImgDishes>

                    <p>Nome</p>
                    <Input placeholder="Ex.: Salada Ceasar" />

                    <SelectCategory>
                        <p>Categoria</p>
                        <select 
                        >
                            <option value="1">
                                Refeição
                            </option>
                            <option value="2">
                                Pratos Principais
                            </option>

                        </select>
                        
                    </SelectCategory>

                    <p>Ingredientes</p>
                    <Ingredients value="Pão Naan"/>
                    <Ingredients 
                        isNew 
                        placeholder="Adicionar"
                    />
                    
                </Form>
            </main>

        </Container>
    );
}