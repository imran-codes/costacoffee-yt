import styled from "styled-components";

export const Container = styled.footer``;

export const ColumnContainer = styled.div`
  background: rgb(181, 17, 68);
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  color: white;
  padding: 10px 5px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 30px;
    padding-top: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  p {
    font-weight: bold;
  }
`;
