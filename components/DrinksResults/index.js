import React, { useState } from "react";
import Drinks from "../Drinks";
import {
  Container,
  DrinksContainer,
  CategoryContainer,
  SelectContainer,
} from "./styles";

function DrinksResults({ drinksResults }) {
  const [filter, setFilter] = useState("all");

  function capitalizeWords(string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  return (
    <Container>
      <SelectContainer>
        <h5>Showing</h5>
        <select onChange={(e) => setFilter(e.target.value.toLowerCase())}>
          <option value="all">All Drinks</option>
          <option value="Coffee">Coffee</option>
          <option value="Hot Chocolate">Hot Chocolate</option>
          <option value="Frostino">Frostino</option>
          <option value="Tea">Tea</option>
        </select>
      </SelectContainer>
      <CategoryContainer>
        <h1>{capitalizeWords(filter)}</h1>
        <DrinksContainer>
          {drinksResults
            ?.filter((item) => item.drinkType.includes(filter))
            ?.map((drink) => (
              <Drinks
                key={drink.id}
                id={drink.id}
                image={drink.url}
                name={drink.name}
                drinkType={drink.drinkType}
                categoryName={drink.categoryName}
                description={drink.description}
              />
            ))}
        </DrinksContainer>
      </CategoryContainer>
    </Container>
  );
}

export default DrinksResults;
