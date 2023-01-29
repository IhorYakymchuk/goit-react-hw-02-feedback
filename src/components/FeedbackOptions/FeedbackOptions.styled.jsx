import styled from 'styled-components';

export const Button = styled.button`
  width: 90px;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;

  border: 1px solid rgb(177, 177, 177);
  cursor: pointer;
  background-color: rgb(164, 161, 161);

  &:first-child {
    background-color: rgb(72, 240, 86);
  }
  
  &:last-child {
    background-color: rgb(241, 76, 76);
  }
`;

export const OptionsList = styled.div`
  display: flex;
  gap: 10px;
`;
