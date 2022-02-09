import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 24px;
  background-color: rgb(244, 243, 239);
  max-width: 1200px;
  margin-top: 50px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

export const ImageContainer = styled.div`
  width: 50%;
  min-height: 512px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  min-height: 512px;
  display: grid;
  place-items: center;

  div {
    padding: 0 30px;
    max-width: 500px;
  }
`;
