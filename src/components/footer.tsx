import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <p className="flex text-white pt-2">
        Feito por Henrique Martins
        <span className="my-auto hover:text-red-900">
          <HeartIcon className="h-3 w-3 ml-1" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;
