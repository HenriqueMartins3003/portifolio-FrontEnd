import React from "react";
import ResumeComponent from "@/components/resume";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="flex max-h-full justify-between gap-4">
      <div className="w-3/5">
        <section className="border-2 rounded-md min-w-full bg-secondGray flex flex-col justify-center mx-4 text-white mt-7">
          <div className="flex flex-col gap-y-2 ml-5">
            <h2 className="text-5xl my-4">Contatos</h2>
            <ul>
              <li className="flex mb-2">
                <DevicePhoneMobileIcon className="w-6 h-6 flex text-orange-500 mr-2" />
                (11) 97458-2362
              </li>
              <li className="flex mb-2">
                <EnvelopeIcon className="w-6 h-6 flex text-orange-500 mr-2" />
                <Link href={"mailto:henriquemartins3003@hotmail.com"}>
                  henriquemartins3003@hotmail.com
                </Link>
              </li>
              <li className="flex mb-2">
                <ComputerDesktopIcon className="w-6 h-6 flex text-orange-500 mr-2" />
                <Link href={"https://github.com/HenriqueMartins3003"}>
                  https://github.com/HenriqueMartins3003
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-2 ml-5">
            <h2 className="text-5xl my-4">Formação</h2>
            <p>
              <span className="flex">
                Análise e Desenvolvimento de Sistemas <br /> FIAP | 2013 - 2014
              </span>
              <span className="flex">
                Colégio Técnico de Informática Colegio <br /> Tableau | 2010 -
                2012
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-y-2 ml-5">
            <h2 className="text-5xl my-4">Certificados</h2>
            <p>
              <span className="flex">Denvolvimento Web - CoderHouse</span>
              <span className="flex">JavaScript - CoderHouse</span>
              <span className="flex">React - CoderHouse</span>
              <span className="flex">Certificado FCE - Ingles Avançado</span>
            </p>
          </div>
          <div className="flex flex-col gap-y-2 ml-5 mb-5">
            <h2 className="text-5xl my-4">Línguas</h2>
            <p>
              <span>Inglês Fluente</span>
            </p>
          </div>
        </section>
      </div>
      <ResumeComponent />
    </div>
  );
};

export default Resume;
