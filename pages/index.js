import MainLayout from "components/MainLayout";
import ProjectsList from "components/ProjectsList";
import { getSortedProjectsData } from "lib/projects";

export default function Home({ allProjectsData }) {
  return (
    <MainLayout title="Homepage">
      <header>
        <h1 className="text-white text-center text-2xl leading-tight">
          Hello! My name is{" "}
          <span className="font-custom text-3xl text-red-400 tracking-wide leading-tight">
            Thomas
          </span>
          , I am a{" "}
          <span className="font-custom text-3xl text-red-400 tracking-wide leading-tight">
            {" "}
            front-end developer
          </span>{" "}
          and used to be a{" "}
          <span className="font-custom text-3xl tracking-wide leading-tight">
            {" "}
            graphic designer
          </span>
          . Here is a selection of my work:
        </h1>
      </header>
      <main>
        <ProjectsList allProjectsData={allProjectsData} />
      </main>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
