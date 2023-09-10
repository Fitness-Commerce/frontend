import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 0px 10px;

 &:hover {
   cursor: pointer;
 }

 &:focus {
   outline:none;
 }
`;