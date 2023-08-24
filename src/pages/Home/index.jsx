import { Container, Banner, BannerText, Section } from './styles';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';

import { GoPencil } from 'react-icons/go';


import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

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

            <Section id="meals">
                <h2>Refeições</h2>
                <ul>
                    <li>
                        <GoPencil/>
                    </li>
                </ul>

            </Section>

            <Footer />

        </Container>
    );
}