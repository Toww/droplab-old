import { useCallback, useContext } from "react";
import Link from "next/link";
import CursorImage from "./CursorImage";
import { CursorImageContext } from "contexts/CursorImageContext";

const ProjectsList = ({ allProjectsData }) => {
  const [, setCursorImage] = useContext(CursorImageContext);

  const toggleCursorImage = useCallback((id) => {
    // If there is no id defined then we change active but not the src
    if (id === undefined) {
      setCursorImage(({ active, src }) => ({ active: !active, src }));
    } else {
      // If id is defined, change active and give the id to modify thumbnail src accordingly
      setCursorImage(({ active }) => ({
        active: !active,
        src: `img/thumbnails/${id}.png`,
      }));
    }
  });

  return (
    <section>
      <CursorImage />
      <ul className="mt-2 project-list">
        {allProjectsData.map(({ id, type, title }) => (
          <li
            key={id}
            className="project-line"
            onMouseEnter={() => toggleCursorImage(id)}
            onMouseLeave={() => toggleCursorImage()}
            // Added onClick to avoid issues with page change
            onClick={() => toggleCursorImage()}
          >
            <Link href="/projects/[id]" as={`/projects/${id}`}>
              <a className="p-0 m-0">
                <h2 className="lg:inline-block font-custom text-6xl text-orange-300 leading-none">
                  {title}
                </h2>
                <p className="lg:inline-block mt-2 lg:mt-0 lg:ml-3 leading-tight">
                  {type}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsList;
