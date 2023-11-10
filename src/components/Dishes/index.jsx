import { Container, Content } from './styles';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles'

import { useNavigate } from 'react-router-dom';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai'

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { NumberOfDishes } from '../../components/NumberOfDishes';


export function Dishes({ data, dishId, imgdish, ...rest }){

    const { user } = useAuth();

    const navigate = useNavigate();

      function handleEdit(dishId){
        navigate(`/edit/${dishId}`);
    }

    return(
        <Container>
            <a>
                {
                    [USER_ROLE.ADMIN].includes(user.role) &&
                    <>
                        <PiPencilSimpleBold
                            onClick={() => handleEdit(dishId)}
                        />
                    </>                    
                }

                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <AiOutlineHeart/>
                }
                
                
            </a>
            
            <Content {...rest}>
                <img 
                    src={imgdish} 
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

                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <NumberOfDishes number="01"/>
                }


                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <Button 
                        className="buttonInclude" 
                        title="incluir"
                    /> 
                }


            </Content>
        </Container>
    );
}