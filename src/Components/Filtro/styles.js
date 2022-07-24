import styled from 'styled-components';

export const Container = styled.section`
  align-items: flex-start;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const Label = styled.label`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Input = styled.input`
  padding: 8px;
`;
