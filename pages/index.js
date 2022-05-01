// Misc
import fs           from 'fs';
import path         from 'path';
import matter       from 'gray-matter';
import { motion }   from 'framer-motion';
// Utils
import {
	projectsFilePaths,
	PROJECTS_PATH
} from '../utils/mdxUtils';
// Components
import MainLayout   from 'components/layout/MainLayout';
import ProjectsList from 'components/projects/ProjectsList';

const indexVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: 'easeInOut',
			staggerChildren: 0.6,
		},
	},
};

export default function Home({ allProjectsData }) {

	console.log(allProjectsData);
	return (
		<MainLayout title="Homepage">
			<motion.div variants={indexVariant} initial="hidden" animate="visible">
				{/* Intro */}
				<header>
					<motion.h1
						variants={indexVariant}
						className="text-white mt-12 mb-10 md:mt-24 md:mb-16 text-center text-2xl mx-auto"
					>
						Hello! My name is{' '}
						<span className="font-custom text-3xl text-red-400 tracking-wide leading-tight">
							Thomas
						</span>
						, I am a{' '}
						<span className="font-custom text-3xl text-red-400 tracking-wide leading-tight">
							{' '}
							front-end developer
						</span>{' '}
						and used to be a graphic designer. Here is a selection of my work:
					</motion.h1>
				</header>
				{/* Projects List */}
				<motion.main variants={indexVariant}>
					<ProjectsList
						allProjectsData={allProjectsData}
					/>
				</motion.main>
			</motion.div>
		</MainLayout>
	);
}

export async function getStaticProps() {
	const allProjectsData = projectsFilePaths.map((filePath) => {
		const projectSource = fs.readFileSync(path.join(PROJECTS_PATH, filePath));

		const {
			content,
			data: {
				order,
				title,
				type
			},
		} = matter(projectSource);

		return {
			order,
			content,
			type,
			title,
			id: filePath.replace(/\.mdx?$/, '')
		};
	});

	// Sort projects by order defined in mdx files
	allProjectsData.sort((a, b) => a.order - b.order);

	return {
		props: {
			allProjectsData
		}
	};
}
