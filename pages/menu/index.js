import Image from "next/image";
import React from "react";
import Header from "../../components/Header";
import { MenuBannerContainer, MenuHeroContent } from "../../components/Menu/styles";
import MenuHeroBanner from "../../public/images/all-menu-hero-image-34573cf8b49b15630eeec1893575ac8b.jpg";
import DrinksResults from "../../components/DrinksResults";

function Menu({ drinksResults }) {
  return (
    <div>
      <Header linear />
      <MenuBannerContainer>
        <Image
          src={MenuHeroBanner}
          width={2000}
          height={1000}
          objectFit="cover"
        />
        <MenuHeroContent>
          <h1>Menu</h1>
          <p>
            Our menus full of the good stuff. Whatever your diet or preferences,
            theres enough choice for everyone.
          </p>
        </MenuHeroContent>
      </MenuBannerContainer>
      <DrinksResults drinksResults={drinksResults} />
    </div>
  );
}

export default Menu;

export async function getServerSideProps() {
  const drinksResults = await fetch("https://costa-api.vercel.app/api/drinks").then(
    (res) => res.json()
  );
  return {
    props: {
      drinksResults,
    },
  };
}
