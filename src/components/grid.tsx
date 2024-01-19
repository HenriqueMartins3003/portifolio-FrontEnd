import Image, { StaticImageData } from "next/image";
import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

interface IProps {
  image: StaticImageData;
  title: string;
  subTitle?: string;
  route: string;
  className?: string;
}

const Grid = ({ image, route, title, subTitle }: IProps) => {
  let defaultClass =
    "container flex flex-col gap-16 h-full bg-secondGray rounded-md";
  if (subTitle == undefined) {
  }
  return (
    <article className={defaultClass}>
      <div className="ml-5 mt-5 cursor-pointer">
        <Image
          src={image}
          alt="Profile Picture"
          className="rounded-full w-[140px] h-[140px] hover:opacity-50"
        />
      </div>
      <Link href={route}>
        <div className="flex flex-col justify-between cursor-pointer ">
          <h3 className="px-5 font-semibold text-3xl text-white">
            {title}
            <span role="img" aria-label="smile" className="pl-3 cursor-pointer">
              😁
            </span>
          </h3>
          <div className="flex justify-between mt-3 ">
            <p className="px-7 text-lg text-white">
              {subTitle}
              <span role="img" aria-label="smile" className="pl-3">
                💻
              </span>
            </p>

            <ChevronDoubleRightIcon className="w-4 h-4 mr-3 text-white hover:text-orange-500" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Grid;
