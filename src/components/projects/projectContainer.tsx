import styles from "./index.module.css";

const ProjectContainer = ({ children }: any) => {
	return <div className={styles.projectContainer}>{children}</div>;
};

export default ProjectContainer;
