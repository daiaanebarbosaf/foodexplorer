import { Container } from './styles';
import logoAdmin from '../../assets/logo-admin.svg'

export function Header(){
    return(
        <Container>
            <img src={logoAdmin} alt="" />
        </Container>
    );
}