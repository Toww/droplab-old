import Link from "next/link";

const ProjectsNavLinks = ({ prevProject, nextProject }) => {
  return (
    <div className="flex justify-between">
      {/* if there is a previous project, shows the link */}
      {prevProject ? (
        <Link
          href="/projects/[id]"
          as={`/projects/${prevProject.id}`}
          scroll={false}
        >
          <a className="w-1/3 font-custom text-left text-xl text-orange-300 mt-3">
            {"< "}
            <span className="underline">{prevProject.title}</span>
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
            <span className="underline">{nextProject.title}</span>
            {" >"}
          </a>
        </Link>
      ) : (
        <div className="w-1/3"></div>
      )}
    </div>
  );
};

export default ProjectsNavLinks;
