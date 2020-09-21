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
          <a className="w-1/3 font-custom text-left text-3xl md:text-xl text-orange-300 mt-3">
            {/* Left arrow */}
            <svg
              class="w-8 h-8 md:w-5 md:h-5 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            {/* Project name */}
            <span className="hidden md:inline align-middle underline">
              {prevProject.title}
            </span>
          </a>
        </Link>
      ) : (
        <div className="w-1/3"></div>
      )}
      <Link href="/" scroll={false}>
        <a className="font-custom text-center text-xl underline text-orange-300 mt-3 w-1/3">
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
          <a className="w-1/3 font-custom text-right text-xl text-orange-300 mt-3">
            {/* Project name */}
            <span className="hidden md:inline align-middle underline">
              {nextProject.title}
            </span>
            {/* Right arrow */}
            <svg
              class="w-8 h-8 md:w-5 md:h-5 inline ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
