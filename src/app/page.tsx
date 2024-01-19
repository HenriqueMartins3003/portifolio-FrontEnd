import Grid from "@/components/grid";
import profilePic from "../../public/Assets/profile-pic (2).png";

export default function Home() {
  return (
    <main className="container min-h-[80vh] grid grid-cols-4 gap-4 px-5">
      <div className="col-span-2">
        <Grid
          image={profilePic}
          route="/About"
          title="Oi eu sou o Henrique Martins"
          subTitle="Desenvolvedor FullStack"
          className="col-span-2"
        />
      </div>

      <Grid image={profilePic} route="/Resume" title="Meu CV" subTitle="" />

      <Grid
        image={profilePic}
        route="/About"
        title="Oi eu sou o Henrique Martins"
        subTitle="Desenvolvedor FullStack"
      />

      <div className="col-span-4">
        <Grid
          image={profilePic}
          route="/About"
          title="Oi eu sou o Henrique Martins"
          subTitle="Desenvolvedor FullStack"
        />
      </div>
    </main>
  );
}
