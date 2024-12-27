import Section from "../components/section";
import Layout from "../components/layout";
import { ArrowUpRight } from "react-feather";

const Colophon = () => {
	return (
		<Layout>
			<Section label='Colophon'>
				<h2>Colophon</h2>
				<ul className='list'>
					<li>
						Built with{" "}
						<a
							className='externalLink'
							href='https://react.dev/'
							target='_blankl'>
							React.js
							<ArrowUpRight />
						</a>{" "}
						by way of{" "}
						<a
							className='externalLink'
							href='https://vite.dev/'
							target='_blankl'>
							Vite
							<ArrowUpRight />
						</a>
						.
					</li>
					<li>
						Fonts used are{" "}
						<a
							className='externalLink'
							href='https://systemfontstack.com/'
							target='_blank'>
							system fonts
							<ArrowUpRight />
						</a>{" "}
						for performance sake.
					</li>
					<li>
						Design heavily inspired by multiple sites on{" "}
						<a
							className='externalLink'
							href='https://deadsimplesites.com/'
							target='_blankl'>
							Dead Simple Sites
							<ArrowUpRight />
						</a>
						.
					</li>
					<li>
						Tooltips provided by{" "}
						<a
							className='externalLink'
							href='https://atomiks.github.io/tippyjs/'
							target='_blank'>
							Tippy.js
							<ArrowUpRight />
						</a>
						.
					</li>
					<li>
						State management is handled by{" "}
						<a
							className='externalLink'
							href='https://zustand-demo.pmnd.rs/'
							target='_blank'>
							Zustand
							<ArrowUpRight />
						</a>
					</li>
					<li>
						Hosting provided by{" "}
						<a
							className='externalLink'
							href='https://www.netlify.com/'
							target='_blank'>
							Netlify
							<ArrowUpRight />
						</a>
						.
					</li>
					<li>
						GDPR-compliant analytics measured by{" "}
						<a
							className='externalLink'
							href='https://clicky.com/'
							target='_blank'>
							Clicky
							<ArrowUpRight />
						</a>
						.
					</li>
				</ul>
			</Section>
		</Layout>
	);
};

export default Colophon;
