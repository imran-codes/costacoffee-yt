import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  margin-top: 20px;
`;

export const DrinksContainer = styled.div`
  color: ${(props) => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  flex-flow: wrap;
  margin: auto;
  gap: 10px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  max-width: 650px;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.primary};
    padding: 20px 0;
    align-items: center;
  }
  p {
    text-align: center;
  }
`;

export const SelectContainer = styled(DrinksContainer)`
  select {
    display: inline-block;
    width: 100%;
    height: 56px;
    border: 2px solid rgb(116, 116, 116);
    border-radius: 30px;
    color: rgb(64, 64, 66);
    appearance: none;
    font-size: 18px;
    background-color: rgb(255, 255, 255);
    font-family: "Gotham Book", sans-serif;
    padding: 3px 50px 0px 25px;
    overflow: hidden;
    cursor: pointer;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNCAxMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXRoIGlkPSJhIiBkPSJNMCAwaDEyLjE0M3YxMEgweiIvPgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0ibWF0cml4KC0xLCAwLCAwLCAtMSwgMTEuMDcxNSwgMTEuMDcxNSkiPgogICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICA8cGF0aCBkPSJNIC0yLjkyOCAwLjA3MSBMIDExLjA3MiAwLjA3MSBMIDExLjA3MiAxMS4wNzIgTCAtMi45MjggMTEuMDcyIFoiLz4KICAgIDwvbWFzaz4KICAgIDxwYXRoIGZpbGw9IiM2RDFGMzciIGQ9Ik0gLTIuOTI4IDExLjA3MiBMIDExLjA3MiAxMS4wNzIgTCA0LjA3IDAuMDcxIEwgLTIuOTI4IDExLjA3MiIgbWFzaz0idXJsKCNiKSIvPgogIDwvZz4KPC9zdmc+);
    background-size: 14px 11px;
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) center;
    font-weight: normal !important;
  }

  h5 {
    display: inline-block;
    margin: 0px 30px 10px 0px;
    color: ${(props) => props.theme.primary};
    width: 100px;
    font-size: 1.2rem;
    padding: 5px;
  }
`;
