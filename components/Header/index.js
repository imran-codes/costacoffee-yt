import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Container,
  LogoContainer,
  MenuLinksContainer,
  IconsContainer,
} from "./styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Header({ linear, addColor }) {
  return (
    <Container gradient={linear} addColor={addColor}>
      <LogoContainer>
        <Link href="/">
          <Image
            src="https://images.ctfassets.net/royi30b2qd26/SZIATN0hhrEmrbdovq1qb/da0553b0aa6d11b04945a1943c6ded49/costa-coffee-logo__1_.png?w=456&h=174&q=100"
            width={150}
            height={150}
            objectFit="contain"
          />
        </Link>
      </LogoContainer>
      <MenuLinksContainer>
        <Link href="/menu">
          <a>Our Menu</a>
        </Link>
        <a>Costa Club</a>
        <p>Order Online</p>
        <p>Behind the beans</p>
        <p>Gift Cards</p>
      </MenuLinksContainer>
      <IconsContainer>
        <Link href="/location">
          <LocationOnIcon />
        </Link>
        <PersonOutlineOutlinedIcon />
      </IconsContainer>
    </Container>
  );
}

export default Header;
