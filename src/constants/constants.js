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
	ecomm,
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
		source_code_link: "https://github.com/arvee0220/portfolio",
		project_link: "",
	},
	{
		name: "clothing store",
		description:
			"Simple e-commerce site I created using react that implements redux, firebase and stripe",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "stripe",
				color: "blue-text-gradient",
			},
			{
				name: "redux",
				color: "violet-text-gradient",
			},
		],
		image: ecomm,
		source_code_link: "https://github.com/arvee0220/clothing-store",
		project_link: "clothingstore512.netlify.app/",
	},
	{
		name: "Face Recognition App",
		description:
			"Project I created to practice fetching API at clarifai.com. This project detects human faces in photos.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "postgreSQL",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/arvee0220/faceRecognition",
		project_link: "face-recognition-fawn.vercel.app",
	},
];

export { services, technologies, projects };
