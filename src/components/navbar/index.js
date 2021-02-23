import React from "react";

import { Container } from "./styles";

function NavBar() {
  return (
    <Container>
      <img className="logo" src="/images/Vector.png" alt="vector" />
      <form className="searchBox">
        <img src="/images/search.png" alt="search" />
        <input type="text" placeholder="Pesquisar" />
        <img src="/images/vector (2).png" alt="vector2" />
      </form>
      <div className="right-menu">
        <img src="/images/search.png" alt="search" />
        <img src="/images/Ellipse 22.png" alt="search" />
      </div>
    </Container>
  );
}

export default NavBar;
