import { useState, useEffect } from 'react';
import { Container, Content } from './styles.js';


import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { PiReceipt } from 'react-icons/pi';

import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Tag } from '../../components/Tag';
import { NumberOfDishes } from '../../components/NumberOfDishes';

import { IoIosArrowBack } from 'react-icons/io';

export function Details(){
  const { user } = useAuth();

  const [data, setData] = useState(null);
  const [dishes, setDishes] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleEdit(){
    navigate(`/edit/${params.id}`);
  }


  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  return(
    <Container>
      <Header />

      <Content>
        <a className="back">
          <IoIosArrowBack/>
          <ButtonText
            title="voltar"
            onClick={handleBack}
          />
        </a>

        {
          data &&
              <main>
                  <div className="dishDescription">
                      <img 
                        src={`${api.defaults.baseURL}/files/${data.imgdish}`} 
                        alt="Prato de Salada Ravanello" 
                      />
          
                      <h1>
                        {data.title}
                      </h1>
                                    
                      <p >
                        {data.description}
                      </p>
                    </div>

                    {
                      data.tags &&
                      <div className="tags">
                        {
                          data.tags.map(tag => (
                            <Tag 
                              key={String(tag.id)}
                              title={tag.name}
                            />

                          ))
                        }
                      </div>
                    }

                    {
                      [USER_ROLE.ADMIN].includes(user.role) &&
                      <Button
                        className="buttonEditDish"
                        title="Editar prato"
                        onClick={handleEdit}
                      />
                    }  

                    {
                      [USER_ROLE.CUSTOMER].includes(user.role) &&
                      <>
                        <div className="orderInformation">
                          <NumberOfDishes number="01"/>
                            <Button
                              className="buttoneOrderDish"
                              title={`pedir ∙ R$ ${data.price}`}
                              icon={PiReceipt}
                              onClick={handleEdit}
                            />
                        </div>
                      </>
                    }                     
              </main>
        }

      </Content>

      <Footer/>
    </Container>
  )
}