import styled from "styled-components";

export const Container = styled.div`
  padding: 18px 20px;
  border-bottom: 1px solid rgb(221, 221, 221);
  max-width: 600px;
  background-color: ${(props) => props.theme.white};

  :hover {
    background-color: #f4f3ef;
  }

  h3 {
    overflow: hidden;
    font-size: 1.4rem;
    line-height: 26px;
    color: ${(props) => props.theme.primary};
    margin: 0px 46px 0px 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
  }

  p {
    overflow: hidden;
    margin-right: 46px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const FeaturesRow = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
    }
  }
`;

export const IconContainer = styled.div`
  margin-right: 5px;
`;

export const ChevronContainer = styled.div`
  justify-content: flex-end;
`;
