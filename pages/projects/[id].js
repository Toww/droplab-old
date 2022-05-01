// Misc
import fs             from "fs";
import path           from "path";
import matter         from "gray-matter";
import { MDXRemote }  from "next-mdx-remote";
import { serialize }  from "next-mdx-remote/serialize";
// Utils
import {
   projectsFilePaths,
   PROJECTS_PATH 
  } from "../../utils/mdxUtils";
// Components
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

  return (
    <MainLayout title={frontMatter.title}>
      <div className="project">
        <header>
          {/* Title & type of project */}
          <h2 className="font-custom text-center text-5xl md:text-6xl text-orange-300 leading-none">
            {frontMatter.title}
          </h2>
          <p className="text-center mt-3">{frontMatter.type}</p>
        </header>
        <main>
          {/* Content */}
          <article className="text-lg text-center leading-relaxed">
            <MDXRemote {...source} components={components} />
          </article>
          {/* Separation  */}
          <div className="h-px bg-orange-300 w-full"></div>
          {/* Links */}
          <ProjectsNavLinks
            prevProject={prevProject.data && prevProject}
            nextProject={nextProject.data && nextProject}
          />
        </main>
      </div>
    </MainLayout>
  );
}

// Getting all possible path values from mdx files names
// for Dynamic routing
export async function getStaticPaths() {
  // Remove '.mdx' and returns paths
  const paths = projectsFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}

// Getting props for the project
export async function getStaticProps({ params }) {
  const allProjectsData = projectsFilePaths.map((filePath) => {
    const projectSource = fs.readFileSync(path.join(PROJECTS_PATH, filePath));

    const {
      content,
      data,
    } = matter(projectSource);

    return {
      content,
      data,
      id: filePath.replace(/\.mdx?$/, ""),
    };
  });

  const currentProject  =   allProjectsData.find(proj => proj.id === params.id);
  const prevProject     =   allProjectsData.find(proj => proj.data.order === (currentProject.data.order - 1));
  const nextProject     =   allProjectsData.find((proj) => proj.data.order === currentProject.data.order + 1)

  const mdxSource = await serialize(currentProject.content, {
    mdxOptions: {},
    scope: currentProject.data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: currentProject.data,
      currentProject,
      allProjectsData,
      prevProject: prevProject || {},
      nextProject: nextProject || {}
    },
  };
}
