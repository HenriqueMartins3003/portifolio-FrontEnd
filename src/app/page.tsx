import Grid from "@/components/grid";
import Stacks from "@/components/stacks";
import profilePic from "../../public/Assets/profile-pic (2).png";
import gitHubPicture from "../../public/Assets/iconmonstr-github-3.svg";
import resume from "../../public/Assets/reshot-icon-profile-KZ62Q3P9FW.svg";

export default function Home() {
  return (
    <main className="container min-h-[80vh] grid grid-cols-4 gap-4 px-5">
      <div className="col-span-2">
        <Grid
          image={profilePic}
          route="/About"
          title="Oi eu sou o Henrique Martins 😃"
          subTitle="Desenvolvedor FullStack 💻"
          className="col-span-2"
        />
      </div>

      <Grid
        image={resume}
        route="/Resume"
        title="Meu CV 📄"
        subTitle="Um pouco das minhas experiências 🤘🏼"
      />

      <Grid
        image={gitHubPicture}
        route="/GitHub"
        title="GitHub 🚀"
        subTitle="Conheça um pouco dos meus projetos ⭐"
      />

      <div className="col-span-4">
        <Stacks />
      </div>
    </main>
  );
}
