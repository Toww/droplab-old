import Link from "next/link";

const ProjectsNavLinks = ({ prevProject, nextProject }) => {
  return (
    <div className="flex justify-between items-center leading-tight">
      {/* if there is a previous project, shows the link */}
      {prevProject ? (
        <Link
          href="/projects/[id]"
          as={`/projects/${prevProject.id}`}
          scroll={false}
        >
          <a className="w-1/3 flex mt-3 justify-start items-center font-custom text-left text-xl text-orange-300">
            {/* Left arrow */}
            <svg
              className="w-8 h-8 md:w-5 md:h-5 mr-2 mt-0 pt-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            {/* Project name */}
            <span className="hidden md:block">
              {prevProject.data.title}
            </span>
          </a>
        </Link>
      ) : (
        <div className="w-1/3"></div>
      )}
      <Link href="/" scroll={false}>
        <a className="font-custom text-center text-xl text-orange-300 mt-3 w-1/3">
          Back to homepage
        </a>
      </Link>
      {/* if there is a next project, shows the link */}
      {nextProject ? (
        <Link
          href="/projects/[id]"
          as={`/projects/${nextProject.id}`}
          scroll={false}
        >
          <a className="w-1/3 flex mt-3 justify-end items-center font-custom text-right text-xl text-orange-300">
            {/* Project name */}
            <span className="hidden md:block">
              {nextProject.data.title}
            </span>
            {/* Right arrow */}
            <svg
              className="w-8 h-8 md:w-5 md:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </Link>
      ) : (
        <div className="w-1/3"></div>
      )}
    </div>
  );
};

export default ProjectsNavLinks;
