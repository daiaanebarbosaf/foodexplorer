import { Container, Banner, BannerText, Section } from './styles';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';
import saladRavanello from '../../assets/dishes/saladRavanello.png';
import spaguettiGambe from '../../assets/dishes/spaguettiGambe.png';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';


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
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={saladRavanello} 
                            alt="Prato de Salada Ravanello" 
                        />

                        <p>
                            Salada Ravanello 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 49,97</p>
                    </li>

                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={spaguettiGambe} 
                            alt="Prato de Spaguetti Gambe" 
                        />

                        <p>
                            Spaguetti Gambe 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 79,97</p>
                    </li>
                </ul>
            </Section>

            <Footer />

        </Container>
    );
}