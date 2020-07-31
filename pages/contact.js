import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default About;
