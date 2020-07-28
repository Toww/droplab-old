import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "projects");

export const getSortedProjectsData = () => {
  // Getting files names under projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    //Removing extension to get project id
    const id = fileName.replace(/\.md$/, "");

    // Reading markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    console.log('matterResult: ', matterResult)
    return {
      id,
      ...matterResult.data,
    };
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
};
