import {
  getAllProjectsIds,
  getProjectData,
  getNextProject,
  getPrevProject,
} from "../../lib/projects";
import hydrate from "next-mdx-remote/hydrate";
import MainLayout from "../../components/MainLayout";
import VimeoEmbed from "../../components/VimeoEmbed";
import ProjectsNavLinks from "../../components/ProjectsNavLinks";

const components = { VimeoEmbed };

export default function Project({
  source,
  frontMatter,
  prevProject,
  nextProject,
}) {
  // Using next-mdx-remote to get mdx content and apply components
  // declared in components object
  const content = hydrate(source, { components });

  return (
    <MainLayout title={frontMatter.title}>
      <div className="project">
        <header>
          {/* Title & type of project */}
          <h2 className="font-custom text-center text-6xl text-orange-300 leading-tight">
            {frontMatter.title}
          </h2>
          <p className="text-center">{frontMatter.type}</p>
        </header>
        <main>
          {/* Content */}
          <article className="text-lg text-center">{content}</article>
          {/* Separation  */}
          <div className="h-px bg-orange-300 w-full"></div>
          {/* Links */}
          <ProjectsNavLinks
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </main>
      </div>
    </MainLayout>
  );
}

// Getting all possible path values from projects mdx files names
export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

// Getting props fort the project
export async function getStaticProps({ params }) {
  // Get project content and metadata
  const { source, frontMatter } = await getProjectData(params.id, components);

  // Get prev and next project frontmatter object
  // As order starts from 1 and the array of object from 0,
  // we have to subtract 1 to get the good array index
  const prevProject = getPrevProject(frontMatter.order - 1);
  const nextProject = getNextProject(frontMatter.order - 1);
  return {
    props: {
      source,
      frontMatter,
      prevProject,
      nextProject,
    },
  };
}
