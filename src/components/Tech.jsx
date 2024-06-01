import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant}>
				<h2 className={styles.sectionHeadText}>Tech Stack</h2>
			</motion.div>
			<div className="flex flex-wrap justify-center gap-10">
				{technologies.map((tech) => (
					<div className="w-28 h-28" key={tech.name}>
						<BallCanvas icon={tech.icon} />
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, "");
