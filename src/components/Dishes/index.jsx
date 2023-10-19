import { Container, Content } from './styles';

import { useNavigate } from 'react-router-dom';


import unparalleledFlavors from '../../assets/unparalleled-flavors.png';
import saladRavanello from '../../assets/dishes/saladRavanello.png';
import spaguettiGambe from '../../assets/dishes/spaguettiGambe.png';
import prugnaPie from '../../assets/dishes/prugnaPie.png';
import peachyPastrie from '../../assets/dishes/peachyPastrie.png';
import espresso from '../../assets/dishes/espresso.png';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';

import { Tag } from '../../components/Tag';


export function Dishes({ data, dishId, ...rest }){

    const navigate = useNavigate();

      function handleEdit(dishId){

        navigate(`/edit/${dishId}`);
    }

    return(
        <Container>
            <a>
                <PiPencilSimpleBold
                    onClick={() => handleEdit(dishId)}
                />
            </a>
            
            <Content {...rest}>
                <img 
                    src={saladRavanello} 
                    alt="Prato de Salada Ravanello" 
                />

                <p>
                    {data.title}
                    <IoIosArrowForward/>
                </p>
                <p className="pPrice">
                    R$ {data.price}
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
            </Content>
        </Container>
    );
}