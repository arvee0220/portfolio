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
	threejs,
	expressjs,
	portfolio,
	ecomm,
	restau,
	pubAdv,
	calculator,
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
		project_link: "https://rv0220portfolio.netlify.app",
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
				name: "Sass",
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
		project_link: "https://clothingstore512.netlify.app/",
	},
	{
		name: "Maison De Luxe",
		description: "Restaurant website.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "CSS",
				color: "green-text-gradient",
			},
			{
				name: "Sass",
				color: "violet-text-gradient",
			},
		],
		image: restau,
		source_code_link: "https://github.com/arvee0220/maison_de_luxe",
		project_link: "https://maison-de-luxe.netlify.app/",
	},
	{
		name: "Advice Generator",
		description: "Project I created to practice fetching API.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Sass",
				color: "pink-text-gradient",
			},
		],
		image: pubAdv,
		source_code_link: "https://github.com/arvee0220/adviceGenerator/tree/main",
		project_link: "https://pub-advice.netlify.app/",
	},
	{
		name: "Calculator",
		description:
			"The main branch is the basic use of react useState hook while in context branch I implemented the Software Engineering Principle such as DRY, KISS, Separation of Concerns, Modularity and Encapsulation. I also implement the use of createContext and useContext hook",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Sass",
				color: "violet-text-gradient",
			},
		],
		image: calculator,
		source_code_link: "https://github.com/arvee0220/calculator.git",
		project_link: "https://rv0220-calculator.netlify.app/",
	},
];

export { services, technologies, projects };
