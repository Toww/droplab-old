import Head from "next/head";
import MainLayout from "components/MainLayout";

const About = () => {
  return (
    <MainLayout title="Contact">
      <Head>
        <title>Drop - Contact</title>
      </Head>

      <main>
        <header className="m-0 p-0">
          <h3 className="font-custom text-center text-6xl text-orange-300 leading-tight">
            Want to say hello ?
          </h3>
        </header>
        <section>
          <form
            className="w-3/4 mx-auto mt-6"
            action="https://getform.io/f/760a1a0f-021d-4980-aba7-64b4dfee609f"
            method="POST"
          >
            <div className="inline-block md:w-1/2 md:pr-4">
              <label
                className="block text-orange-300 text-lg mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input required className="mb-8" id="name" name="name"></input>
            </div>
            <div className="inline-block md:w-1/2 md:pl-4">
              <label
                className="w-100 block text-orange-300 text-lg mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="mb-8"
                type="email"
                name="email"
                id="email"
              ></input>
            </div>
            <div>
              <label
                className="block text-orange-300 text-lg mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none resize-none h-32 rounded w-full py-2 px-3 text-gray-700 mb-8"
                required
                type="text"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button
              className="block w-1/2 mx-auto border-2 text-bold border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-gray-800 rounded py-4 px-8"
              type="submit"
            >
              Send
            </button>
          </form>
        </section>
      </main>
    </MainLayout>
  );
};

export default About;
