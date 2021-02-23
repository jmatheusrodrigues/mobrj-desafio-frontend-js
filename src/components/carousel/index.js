import React from "react";

import { Container, Item, Background, Title, Description } from "./styles";

import NavBar from "../navbar";

function Carousel() {
  return (
    <Container className="relative min-h-carousel-h w-full">
      <div className="absolute inset-0">
        <Background
          className="absolute inset-0 px-3"
          src="/images/Hb6uWq0i4MI.png"
        >
          <NavBar />
          <Title>
            <strong>Lorem</strong> ipsum dolor sit amet, consectetuer
            adipiscing.
          </Title>
          <Description className="color-gray6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
          </Description>
        </Background>
        <div className="absolute left-5 right-5 bottom-5 flex">
          <ol className="flex-1 flex align-middle">
            <li className="active"></li>
            <li></li>
            <li></li>
          </ol>
          <button className="transform hover:scale-110 motion-reduce:transform-none">
            Ver Mais
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Carousel;
