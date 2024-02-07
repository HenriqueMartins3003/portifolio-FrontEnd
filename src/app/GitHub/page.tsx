"use client";
import Grid from "@/components/grid";
import ReposList from "@/components/reposList";
import axios from "axios";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Github = () => {
  type Repo = {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    owner: {
      avatar_url: string;
      login: string;
      id: number;
    };
    visibility: string;
    language: string;
  };

  const [listaRepos, setListaRespos] = useState<Repo[]>([]);
  const [img_url, setImg_url] = useState<string | StaticImageData>("");

  const fetchRepos = async (): Promise<Repo[]> => {
    const resp = await axios.get(
      "https://api.github.com/users/HenriqueMartins3003/repos"
    );

    return resp.data;
  };

  useEffect(() => {
    const onMount = async () => {
      const listaRepos = await fetchRepos();
      setListaRespos(listaRepos);
      setImg_url(listaRepos[0].owner.avatar_url);
      console.log("************", img_url);
      console.log(listaRepos);
    };
    onMount();
  }, []);

  return (
    <>
      <div className="flex mt-3 max-h-[90vh]">
        <section className="w-1/2 mt-3">
          <Grid
            image={img_url}
            route={"https://github.com/HenriqueMartins3003/"}
            title="👋  Olá, eu sou o Henrique, um apaixonado por tecnologia!"
            subTitle=" Graduado em Análise e Desenvolvimento de Sistemas , trago comigo a experiência de anos no mundo do desenvolvimento, onde aprendi a importância do planejamento estratégico, organização, colaboração em equipe, conceitos de SCRUM e Clean Code. Atuando com React, JavaScript, HTML, CSS."
          />
        </section>
        <section className="w-1/2 max-h-[80vh] overflow-scroll">
          <h1 className="mb-2 text-4xl text-white font-gamja flex justify-center">
            Meus Repositorios 💻
          </h1>
          {listaRepos.map((repos) => (
            <div key={repos.id} className="overflow-hidden">
              <Link
                href={repos.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReposList name={repos.name} />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Github;
