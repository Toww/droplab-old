import Link from "next/link";

const ProjectsList = ({ allProjectsData }) => {
  return (
    <section>
      <ul>
        {allProjectsData.map(({ id, type, title }) => (
          <li
            key={id}
            className="transition-all duration-200 ease-in-out mb-4 border-solid border-orange-300 border-b-1 hover:border-b-8"
          >
            <Link href="/projects/[id]" as={`/projects/${id}`}>
              <a className="flex justify-start items-center">
                <h3 className="font-custom text-6xl text-orange-300 leading-tight">
                  {title}
                </h3>
                <p className="ml-4">{type}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
