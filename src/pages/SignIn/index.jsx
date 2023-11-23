import { useState } from 'react';
import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }

    return (
        <Container>

            <Form>
                <header>
                    <img src={logo} alt="Logo da Food Explorer" />
                </header>

                <main>
                    <h1>Faça login</h1>
                    <p>Email</p>
                    <Input
                        id="inputSignIn"
                        type="text"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)} 
                        
                    />
                    <p className="inputSignInP">Senha</p>
                    <Input
                        id="inputSignIn"
                        type="password"
                        placeholder="No mínimo 6 caracteres" 
                        onChange={e => setPassword(e.target.value)} 
                        
                    />

                    <Button 
                        className="buttonEnter" 
                        title="Entrar" 
                        onClick={handleSignIn}
                        required
                    />

                    <footer>
                        <Link to="/register">
                            Criar uma conta                    
                        </Link>
                    </footer>
                </main>
            </Form>
        </Container>
    );
}