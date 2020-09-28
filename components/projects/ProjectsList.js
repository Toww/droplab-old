import { useCallback, useContext } from "react";
import Link from "next/link";
import CursorImage from "components/CursorImage";
import { CursorImageContext } from "contexts/CursorImageContext";

const ProjectsList = ({ allProjectsData }) => {
  const [, setCursorImage] = useContext(CursorImageContext);

  const toggleCursorImage = useCallback((id, title) => {
    // If there is no id defined then we change active status but not the src and title
    if (id === undefined) {
      setCursorImage(({ active, src, title }) => ({
        active: !active,
        src,
        title,
      }));
    } else {
      // If id is defined, change active status and modify thumbnail src accordingly
      setCursorImage(({ active }) => ({
        active: !active,
        src: `img/thumbnails/${id}.png`,
        title,
      }));
    }
  });

  return (
    <section>
      <CursorImage />
      <ul className="project-list">
        {allProjectsData.map(({ id, type, title }) => (
          <li
            key={id}
            className="project-line"
            // On mouse enter and leave toggle Cursor Image and display or remove
            // the project's thumbnail next to the mouse cursor
            onMouseEnter={() => toggleCursorImage(id, title)}
            onMouseLeave={() => toggleCursorImage()}
            // Added a toggle on click to avoid issues with the CursorImageContext's 
            // "active" not toggled on and page change
            onClick={() => toggleCursorImage()}
          >
            <Link href="/projects/[id]" as={`/projects/${id}`} scroll={false}>
              <a className="p-0 m-0">
                <h2 className="lg:inline-block font-custom text-5xl md:text-6xl text-orange-300 leading-none">
                  {title}
                </h2>
                <p className="lg:inline-block mt-1 md:mt-2 lg:mt-0 lg:ml-3 leading-tight">
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
