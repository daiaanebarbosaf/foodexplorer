import { Container, Content } from './styles.js';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Tag } from '../../components/Tag';

import { IoIosArrowBack } from 'react-icons/io';

import saladRavanello from '../../assets/dishes/saladRavanello.png';

export function Details(){
  return(
    <Container>
      <Header />

      <Content>
        <div className="back">
          <IoIosArrowBack/>
          <ButtonText
            title="voltar"
          />
        </div>

        <div className="dishDescription">
          <img 
            src={saladRavanello} 
            alt="Prato de Salada Ravanello" 
          />

          <h1>
            Salada Ravanello 
          </h1>
                        
          <p >
            Rabanetes, folhas verdes e molho 
            agridoce salpicados com gergelim.
          </p>
        </div>

        <div className="tags">
          <Tag title="alface"/>
          <Tag title="cebola"/>
          <Tag title="pão naan"/>
          <Tag title="pepino"/>
          <Tag title="tomate"/>

        </div>

        <Button
          className="buttoneEditDish"
          title="Editar prato"
        />

      </Content>

      <Footer/>
    </Container>
  )
}