import styled from "styled-components";
import { MainBannerContainer, HeroContent } from "../index/styles";

export const MenuBannerContainer = styled(MainBannerContainer)``;

export const MenuHeroContent = styled(HeroContent)`
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 0.5;
  height: 100vh;
  background-color: #f4f3ef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  flex: 0.5;
  padding: 50px 40px;
  background-color: ${(props) => props.theme.white};

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
  }

  p {
    font-size: 1rem;
    margin: 20px 0;
  }
`;
