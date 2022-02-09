import React, { useState } from "react";
import Header from "../components/Header";
import StoreCard from "../components/StoreCard";
import {
  Container,
  SearchResultsContainer,
  MapContainer,
  SearchBarContainer,
  LeftSideContainer,
} from "./location/styles";
import SearchIcon from "@mui/icons-material/Search";
import Map from "../components/Map";

function Location({ storeResults }) {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <Header />
      <Container>
        <LeftSideContainer>
          <SearchBarContainer>
            <input
              type="text"
              placeholder="Type to search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon />
          </SearchBarContainer>
          <SearchResultsContainer>
            {storeResults
              ?.filter((item) => item.name.toLowerCase().includes(search))
              .map((store) => (
                <StoreCard
                  key={store.id}
                  id={store.id}
                  name={store.name}
                  address={store.address}
                  times={store.times}
                  clickAndCollect={store.clickAndCollect}
                  delivery={store.delivery}
                />
              ))}
          </SearchResultsContainer>
        </LeftSideContainer>
        <MapContainer>
          <Map storeResults={storeResults} />
        </MapContainer>
      </Container>
    </React.Fragment>
  );
}

export default Location;

export async function getServerSideProps(context) {
  const storeResults = await fetch("http://localhost:3000/api/store").then(
    (res) => res.json()
  );
  return {
    props: {
      storeResults,
    },
  };
}
