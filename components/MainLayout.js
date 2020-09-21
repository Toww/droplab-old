import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

const mainVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const MainLayout = ({ children, title }) => {
  useEffect(() => {
    // To avoid scrolling before unmount fade out, used scroll{none}
    // on Links and scroll back to top of page on main layout mount.
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="pb-8"
      variants={mainVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Head>
        <title>Drop - {title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Drop - Personal portfolio" />
      </Head>
      <nav className="pb-8" className="flex justify-center py-8">
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
                className="font-custom text-5xl font-bold mx-10 text-orange-300"
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
      <motion.div variants={mainVariant}>{children}</motion.div>
    </motion.div>
  );
};

export default MainLayout;
