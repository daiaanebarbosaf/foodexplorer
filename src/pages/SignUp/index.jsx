import { Container, Form } from './styles';
import { useState } from "react";

import logo from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!") 
        }
    }

    return (
        <Container>

            <Form>
                <header>
                    <img src={logo} alt="Logo da Food Explorer" />
                </header>

                <p>Seu nome</p>
                <Input
                    className="inputSignUp"
                    type="text"
                    placeholder="Exemplo: Maria da Silva"
                    onChange={e => setName(e.target.value)} 
                />

                <p className="inputSignUpP">Email</p>
                <Input
                    className="inputSignUp"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                    onChange={e => setEmail(e.target.value)} 
                />
                <p className="inputSignUpP">Senha</p>
                <Input
                    className="inputSignUp"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    onChange={e => setPassword(e.target.value)} 
                   
                />

                <Button title="Criar conta" onClick={handleSignUp} />

                <footer>
                    <a href="#">
                        Já tenho uma conta                   
                    </a>
                </footer>

            </Form>
        </Container>
    );
}