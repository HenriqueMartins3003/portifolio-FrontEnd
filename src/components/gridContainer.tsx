import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const GridContainer = ({ children, className }: Props) => {
  const defaulClass = "w-full max-w-7xl mx-auto px-3";
  const combinatedClass = twMerge(defaulClass, className);
  return <div className={combinatedClass}>{children}</div>;
};

export default GridContainer;
