import Head from "next/head";
import Aside from "../components/aside";
import Card from "../components/card";
import Trending from "../components/trending";
import Carousel from "./../components/carousel";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([
    {
      title: "Lorem ipsum dolor sit amet, cons...",
      thumbnail: "/images/Bitmap.png",
      duration: "10:45",
      remaining: "4mim",
      percent: 40,
      type: "video",
      tag: "Produtos",
    },
    {
      title: "Sed nonnumy magna aliquam...",
      thumbnail: "/images/Rectangle 4.png",
      duration: "13:20",
      remaining: "8mim",
      percent: 70,
      type: "video",
      tag: "Contact Center",
    },
    {
      title: "Lorem ipsum dolor sit amet, cons...",
      thumbnail: "/images/Bitmap (1).png",
      duration: "12 Slides",
      type: "slide",
      tag: "Estratégia e Modelo de Negócios",
    },
    {
      title: "Lorem ipsum dolor sit amet, cons...",
      thumbnail: "/images/rxpThOwuVgE.png",
      duration: "36:28",
      remaining: "3mim",
      type: "audio",
      tag: "Produtos",
    },
  ]);
  return (
    <>
      <Head>
        <title>Desafio MOBRJ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <main>
          <div className="flex h-screen">
            <div className="h-screen flex-wrap hidden lg:flex lg:min-h-screen lg:flex w-aside">
              <Aside />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
              <motion.div
                initial={{ y: -90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0 }}
              >
                <Carousel />
                <Trending />
                <div className="lg:flex flex-wrap items-stretch m-1 ">
                  {data.map((card, index) => {
                    return(<Card key={index} data={card}/>)
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}
