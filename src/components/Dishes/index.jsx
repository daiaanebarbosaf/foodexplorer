import { Container, Content } from './styles';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles'

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import { PiPencilSimpleBold } from 'react-icons/pi';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoHeart } from "react-icons/io5";




import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { NumberOfDishes } from '../../components/NumberOfDishes';


export function Dishes({ data, dishId, imgdish, ...rest }){

    const { user } = useAuth();

    const navigate = useNavigate();

      function handleEdit(dishId){
        navigate(`/edit/${dishId}`);
        console.log(dishId)       
    }


    const [iconColor, setIconColor] = useState('white');
    const [currentIcon, setCurrentIcon] = useState(<AiOutlineHeart />);
    
    
    const handleIconClick = () => {
        const newColor = iconColor === 'white' ? '#750310' : 'white';       

        const newIcon = currentIcon.type === AiOutlineHeart ? <IoHeart /> : <AiOutlineHeart />;

        setIconColor(newColor);
        setCurrentIcon(newIcon);
    }

    return(
        <Container>
            <a>

                {
                    [USER_ROLE.CUSTOMER].includes(user.role) &&
                    <div className="favorite">
                        {
                            currentIcon && React.cloneElement(currentIcon, {
                                size: 30,
                                color: iconColor,
                                onClick: handleIconClick,
                            })
                        }
                    </div>

                    
                }
                
            </a>

            <a>

                { 
                    [USER_ROLE.ADMIN].includes(user.role) &&
                    <PiPencilSimpleBold
                        onClick={() => handleEdit(dishId)}
                    />
                }

            </a>
            
            <Content {...rest}>
                <img 
                    src={imgdish} 
                    alt={data.title}
                />

                <p className="pTitle">
                    {data.title}
                    <IoIosArrowForward/>

                </p>
                <p className="pDescription">
                    {data.description}
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