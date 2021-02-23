import React from "react";

import { Container } from "./styles";

function NavBar() {
  return (
    <Container>
      <img className="logo" src="/images/Vector.png" alt="vector" />
      <form className="searchBox">
        <img src="/images/searchbtn.png" alt="search" />
        <input type="text" placeholder="Pesquisar" />
        <img src="/images/searchright.png" alt="vector2" />
      </form>
      <div className="right-menu">
        <img src="/images/searchbtn.png" alt="search" />
        <img src="/images/22.png" alt="search" />
      </div>
    </Container>
  );
}

export default NavBar;
