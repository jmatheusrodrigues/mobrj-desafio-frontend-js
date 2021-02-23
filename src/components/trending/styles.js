import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 23px;
  align-items: center;
  justify-content: left;

  strong {
    margin-left: 11px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #999999;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
    width: 30px;
    height: 30px;
    background: linear-gradient(274.13deg, #197acf 0.89%, #1a8de9 98.03%);
    padding: 6px;
    border-radius: 50%;
  }
  h1{
    width: 68%;
  }
  a{
    color: #197ACF;
    margin-left: 5px;
  }
`;
