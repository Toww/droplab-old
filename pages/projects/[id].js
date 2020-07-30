import { getAllPostIds, getProjectData } from "../../lib/projects";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title className="font-custom text-6xl text-orange-300 leading-tight">
          Drop - {projectData.title}
        </title>
      </Head>

      <header>
        <h3 className="font-custom text-6xl text-orange-300 leading-tight text-center">
          {projectData.title}
        </h3>
        <p className="text-center">{projectData.type}</p>
      </header>
      <main>
        <article className="text-lg text-center" dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </main>
    </Layout>
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
