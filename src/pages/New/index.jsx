import { Container, Form, ImgDishes } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

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

                    <Input placeholder="Ex.: Salada Ceasar" />
                </Form>
            </main>

        </Container>
    );
}