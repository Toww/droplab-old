import Link from "next/link";

const ProjectsNavLinks = ({prevProject, nextProject}) => {
  return (
    <div className="flex justify-between">
      {/* if there is a previous project, show a link to it */}
      {prevProject ? (
        <Link href={`/projects/${prevProject.id}`}>
          <a className="w-1/3 font-custom text-left text-xl text-orange-300 mt-3">
            {"< "}
            <span class="underline">{prevProject.title}</span>
          </a>
        </Link>
      ) : (
        <div class="w-1/3"></div>
      )}
      <Link href="/">
        <a className="font-custom text-center text-xl underline text-orange-300 mt-3 w-1/3">
          Back to homepage
        </a>
      </Link>
      {/* if there is a next project, show a link to it */}
      {nextProject ? (
        <Link href={`/projects/${nextProject.id}`}>
          <a className="w-1/3 font-custom text-right text-xl text-orange-300 mt-3">
            <span class="underline">{nextProject.title}</span>
            {" >"}
          </a>
        </Link>
      ) : (
        <div class="w-1/3"></div>
      )}
    </div>
  );
};

export default ProjectsNavLinks;
