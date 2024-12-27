import { ArrowUpRight } from "react-feather";
import Section from "../components/section";
import Layout from "../components/layout";

const Uses = () => {
	return (
		<Layout>
			<Section label='Uses'>
				<h2>Uses</h2>
				<p>
					Items I use on a daily basis. Inspired by{" "}
					<a
						className='externalLink'
						href='https://uses.tech'
						target='_blank'>
						uses.tech
						<ArrowUpRight />
					</a>{" "}
					and{" "}
					<a
						className='externalLink'
						href='https://wesbos.com/uses'
						target='_blank'>
						Wes Bos
						<ArrowUpRight />
					</a>
					.
				</p>
			</Section>
			<Section label='Hardware'>
				<h3>Hardware</h3>
				<ul className='list twoCol'>
					<li>Apple 16" Macbook Pro M4</li>
					<li>LG 32" 4k Montior</li>
					<li>LG 27" Ultra HD Montior - Vertical</li> 
					<li>MINDSKSTP Felt Desk Pad</li>
					<li>MINDSKSTP Montior LIght Bar</li>
					<li>Creative Pebble Pro Speakers</li>
					<li>Logitech MX Master Mouse</li>
					<li>Apple Magic Keyboard w/Touch ID</li>
					<li>Apple Air Pods Pro</li>
					<li>Apple Watch SE</li>
					<li>Apple iPhone 13</li>
				</ul>
			</Section>
			<Section label='Software'>
				<h3>Software</h3>
				<ul className='list twoCol'>
					<li>Figma</li>
					<li>Adobe Illustrator</li>
					<li>Adobe Photoshop</li>
					<li>VS Code</li>
					<li>JetBrains Mono Font in VS Code</li>
					<li>Oh My Zsh</li>
					<li>iTerm</li>
					<li>Chrome Browser</li>
					<li>Last Pass</li>
					<li>Dropmark</li>
					<li>Loom</li>
					<li>Pocket</li>
					<li>Slack</li>
					<li>Feedly</li>
					<li>Dropbox</li>
					<li>GitHub</li>
					<li>Spotify</li>
				</ul>
			</Section>
		</Layout>
	);
};

export default Uses;
