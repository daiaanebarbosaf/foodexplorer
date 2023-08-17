import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn(){
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
                    <a href="#">
                        Criar uma conta                    
                    </a>
                </footer>

            </Form>
        </Container>
    );
}