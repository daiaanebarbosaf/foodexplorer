import { useState, useEffect } from 'react';
import { Container, Content } from './styles.js';

import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Tag } from '../../components/Tag';

import { IoIosArrowBack } from 'react-icons/io';

import saladRavanello from '../../assets/dishes/saladRavanello.png';

export function Details(){
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
                        <Button
                          className="buttoneEditDish"
                          title="Editar prato"
                          onClick={handleEdit}
                        />
              </main>
        }

      </Content>

      <Footer/>
    </Container>
  )
}