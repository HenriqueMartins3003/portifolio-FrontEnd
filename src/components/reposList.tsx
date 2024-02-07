import React from "react";

type ReposList = {
  name: string;
};
const ReposList = ({ name }: ReposList) => {
  return (
    <>
      <div className="flex items-center border-4 p-5 mt-5 mx-6 hover:border-orange-400">
        <div className="relative inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-slate-200 dark:text-gray-300">
            {name.slice(0, 2)}
          </span>
        </div>
        <h1 className="ml-5 text-2xl text-slate-200">{name} </h1>
      </div>
    </>
  );
};

export default ReposList;
