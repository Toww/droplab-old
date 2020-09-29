import MainLayout from "components/layout/MainLayout";
import ProjectsList from "components/projects/ProjectsList";
import { getSortedProjectsData } from "lib/projects";
import { motion } from "framer-motion";

// Motion framer variant setting
const indexVariant = {
  hidden: {
    opacity: 0,
    // y: "0.2rem",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.6,
    },
  },
};

export default function Home({ allProjectsData }) {
  return (
    <MainLayout title="Homepage">
      <motion.div variants={indexVariant} initial="hidden" animate="visible">
        {/* Intro */}
        <header>
          <motion.h1
            variants={indexVariant}
            className="text-white mt-12 mb-10 md:mt-24 md:mb-16 text-center text-2xl mx-auto"
          >
            Hello! My name is{" "}
            <span className="font-custom text-3xl text-red-400 tracking-wide leading-tight">
              Thomas
            </span>
            , I am a{" "}
            <span className="font-custom text-3xl text-red-400 tracking-wide leading-tight">
              {" "}
              front-end developer
            </span>{" "}
            and used to be a graphic designer. Here is a selection of my work:
          </motion.h1>
        </header>
        {/* Projects List */}
        <motion.main variants={indexVariant}>
          <ProjectsList allProjectsData={allProjectsData} />
        </motion.main>
      </motion.div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
