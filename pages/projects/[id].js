import hydrate from "next-mdx-remote/hydrate";
import {
  getAllProjectsIds,
  getProjectData,
  getNextProject,
  getPrevProject,
} from "lib/projects";
import MainLayout from "components/layout/MainLayout";
import VimeoEmbed from "components/projects/VimeoEmbed";
import ProjectsNavLinks from "components/projects/ProjectsNavLinks";

// Prepare an object with every components that are used in mdx files
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
          <h2 className="font-custom text-center text-5xl md:text-6xl text-orange-300 leading-none">
            {frontMatter.title}
          </h2>
          <p className="text-center my-4">{frontMatter.type}</p>
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

// Getting all possible path values from mdx files names
// for Dynamic routing
export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

// Getting props for the project
export async function getStaticProps({ params }) {
  // Get project content and metadata
  const { source, frontMatter } = await getProjectData(params.id, components);

  // Get prev and next projects' frontmatter object
  // As order starts from 1 and the array  from 0,
  // subtract 1 to get the good array index
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
