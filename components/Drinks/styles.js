import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const DrinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 155px;
  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    margin-bottom: 9px;
  }
`;
