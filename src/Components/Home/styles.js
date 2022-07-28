import styled from 'styled-components';

export const Container = styled.section`
  border: 1px solid black;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  width: 700px;
  overflow: auto;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ItemsAmount = styled.span``;

export const SortLabel = styled.label``;

export const SortInput = styled.select`
  margin-left: 4px;
`;

export const Divider = styled.hr`
  background-color: #000;
  border: none;
  height: 1px;
  margin: 0 -20px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
`;
