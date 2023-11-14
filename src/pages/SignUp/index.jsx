import { Container, Form } from './styles';
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import logo from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar");
            }
        });
    }

    return (
        <Container>

            <Form>
                <header>
                    <img src={logo} alt="Logo da Food Explorer" />
                </header>

                <main>
                    <h1>Crie sua conta</h1>
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

                    <Button 
                        className="buttonCreateAccount"
                        title="Criar conta" 
                        onClick={handleSignUp}
                    />

                    <footer>
                        <Link to="/">
                            Já tenho uma conta                   
                        </Link>
                    </footer>
                </main>

            </Form>
        </Container>
    );
}