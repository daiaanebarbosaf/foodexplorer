import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

import { IoIosArrowBack } from 'react-icons/io';

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

                    <Input placeholder="Ex.: Salada Ceasar" />
                </Form>
            </main>

        </Container>
    );
}