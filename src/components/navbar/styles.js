import styled from "styled-components";

export const Container = styled.nav`
  @media only screen and (min-width: 975px) {
    .logo {
      display: none;
    }
  }
  margin: 	1.25rem;
  display: flex;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;
  z-index: 10;
  width: 98%;
  .searchBox {
    display: flex;
    margin-left: 10px;
    width: 424px;
    border-bottom: 1px solid #ffffff;

    @media only screen and (max-width: 975px) {
      display: none;
    }
    input {
      background: transparent;
      color: #ffffff;
      width: 100%;
    }
  }
  .right-menu {
    display: flex;
    position: absolute;
    right: 12px;
  }
`;
