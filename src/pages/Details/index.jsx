import { Container } from './styles.js';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function Details(){
  return(
    <Container>
      <Header />

      <Button title="pedir" />
    </Container>
  )
}