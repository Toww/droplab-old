import MainLayout from "../components/MainLayout";
import ProjectsList from "../components/ProjectsList";
import { getSortedProjectsData } from "../lib/projects";

export default function Home({ allProjectsData }) {
  return (
    <MainLayout title="Homepage">
      <main>
          <img className="mx-auto" src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif" alt="Lost gif"/>
        <h3 className="text-center font-custom text-5xl text-orange-300 mt-4">
          Searching for something?
        </h3>
        <p className="text-center">
          <a href="/" className="underline">Go back to homepage</a>
        </p>
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
