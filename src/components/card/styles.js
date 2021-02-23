import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  .info {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 10.5525px;
    width: 71px;
    height: 20px;
    position: absolute;
    right: 20px;
    bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 10px;
    line-height: 16px;
    color: #197acf;
    hr {
      border: none;
      border-left: 1px solid #197acf;
      height: 11.51px;
      width: 1px;
      margin: 5px;
    }
  }
  .description {
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 12px;
    img{
      margin: 3px;
      width: 11.2px;
      height: 11.32px;
    }
  }
  h1 {
    font-size: 14px;
  }
`;

export const Progress = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 5.54px;
  background: #197acf;
  div {
    width: ${(props) => props.percent}%;
    height: 100%;
    background: #96dcfa;
  }
`;
