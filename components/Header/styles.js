import styled from "styled-components";

export const Container = styled.nav`
  background: ${(props) =>
    props.gradient
      ? "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))"
      : props.theme.primary};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  width: 100vw;
  top: 0;

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`;

export const LogoContainer = styled.div`
  width: 80px;
  margin-left: 50px;
`;

export const MenuLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
`;

export const IconsContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;

  .MuiSvgIcon-root {
    margin-left: 15px;
    font-size: 2rem;
  }
`;
