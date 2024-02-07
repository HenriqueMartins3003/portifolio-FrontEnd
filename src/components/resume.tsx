import React from "react";

const ResumeComponent = () => {
  return (
    <>
      <section className="justify-center  w-3/5 mx-4">
        <h1 className="text-5xl font-diphylleia text-white text-center my-3">
          EXPERIÊNCIA PROFISSIONAL
        </h1>
        <div className="flex flex-col text-white">
          <p className="text-xl font-bold text-white text-center">
            Estagiário de Desenvolvimento
          </p>
          <span className=" text-center">
            Verisys tecnologia e solucoes s/a <br /> 06/2013 - 02/2015
          </span>

          <ul className="list-disc list-inside space-y-3 mt-3">
            <li>Desenvolvi aplicações WEB com JavaScript,React, HTML e CSS.</li>
            <li>Realizei integrações com bancos de dados MySQL, PostgreSQL.</li>
            <li>Colaborei em equipes ágeis com metodologia SCUM.</li>
            <li>
              Utilizei Git e GitHub para colaborar com outros desenvolvedores.
            </li>
            <li>
              Participei ativamente em reuniões para criação de novas soluções.
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-6 text-white">
          <h1 className="text-5xl font-diphylleia text-white text-center mb-5">
            Skills
          </h1>
          <span className="text-xl font-bold text-center ">FrontEnd</span>
          <hr />

          <ul className="list-disc list-inside space-y-1 mt-3 ml-4">
            <li>HTML5</li>
            <li>CSS</li>
            <li>UX Knowledge</li>
            <li>Figma</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Next13</li>
            <li>Web Components</li>
            <li>Tailwind</li>
            <li>Teste Automatizados(Jest)</li>
          </ul>

          <p className="text-xl font-bold text-center mt-3">BackEnd</p>
          <hr />
          <ul className="list-disc list-inside space-y-1 mt-3 ml-4">
            <li>NodeJs</li>
            <li>NestJs</li>
            <li>Testes Automatizados(Jest)</li>
            <li>MongoDB</li>
            <li>Postgrees</li>
            <li>MySQL</li>
            <li>Docker</li>
            <li>Kubernets</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ResumeComponent;
