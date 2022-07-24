import React, { useCallback } from 'react';
import { Container, Title, Label, Input } from './styles';

export function Filtro({ setFilter }) {
  const handleChange = useCallback(({ target }) => {
    setFilter(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  }, [setFilter])

  return (
    <Container>
      <Title>
        Filtros
      </Title>

      <Label htmlFor="name-filter">
        Buscar por nome:
        <Input
          id="name-filter"
          name="name"
          type="text"
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="min-value-filter">
        Valor mínimo:
        <Input
          id="min-value-filter"
          name="minValue"
          type="number"
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="max-value-filter">
        Valor máximo:
        <Input
          id="max-value-filter"
          name="maxValue"
          type="number"
          onChange={handleChange}
        />
      </Label>
    </Container>
  );
}
