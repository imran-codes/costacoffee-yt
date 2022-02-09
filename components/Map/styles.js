import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .mapContainer {
    width: 100%;
    height: 100%;
  }
`;

export const NavigatorContainer = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50px;
  height: 70px;
  width: 70px;
  bottom: 60px;
  right: 40px;
  padding: 10px;
  img {
    color: ${(props) => props.theme.white};
  }
`;
