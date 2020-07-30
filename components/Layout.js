import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-center p-4">
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

export default Layout;
