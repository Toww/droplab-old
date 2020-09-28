import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="mt-12">
      <ul className="flex justify-center items-center">
        <li className="mt-2">
          <Link href="/about">
            <a className="font-custom text-lg leading-none">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              id="logo"
              className="font-custom text-4xl font-bold mx-10 text-orange-300 leading-none"
            >
              Drop
            </a>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/contact">
            <a className="font-custom text-lg leading-none">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
