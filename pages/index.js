import Head from "next/head";
import Link from "next/link";
import { getSortedProjectsData } from "../lib/projects";

export default function Home({ allProjectsData }) {
  return (
    <div className="container">
      <Head>
        <title>Drop - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is the homepage, yay! </h1>
        <p className="text-orange-500">
          Orange <span>blue</span>
        </p>
        <Link href="/about">
          <a>About page</a>
        </Link>
        <section>
          <h2>Projects</h2>
          <ul>
            {allProjectsData.map(({ id, date, title }) => (
              <li key={id}>
                {title} - {date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
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
