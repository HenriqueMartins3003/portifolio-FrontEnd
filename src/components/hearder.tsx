import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/Assets/HM-DEV.png";
import GridContainer from "./gridContainer";

const Hearder = () => {
  return (
    <header className="relative w-full h-20 bg-primaryGray">
      <GridContainer className="flex items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt={"Logo Henrique DEV"}
            width={"70"}
            height={70}
          />
        </Link>
        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex gap-8 text-lg text-slate-200">
            <li>
              <Link href={"/About"}> About</Link>
            </li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </nav>
      </GridContainer>
    </header>
  );
};

export default Hearder;