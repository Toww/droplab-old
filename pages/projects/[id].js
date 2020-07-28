import { getAllPostIds, getProjectData } from "../../lib/projects";

export default function Project({ postData }) {
  return (
    <>
      <h2>{postData.title}</h2>
      <p>{postData.id}</p>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
}
