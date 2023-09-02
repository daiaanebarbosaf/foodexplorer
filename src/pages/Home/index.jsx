import { Container, Banner, BannerText } from './styles';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';
import saladRavanello from '../../assets/dishes/saladRavanello.png';
import spaguettiGambe from '../../assets/dishes/spaguettiGambe.png';
import prugnaPie from '../../assets/dishes/prugnaPie.png';
import peachyPastrie from '../../assets/dishes/peachyPastrie.png';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';


import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';

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

            <Section title="Refeições">
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

            <Section title="Pratos principais">
                <ul>
                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={prugnaPie} 
                            alt="Prato de Prugna Pie" 
                        />

                        <p>
                            Prugna Pie 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 79,97</p>
                    </li>

                    <li>
                        <a href="#">
                            <PiPencilSimpleBold/>
                        </a>

                        <img 
                            src={peachyPastrie} 
                            alt="Prato de Peachy pastrie" 
                        />

                        <p>
                            Peachy pastrie 
                            <IoIosArrowForward/>
                        </p>
                        <p className="pPrice">R$ 32,97</p>
                    </li>
                </ul>
            </Section>

            <Footer />

        </Container>
    );
}