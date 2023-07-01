import { Container } from './styles.js';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function Details(){
  return(
    <Container>
      <Header />
      <h1>Hello Word!</h1>

      <Button title="pedir" />
    </Container>
  )
}