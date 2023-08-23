import { Container, Banner, BannerText } from './styles';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';

import { Header } from '../../components/Header';

export function Home(){
    return(
        <Container>
            <Header />

            <Banner className="gradient-container">
                <img src={unparalleledFlavors} alt="Quitutes ao ar" />

                <BannerText>
                    <h1>Sabores inigualáveis</h1>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                </BannerText>
                
            </Banner>

        </Container>
    );
}