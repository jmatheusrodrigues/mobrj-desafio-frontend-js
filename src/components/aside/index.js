import React from "react";
import Link from "next/link";
import { Container } from "./styles";
import { motion } from "framer-motion";
function Aside() {
  return (
    <Container>
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="logo w-full shadow block items-center">
          <img src="/images/nextlogo.png" alt="nextlogo" />
        </div>
        <ul>
          <li className="active">
            <Link href="/">
              <a>
                Início
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Minha Lista</a>
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <strong>NAVEGAR</strong>
          </li>
          <li>
            <Link href="/">
              <a>Treinamentos</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Trilhas</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Podcasts</a>
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <strong>CATEGORIAS</strong>
          </li>
          <li>
            <Link href="/">
              <a>Ferramentas e Sistemas</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Gestão Estratégica</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Produtos</a>
            </Link>
          </li>
          <li className="blue">
            <Link href="/">
              <a>
                Ver todas <img src="/images/arrow-right.svg" alt="arrow" />
              </a>
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <strong>MATERIAL DE APOIO</strong>
          </li>
          <li>
            <Link href="/">
              <a>Ferramentas</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Biblioteca</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Anotações</a>
            </Link>
          </li>
        </ul>
      </motion.div>
    </Container>
  );
}

export default Aside;
