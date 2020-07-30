import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Drop - Contact</title>
      </Head>

      <main>
        <section>
          <h3>This is the Contact page</h3>
          <p>
            <Link href="/">
              <a>back to home</a>
            </Link>
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default About;
