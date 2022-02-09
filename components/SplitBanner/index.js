import React from "react";
import { Container, ImageContainer, TextContainer } from "./styles";

function SplitBanner({ image, heading, subText, reverseBanner }) {
  return (
    <Container reverse={reverseBanner}>
      <ImageContainer>
        <img src={image} />
      </ImageContainer>
      <TextContainer>
        <div>
          <h1>{heading}</h1>
          <p>{subText}</p>
        </div>
      </TextContainer>
    </Container>
  );
}

export default SplitBanner;
