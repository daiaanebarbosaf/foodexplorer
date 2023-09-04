import { Container, Content } from './styles.js';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
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
        </div>

        <div className="tags">
          <Tag title="alface"/>
          <Tag title="cebola"/>
          <Tag title="pão naan"/>
          <Tag title="pepino"/>
          <Tag title="tomate"/>

        </div>
      </Content>

      <Footer/>
    </Container>
  )
}