import { Container } from './styles';

import unparalleledFlavors from '../../assets/unparalleled-flavors.png';
import saladRavanello from '../../assets/dishes/saladRavanello.png';
import spaguettiGambe from '../../assets/dishes/spaguettiGambe.png';
import prugnaPie from '../../assets/dishes/prugnaPie.png';
import peachyPastrie from '../../assets/dishes/peachyPastrie.png';
import espresso from '../../assets/dishes/espresso.png';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

export function Dish(data, ...rest){
    return(
        <Container>
                <img 
                    src={saladRavanello} 
                    alt="Prato de Salada Ravanello" 
                />

                <p>
                    {data.title}
                    <IoIosArrowForward/>
                </p>
                <p className="pPrice">R$ 49,97</p>
                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map(tag => {
                                <span key={tag.id}>
                                    {tag.name}
                                </span>
                            })
                        }
                    </footer>
                }
        </Container>
    );
}