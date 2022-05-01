// Misc
import { useEffect }    from 'react';
import Head             from 'next/head';
import { motion }       from 'framer-motion';
// Components
import NavBar from './NavBar';

// Framer motion variants settings
const mainVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: 'easeInOut',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

const MainLayout = ({ children, title }) => {
	useEffect(() => {
		// To avoid scrolling before component unmount fading, used scroll{none}
		// on Links and scroll back to top of page on main layout mount
		// (after fade out, and before fade in).
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			className="pb-8"
			variants={mainVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Head>
				<title>Drop - {title}</title>
				<meta name="Description" content="Drop - Personal portfolio" />
			</Head>
			{/* Nav */}
			<NavBar />
			{/* Content */}
			<motion.div variants={mainVariant}>{children}</motion.div>
		</motion.div>
	);
};

export default MainLayout;
