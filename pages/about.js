import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>Drop - About</title>
      </Head>

      <h1>This is the about page</h1>
      <p>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </p>
    </div>
  );
};

export default About;
