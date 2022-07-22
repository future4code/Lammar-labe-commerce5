import React from 'react';
import { Container } from './styles';

export function Product({ item }) {
  return (
    <Container>
      <img src={item.imageUrl} alt={item.name} />
      <span>{item.name}</span>
    </Container>
  );
}
