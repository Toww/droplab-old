import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";

// Get projects folder directory
const projectsDirectory = path.join(process.cwd(), "/projects");

// Get projects Data (used on index page to display project titles)
export const getSortedProjectsData = () => {
  // Get files names under projects folder
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    //Removing file extension to get project id
    const id = fileName.replace(/\.mdx$/, "");

    // Reading markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  // return array of sorted objects
  return allProjectsData.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  });
};

// Getting all projects Ids to be used with getStaticPaths for dynamic routing
export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  // Has to return an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'project-one'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'project-two'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

// Getting a project's data, used on [id].js
export async function getProjectData(id, components) {
  // getting full path to a specific project
  const fullPath = path.join(projectsDirectory, `${id}.mdx`);
  // getting the project content
  const source = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to extract content and metadata separately
  const { content, data } = matter(source);
  // Turn content to mdxSource to be used with next-mdx-remote
  // and include components passed via getStaticProps
  const mdxSource = await renderToString(content, { components, scope: data });

  // Return mdxSource and frontmatter separately
  return {
    source: mdxSource,
    frontMatter: data,
  };
}

// Get frontmatter data of previous project in the list
export function getPrevProject(currentProjIndex) {
  const allProjects = getSortedProjectsData();
  // We return next project in the list
  if (currentProjIndex !== 0) {
    return allProjects[currentProjIndex - 1];
  } else {
    return null;
  }
}

// Get frontmatter data of next project in the list
export function getNextProject(currentProjIndex) {
  const allProjects = getSortedProjectsData();
  // Return next project in the list
  if (currentProjIndex !== allProjects.length - 1) {
    return allProjects[currentProjIndex + 1];
  } else {
    return null;
  }
}
