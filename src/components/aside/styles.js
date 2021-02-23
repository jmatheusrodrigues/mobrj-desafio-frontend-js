import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  border-right: 0.5px solid #d9d9d9;
  .logo {
    img {
      margin: 0 auto;
    }
  }
  ul {
    margin-top: 26px;
    padding-left: 33px;
    .active {
      position: relative;
      a {
        color: #1a8de9;
      }
      ::after {
        width: 4px;
        height: 100%;
        position: absolute;
        right: 0px;
        background: linear-gradient(274.13deg, #197acf 0.89%, #1a8de9 98.03%);
        border-radius: 8px 0px 0px 8px;
        content: "";
      }
    }
    .blue {
      a {
        display: flex;
        padding-left: 15px;
        color: #197acf;
        align-items: center;
        img {
          margin-left: 5px;
        }
      }
    }

    li {
      margin-top: 10px;
      a {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #999999;
      }
      strong {
        color: #003781;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
      hr {
        margin-top: 23px;
        margin-bottom: 25px;
        margin-right: 33px;
      }
    }
  }
`;
