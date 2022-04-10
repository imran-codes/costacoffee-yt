import Image from "next/image";
import { Container, ImageContainer } from "../../components/404/styles";
import NotFoundImage from "../../public/images/404.svg";
import Header from "../../components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <Image
            src={NotFoundImage}
            width={500}
            height={500}
            objectFit="contain"
          />
        </ImageContainer>
        <h1>Oh-no! Something went wrong!</h1>
        <p>Sorry, we can't find your page!</p>
      </Container>
    </>
  );
}

export default NotFound;
