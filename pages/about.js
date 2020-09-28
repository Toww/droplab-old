import Link from "next/link";
import Head from "next/head";
import MainLayout from "components/layout/MainLayout";

const About = () => {
  return (
    <MainLayout title="About">
      <Head>
        <title>Drop - About</title>
      </Head>

      <header>
        <h2 className="font-custom text-center text-5xl md:text-6xl text-orange-300 leading-none">
          About
        </h2>
      </header>
      <main>
        <section>
          <p className="mx-auto text-lg md:px-4 text-center leading-relaxed">
            Hello again! I switched jobs from graphic design to front-end
            development around a year ago, and always have been coding on the
            side for smaller personal or work-related projects. I also love
            music and worked on a few podcasts for Piñata Radio.
          </p>
          <p className="mx-auto mt-6 text-lg px-4 text-center">
            Feel free to reach me through the{" "}
            <Link href="/contact">
              <a className="font-custom underline text-xl">
                contact
              </a>
            </Link>{" "}
            page!
          </p>

          <div className="w-50% flex justify-center align-center text-orange-300 mt-6">
            {/* Github*/}
            <a
              className="block"
              href="https://github.com/Toww"
              aria-label="GitHub link"
            >
              <svg
                className="w-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>GitHub Logo</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* Linkedin */}
            <a
              className="block"
              href="https://www.linkedin.com/in/thomas-guilmin-85572159"
              aria-label="LinkedIn link"
            >
              <svg
                className="w-12 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <title>LinkedIn Logo</title>

                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default About;
