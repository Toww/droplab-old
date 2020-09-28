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
        <h2 className="font-custom text-center text-6xl text-orange-300 leading-none">
          About
        </h2>
      </header>
      <main>
        <section>
          <p className="mx-auto text-lg px-4 text-center leading-relaxed">
            Hello again! I switched jobs from graphic design to front-end
            development around a year ago, and always have been coding on the
            side for smaller personal or work-related projects. I also love
            music and worked on a few podcasts for Piñata Radio.
          </p>
          <p className="mx-auto mt-8 text-lg px-4 text-center">
            Feel free to reach me through the{" "}
            <Link href="/contact">
              <a className="font-custom underline text-orange-300 text-xl">
                contact
              </a>
            </Link>{" "}
            page!
          </p>

          <div className="w-50% flex justify-center align-center text-orange-300 mt-4">
            {/* Github*/}
            <a
              className="block"
              href="https://github.com/Toww"
              aria-label="GitHub link"
            >
              <svg
                className="w-12"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>GitHub Logo</title>
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
              </svg>
            </a>
            {/* Linkedin */}
            <a
              className="block"
              href="https://www.linkedin.com/in/thomas-guilmin-85572159"
              aria-label="LinkedIn link"
            >
              <svg
                className="ml-6 w-10 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
                fill="currentColor"
              >
                <title>LinkedIn Logo</title>
                <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default About;
