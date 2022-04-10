import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const SearchResultsContainer = styled.div``;

export const MapContainer = styled.div`
  flex: 0.6;
`;

export const SearchBarContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin: 10px;
  border-radius: 30px;
  border: 1px solid rgb(221, 221, 221);
  max-width: 500px;
  padding-left: 15px;
  cursor: pointer;

  input {
    flex: 1;
    outline: none;
    border: none;
    padding: 10px;
    font-size: 1rem;
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    border-radius: 0px 30px 30px 0px;
    height: 100%;
    width: 20%;
    padding: 8px;

    :hover {
      background-color: ${(props) => props.theme.buttonHover};
    }
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 600px;
  flex: 0.4;

  ::-webkit-scrollbar {
    display: none;
  }
`;
