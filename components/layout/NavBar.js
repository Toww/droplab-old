import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex justify-center mt-10">
      <ul className="flex justify-center items-center">
        <li>
          <Link href="/about">
            <a className="font-custom text-lg">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              id="logo"
              className="font-custom text-3xl font-bold mx-10 text-orange-300"
            >
              Drop
            </a>
          </Link>
        </li>

        <li className="font-custom text-lg">
          <Link href="/contact">
            <a className="font-custom text-lg">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
