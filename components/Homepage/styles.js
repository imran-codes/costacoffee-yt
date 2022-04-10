import styled from "styled-components";

export const MainBannerContainer = styled.main`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.white};
  width: 100vw;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
  max-width: 300px;
`;

export const Terms = styled.p`
  padding: 30px;
  text-align: center;
  font-style: italic;
  font-size: 0.8rem;
  line-height: 20px;
  color: gray;
`;
