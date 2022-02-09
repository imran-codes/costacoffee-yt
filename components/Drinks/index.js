import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, DrinkContainer } from "./styles";

function Drinks({ id, image, name, drinkType, categoryName, description }) {
  return (
    <Link href={`/menu/${id}`}>
      <Container>
        <DrinkContainer>
          <Image src={image} width={148} height={160} objectFit="contain" />
          <p>{name}</p>
        </DrinkContainer>
      </Container>
    </Link>
  );
}

export default Drinks;
