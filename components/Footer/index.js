import React from "react";
import { Container, ColumnContainer, Column } from "./styles";

function Footer() {
  return (
    <Container>
      <ColumnContainer>
        <Column>
          <p>About us</p>
          <p>Our coffees</p>
          <p>Our story</p>
          <p>Costa Foundation</p>
          <p>Costa Book Awards</p>
          <p>Policies and reports</p>
          <p>Download our app</p>
          <p>Store updates & safety</p>
        </Column>
        <Column>
          <p>Dietary information</p>
          <p>Nutrition & allergens</p>
          <p>Store dietary information</p>
          <p>Costa Express dietary information</p>
          <p>Coffee in a can dietary information</p>
          <p>Costa at home dietary information</p>
          <p>Branded products dietary information</p>
        </Column>
        <Column>
          <p>Gifting & merchandise</p>
          <p>Gift cards</p>
          <p>Gift cards for business</p>
          <p>Merchandise</p>
        </Column>
        <Column>
          <p>For business</p>
          <p>Costa Business Partners</p>
          <p>Modern Slavery Statement</p>
        </Column>

        <Column>
          <p>Contact us</p>
          <p>FAQs</p>
          <p>Contact us</p>
          <p>Press</p>
          <p>Careers</p>
        </Column>
      </ColumnContainer>
    </Container>
  );
}

export default Footer;
