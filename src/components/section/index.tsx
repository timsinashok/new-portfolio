import styles from "./index.module.css";

interface SectionProps {
	children: any;
	label: string;
}

const Section = ({ children, label }: SectionProps) => {
	return (
		<section aria-label={label} className={styles.section}>
			<div className='flow'>{children}</div>
		</section>
	);
};

export default Section;
