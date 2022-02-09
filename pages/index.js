import Image from "next/image";
import Header from "../components/Header";
import { MainBannerContainer, HeroContent, Terms } from "./index/styles";
import HeroBanner from "../public/images/herobanner.jpg";
import SplitBanner from "../components/SplitBanner";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header linear />
      <MainBannerContainer>
        <Image src={HeroBanner} width={2000} height={1000} />
        <HeroContent>
          <h1>World off, coffee on</h1>
          <h3>Recharge with our great coffee, wherever, whenever</h3>
        </HeroContent>
      </MainBannerContainer>
      <br />
      <SplitBanner
        image="https://images.ctfassets.net/royi30b2qd26/7ncsrwSotCVL9edl4cyGwc/10fe68170187118e95a473adee15d03c/cupid-cooler-696x512.jpg?w=700&h=515&q=100&fm=webp"
        alt="Cooler"
        heading="New Cupids Cooler. Love at first sip."
        subText="Try resisting the charms of our new limited-edition Cupid's Cooler. Sumptuous raspberry cooler, topped with a luxurious light dairy swirl, Belgium chocolate sauce and strawberry sprinkles. Irresistible. Order via Click & Collect with the app or pop in store until the 17th Feb only."
      />
      <br />
      <SplitBanner
        reverseBanner
        image="https://images.ctfassets.net/royi30b2qd26/5rW15tJwJUSDoKLgmnw8n0/5d177968ace991bf89d211db1bb29a72/costa-club-sept-21-buy-4-get-1-free-696x512.jpg?w=696&h=512&q=100&fm=webp"
        alt="Cooler"
        heading="Buy 4 drinks to get 1 free"
        subText="As a member of our Costa Club, when you bring a reusable cup to use, you'll get an extra bean. It's buy 4 to get 1 free** so you'll get to your free drink faster! That's good for your pocket, and the planet. Not a member yet? Download the app here."
      />
      <Terms>
        **See here for full Costa Club membership terms and conditions.
      </Terms>
      <Footer />
    </>
  );
}
