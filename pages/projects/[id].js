import { getAllProjectsIds } from "../../lib/projects";
import { getProjectData } from "../../lib/projects";
import hydrate from "next-mdx-remote/hydrate";
import Link from "next/link";
import MainLayout from "../../components/MainLayout";
import VimeoEmbed from "../../components/VimeoEmbed";

const components = { VimeoEmbed };

export default function Project({ source, frontMatter }) {
  // Using next-mdx-remote to get mdx content and apply components
  // declared in components object
  const content = hydrate(source, { components });
  return (
    <MainLayout title={frontMatter.title}>
      <div className="project">
        <header>
          <h2 className="font-custom text-center text-6xl text-orange-300 leading-tight">
            {frontMatter.title}
          </h2>
          <p className="text-center">{frontMatter.type}</p>
        </header>
        <main>
          <article className="text-lg text-center">{content}</article>
          <div className="h-px bg-orange-300 w-full"></div>

          <Link href="/">
            <h3 className="font-custom text-center text-xl underline text-orange-300 mt-3">
              <a href="/">Back to homepage</a>
            </h3>
          </Link>
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

// Getting project content and frontmatter
export async function getStaticProps({ params }) {
  const { source, frontMatter } = await getProjectData(params.id, components);
  return {
    props: {
      source,
      frontMatter,
    },
  };
}
