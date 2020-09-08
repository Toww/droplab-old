import Head from "next/head";
import Link from "next/link";

const MainLayout = ({ children, title }) => {
  return (
    <div className="pb-8">
      <Head>
        <title>Drop - {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Drop - Personal portfolio" />

      </Head>
      <nav className="flex justify-center py-8">
        <ul className="flex justify-center items-center">
          <li>
            <Link href="/about">
              <a className="font-custom text-lg">About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <h1
                id="logo"
                className="font-custom text-5xl font-bold mx-10 text-orange-300"
              >
                <a href="/">Drop</a>
              </h1>
            </Link>
          </li>

          <li className="font-custom text-lg">
            <Link href="/contact">
              <a className="font-custom text-lg">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default MainLayout;
