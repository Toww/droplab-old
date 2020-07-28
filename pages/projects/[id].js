import { getAllPostIds, getProjectData } from "../../lib/projects";
import Head from "next/head";

export default function Project({ projectData }) {
  return (
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h2>{projectData.title}</h2>
        <p>{projectData.id}</p>
        <p>{projectData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
