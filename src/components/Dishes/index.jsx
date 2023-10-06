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

import { Tag } from '../../components/Tag';

export function Dishes({ data, ...rest }){
    return(
        <Container {...rest}>
                <a href="#">
                    <PiPencilSimpleBold/>
                </a>

                <img 
                    src={saladRavanello} 
                    alt="Prato de Salada Ravanello" 
                />

                <p>
                    {data.title}
                    <IoIosArrowForward/>
                </p>
                <p className="pPrice">
                    {data.price}
                </p>
                {
                    data.tags &&
                    <footer>
                        {    
                            data.tags.map(tag => 
                                <Tag
                                    key={tag.id}
                                    title={tag.name}
                                />
                            )
                        }
                    </footer>
                }
        </Container>
    );
}