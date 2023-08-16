import { Container, Form } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn(){
    return (
        <Container>

            <Form>
                <img src={logo} alt="Logo da Food Explorer" />

                <p>Email</p>
                <Input
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br ou ingredientes" 
                    icon={FiMail}
                />
                <p className="inputSignIn">Senha</p>
                <Input
                    type="password"
                    placeholder="No mínimo 6 caracteres" 
                    icon={FiLock}
                />

                <Button title="Entrar"/>
            </Form>
        </Container>
    );
}