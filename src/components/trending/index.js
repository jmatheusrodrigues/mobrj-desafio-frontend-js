import React from "react";
import Link from "next/link";

import { Container } from "./styles";
import { motion } from "framer-motion"

function Trending() {
  return (
    <>
      <Container className="border-b-2 border-fuchsia-600 lg:border-0 flex">
        <h1 className="hidden lg:block w-screen">Recomendados</h1>

        <img src="/images/vector (1).png" alt="vector" />
        <strong>Em Alta:</strong>
        <button>
          <img src="/images/vector (3).png" alt="vector" />
        </button>
        <Link  href="/">
          <a className="hidden lg:block">Vídeos</a>
        </Link>
        <button>
          <img src="/images/vector (6).png" alt="vector" />
        </button>
        <Link href="/">
          <a className="hidden lg:block">Podcasts</a>
        </Link>
        <button>
          <img src="/images/vector (4).png" alt="vector" />
        </button>
        <Link href="/">
          <a className="hidden lg:block">Artigos</a>
        </Link>
        <button>
          <img src="/images/vector (5).png" alt="vector" />
        </button>
        <Link href="/">
          <a className="hidden lg:block">Trilhas</a>
        </Link>
      </Container>
    </>
  );
}

export default Trending;
