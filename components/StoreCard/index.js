import React from "react";
import {
  Container,
  TopRow,
  FeaturesRow,
  IconContainer,
  ChevronContainer,
} from "./styles";
import DeliveryIcon from "../../public/images/deliveryIcon.svg";
import ClickAndCollectIcon from "../../public/images/clickncollecticon.svg";
import ServicesIcon from "../../public/images/services.svg";
import NonServicesIcon from "../../public/images/nonservices.svg";
import RightChevron from "../../public/images/right chevron.svg";
import Image from "next/image";

function StoreCard({ name, address, times, clickAndCollect, delivery }) {
  const renderFeatures = () => {
    if (clickAndCollect && delivery)
      return (
        <FeaturesRow>
          <div>
            <Image
              src={DeliveryIcon}
              width={30}
              height={30}
              objectFit="contain"
            />
            <p>Delivery</p>
          </div>
          <div>
            <Image
              src={ClickAndCollectIcon}
              width={30}
              height={30}
              objectFit="contain"
            />
            <p>Click & Collect</p>
          </div>
        </FeaturesRow>
      );
    if (delivery)
      return (
        <FeaturesRow>
          <div>
            <Image
              src={DeliveryIcon}
              width={30}
              height={30}
              objectFit="contain"
            />
            <p>Delivery</p>
          </div>
        </FeaturesRow>
      );
    if (clickAndCollect)
      return (
        <FeaturesRow>
          <div>
            <Image
              src={ClickAndCollectIcon}
              width={30}
              height={30}
              objectFit="contain"
            />
            <p>Click & Collect</p>
          </div>
        </FeaturesRow>
      );
    return null;
  };

  return (
    <Container>
      <TopRow>
        <div>
          <IconContainer>
            <Image
              src={delivery || clickAndCollect ? ServicesIcon : NonServicesIcon}
              width={20}
              height={35}
              objectFit="contain"
            />
          </IconContainer>
          <h3>{name}</h3>
        </div>
        <ChevronContainer>
          <Image
            src={RightChevron}
            width={20}
            height={25}
            objectFit="contain"
          />
        </ChevronContainer>
      </TopRow>
      <p>{address}</p>
      <p>
        <strong>Opening times:</strong> {times}
      </p>
      <div>{renderFeatures()}</div>
    </Container>
  );
}

export default StoreCard;
