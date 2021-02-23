import React from "react";

import { Container, Progress } from "./styles";

function Card({ data }) {
  return (
    <Container className="w-full lg:w-card">
      <div className="relative w-full rounded overflow-hidden">
        <img width="100%" src={data.thumbnail} alt={data.tag} />
        {data.percent !== undefined && (
          <Progress percent={data.percent}>
            <div></div>
          </Progress>
        )}

        <div className="info">
          <img src={`/images/${data.type}.png`} alt="icon" />
          <hr /> {data.duration}
        </div>
      </div>
      <div className="m-1">
        <h1>{data.title}</h1>
        <div className="description">
          <span>{data.tag}</span>
          {data.percent !== undefined && (
            <>
              <img src="/images/time.png" alt="" />
              <span> + {data.remaining}</span>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Card;
