import React from 'react';
import {
  Container,
  Header,
  ItemsAmount,
  SortLabel,
  SortInput,
  Divider,
  ItemsContainer
} from './styles';
import { Product } from '../Product';

export function Home({ filter }) {
  return (
    <Container>
      <Header>
        <ItemsAmount>Quantidade de produtos: 6</ItemsAmount>

        <SortLabel htmlFor="sort-input">
          Ordenação
          <SortInput id="sort-input">
            <option>Crescente</option>
            <option>Descrescente</option>
          </SortInput>
        </SortLabel>
      </Header>

      <Divider />

      <ItemsContainer>
        {filter.map(product => (
          <Product key={product.id} item={product} />
        ))}
         <button id='buynow'> Compre agora!</button>

      </ItemsContainer>
    </Container>
  );
}
