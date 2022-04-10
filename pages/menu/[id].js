import Image from "next/image";
import React from "react";
import { Container, ImageContainer, TextContainer } from "../../components/Menu/styles";

function DrinksInformation({ drinkResults }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={drinkResults.largeImgUrl} width={1000} height={1000} />
      </ImageContainer>

      <TextContainer>
        <h1>{drinkResults.name}</h1> <p>{drinkResults.description}</p>
        <p>
          Check the <strong>Costa Coffee app</strong> to see if it's available
          at your local Costa store.
        </p>
      </TextContainer>
    </Container>
  );
}

export default DrinksInformation;

export async function getStaticPaths() {
  const res = await fetch("https://costa-api.vercel.app/api/drinks");
  const drinkData = await res.json();

  const paths = drinkData.map((drink) => ({
    params: { id: String(drink.id) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const drinkResults = await fetch(
    `https://costa-api.vercel.app/api/drinks/${id}`
  ).then((res) => res.json());

  return {
    props: {
      drinkResults,
    },
    revalidate: 100,
  };
}
