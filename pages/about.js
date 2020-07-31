import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/MainLayout";

const About = () => {
  return (
    <MainLayout title="About">
      <Head>
        <title>Drop - About</title>
      </Head>

      <main>
        <section>
          <h3>This is the About page</h3>
          <p>
            <Link href="/">
              <a>back to home</a>
            </Link>
          </p>
        </section>
      </main>
    </MainLayout>
  );
};

export default About;
