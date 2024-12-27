import styles from "./index.module.css";
import ColorModeToggle from "../color-mode-toggle";
import { GitHub, Linkedin, Send, Twitter } from "react-feather";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface HeaderProps {
	hideIntro: boolean;
  }

const AppHeader = ({ hideIntro }: HeaderProps) => {
	return (
		<header className={`${styles.header} flow`}>
			<div className={styles.headerContainer}>
				<img
					className={styles.avatar}
					src="assets/images/me.jpg"
					alt=''
					height='120'
					width='120'
				/>
				<div className={styles.navContainer}>
					{/* <nav>
						<ul>
							<li>
								<NavLink to='/'>Intro</NavLink>
							</li>
							<li>
								<NavLink to='/uses'>Skills</NavLink>
							</li>
						</ul>
					</nav> */}
					<ColorModeToggle />
				</div>
			</div>
			<div className={styles.headerContentContainer}>
			<div>
				<h1 className={styles.name}>Ashok Timsina</h1>
				<h2 className={styles.title}>innovator, learner and a problem solver</h2>
			</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Tippy content='LinkedIn'>
								<a
									href='https://linkedin.com/in/ashok-timsina'
									target='_blank'>
									<span className='sr-only'>Linkedin</span>
									<Linkedin className={styles.icon} size={20} />
								</a>
							</Tippy>
						</li>
						<li>
							<Tippy content='GitHub'>
								<a
									href='https://github.com/timsinashok'
									target='_blank'>
									<span className='sr-only'>GitHub</span>
									<GitHub className={styles.icon} size={20} />
								</a>
							</Tippy>
						</li>
						<Tippy content='Twitter'>
								<a
									href='https://x.com/timsinashok'
									target='_blank'>
									<span className='sr-only'>GitHub</span>
									<Twitter className={styles.icon} size={20} />
								</a>
							</Tippy>
						<li>
							<Tippy content='Email'>
								<a
									href='mailto:ashoktimsina147181@gmail.com'
									target='_blank'>
									<span className='sr-only'>Contact</span>
									<Send className={styles.icon} size={20} />
								</a>
							</Tippy>
						</li>
					</ul>
				</nav>
			</div>	
			{hideIntro && (		
			<p className={styles.intro}>
				I'm an innovative problem solver specializing in AI/ML and SWE. With a passion for robotic software engineering and computer vision, I am pursuing a Bachelor's degree in Computer Science and Engineering. I have excelled in programming, algorithms, and machine learning, earning recognition for my contributions and achievements in the field.
			</p>
			)}
		</header>
	);
};

export default AppHeader;
