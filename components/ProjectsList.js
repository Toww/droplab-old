import Link from "next/link";

const ProjectsList = ({ allProjectsData }) => {
  return (
    <section>
      <ul className="mt-2">
        {allProjectsData.map(({ id, type, title }) => (
          <li
            key={id}
            className="mb-12 md:mb-8 border-solid border-orange-300 border-b-1 hover:border-b-8 transition-all duration-200 ease-in-out"
          >
            <Link href="/projects/[id]" as={`/projects/${id}`}>
              <a className="p-0 m-0">
                <h2 className="lg:inline-block font-custom text-6xl text-orange-300 leading-none">
                  {title}
                </h2>
                <p className="lg:inline-block mt-2 lg:mt-0 lg:ml-3 leading-tight">{type}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
