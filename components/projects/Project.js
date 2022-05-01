// Misc
import Head         from 'next/head';
// Layout
import MainLayout   from './layout/MainLayout';

const Project = ({ children, title }) => {
	return (
		<MainLayout>
			<Head>
				<title className="font-custom text-6xl text-orange-300 leading-tight">
          Drop - {title}
				</title>
			</Head>
			<div className="project">{children}</div>
		</MainLayout>
	);
};

export default Project;
