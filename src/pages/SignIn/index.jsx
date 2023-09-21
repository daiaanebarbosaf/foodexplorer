import { useContext } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import { MyContext } from '../../myContext';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn(){
    const data = useContext(MyContext);
    console.log("MEU CONTEXTO =>", data);

    return (
        <Container>

            <Form>
                <header>
                    <img src={logo} alt="Logo da Food Explorer" />
                </header>

                <p>Email</p>
                <Input
                    id="inputSignIn"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br" 
                />
                <p className="inputSignInP">Senha</p>
                <Input
                    id="inputSignIn"
                    type="password"
                    placeholder="No mínimo 6 caracteres" 
                   
                />

                <Button title="Entrar"/>

                <footer>
                    <Link to="/register">
                        Criar uma conta                    
                    </Link>
                </footer>

            </Form>
        </Container>
    );
}