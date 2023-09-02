import { Container } from './styles.js';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

import { IoIosArrowBack } from 'react-icons/io';

export function Details(){
  return(
    <Container>
      <Header />

      <IoIosArrowBack/>
      <ButtonText
        title="voltar"
      />

      <Section id="tags">
        <Tag title="alface"/>
        <Tag title="cebola"/>
        <Tag title="pão naan"/>
        <Tag title="pepino"/>
        <Tag title="tomate"/>

      </Section>

      <Footer/>
    </Container>
  )
}