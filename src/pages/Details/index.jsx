import { Container } from './styles.js';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';

export function Details(){
  return(
    <Container>
      <Header />

      <Section>
        <Tag title="alface"/>
      </Section>

      <Footer/>
    </Container>
  )
}