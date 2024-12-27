import { ChevronRight } from "react-feather";
import styles from "./index.module.css";

interface ProjectProps {
	name: string;
	description: string;
	githubHref: string;
	imageSrc: string;
	imageAlt: string;
	isImageLeft: boolean;
	deploymentHref?: string;
}

const Project = ({ name, description, githubHref, imageSrc, imageAlt, isImageLeft, deploymentHref }: ProjectProps) => {
	return (
		<div className={`${styles.project} ${isImageLeft ? styles.imageLeft : styles.imageRight}`}>
			{isImageLeft && (
				<div className={styles.projectImage}>
					<img src={imageSrc} alt={imageAlt} />
				</div>
			)}
			<div className={styles.projectContent}>
				<div className={styles.projectText}>
					<h3>{name}</h3>
					<p>{description}</p>
				</div>
				<div className={styles.projectLinks}>
					<a href={githubHref} target='_blank' rel='noopener noreferrer'>
						GitHub
					</a>
					{deploymentHref && (
						<a href={deploymentHref} target='_blank' rel='noopener noreferrer'>
							Go to App
						</a>
					)}
				</div>
				<div className={styles.projectIcon}>
				<a href={githubHref} target='_blank' rel='noopener noreferrer'><ChevronRight className={styles.icon} /></a>
				</div>
			</div>
			{!isImageLeft && (
				<div className={styles.projectImage}>
					<img src={imageSrc} alt={imageAlt} />
				</div>
			)}
		</div>
	);
};

export default Project;
