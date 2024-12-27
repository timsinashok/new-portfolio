import styles from "./index.module.css";
import { GitHub, Send, Linkedin, Twitter } from "react-feather";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const AppFooter = () => {
	return (
		<footer className={`${styles.footer} section`}>
			<div>
				<p>
					&copy; {new Date().getFullYear()} Ashok Timsina{" "}
					inspired from <a href='https://brianmaierjr.com'>Brian Maier Jr.</a>
				</p>
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
		</footer>
	);
};

export default AppFooter;
