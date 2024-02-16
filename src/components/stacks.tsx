import React from "react";
import js from "../../public/Assets/icons8-js.svg";
import react from "../../public/Assets/icons8-react-js.svg";
import node from "../../public/Assets/icons8-nodejs.svg";
import nextjs from "../../public/Assets/icons8-nextjs.svg";
import express from "../../public/Assets/icons8-express-js.svg";
import ts from "../../public/Assets/icons8-typescript.svg";

import Image from "next/image";

const Stacks = () => {
  return (
    <article className="container flex flex-col gap-12 h-full bg-secondGray rounded-md ">
      <h1 className="text-white text-4xl px-10 py-5 font-semibold">
        Minhas Stacks 🤓
      </h1>

      <div className="container flex justify-around gap-2 ">
        <Image
          src={js}
          alt="simbolo JS"
          className="rounded-full hover:opacity-25"
        />
        <Image
          src={react}
          alt="simbolo React"
          className="rounded-full hover:opacity-25"
        />
        <Image
          src={ts}
          alt="simbolo Typescript"
          className="rounded-full hover:opacity-25"
        />
        <Image
          src={nextjs}
          alt="simbolo NextJS"
          className="rounded-full hover:opacity-25"
        />
        <Image
          src={node}
          alt="simbolo NodeJs"
          className="rounded-full hover:opacity-25"
        />
        <Image
          src={express}
          alt="simbolo Express"
          className="rounded-full hover:opacity-25"
        />
      </div>
    </article>
  );
};

export default Stacks;
