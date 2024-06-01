import {
	mobile,
	frontend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	sass,
	jobit,
	tripguide,
	threejs,
	expressjs,
	portfolio,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Frontend Developer",
		icon: frontend,
	},
];

const technologies = [
	{ name: "HTML 5", icon: html },
	{ name: "CSS 3", icon: css },
	{ name: "JavaScript", icon: javascript },
	{ name: "TypeScript", icon: typescript },
	{ name: "React JS", icon: reactjs },
	{ name: "Redux Toolkit", icon: redux },
	{ name: "Tailwind CSS", icon: tailwind },
	{ name: "Sass", icon: sass },
	{ name: "Node JS", icon: nodejs },
	{ name: "Express JS", icon: expressjs },
	{ name: "MongoDB", icon: mongodb },
	{ name: "Three JS", icon: threejs },
	{ name: "git", icon: git },
];

const projects = [
	{
		name: "Portfolio",
		description: "My portfolio that I created while practicing threejs and framer-motion",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "threejs",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/",
		project_link: "",
	},
	{
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com/",
		project_link: "",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
		project_link: "",
	},
];

export { services, technologies, projects };
