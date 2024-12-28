import Layout from "../components/layout";
import Project from "../components/projects/project";
import ProjectContainer from "../components/projects/projectContainer";
import Section from "../components/section";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { useState } from 'react';
import AnimatedBackground from "../components/BG/Animatedbackground";


const projects = [
	{
	  name: 'Spexy',
	  description: 'Intelligent platform recommending eyeglasses based on face shape.',
	  href: 'https://github.com/timsinashok/spexy',
	  type: 'Web',
	  featured: true,
	  imageSrc: '/assets/images/spexy.png',
	  isImageLeft: true,
	  deployment: 'https://spexy-frontend-159238452229.us-central1.run.app/'
	},
	{
		name: 'Assignment',
		description: 'Web-based app for personalized assignments using GPT-like models.',
		href: 'https://github.com/timsinashok/assignmeant-mvp',
		imageSrc: '/assets/images/assignmeant.png',
		type: 'Web',
		featured: true,
		isImageLeft: false,
	},
	{
		name: 'Autopark',
		description: 'A smart parking system for VIAM based Rover using Computer Vision',
		href: 'https://147colors.com',
		type: 'Robotics and IoT',
		featured: true,
		imageSrc: '/assets/images/autopark.png',
		isImageLeft: true,
	  },
	{
	  name: 'Triggered AI',
	  description: 'Chrome extension scanning webpages for triggering content using AI.',
	  href: 'https://github.com/timsinashok/Trigger-AI',
	  type: 'AI/ML',
	  imageSrc: '/assets/images/triggered-ai.png',
	  featured: false,
	  isImageLeft: false,
	},
	{
	  name: 'Oh My LaTeX',
	  description: 'React app converting plain text to LaTeX format with API integration.',
	  href: 'https://github.com/timsinashok/Oh-My-LaTeX',
	  imageSrc: '/assets/images/oh-my-latex.png',
	  type: 'Web',
	  featured: false,
	  isImageLeft: true,
	},
	{
	  name: 'PhiloSloppy',
	  description: 'Project refining LLM models for engaging philosophical dialogues.',
	  href: 'https://github.com/timsinashok/PhiloSloppy',
	  imageSrc: '/assets/images/philosloppy.png',
	  type: 'AI/ML',
	  featured: true,
	  isImageLeft: false,
	},
	{
	  name: 'Data Karkhana',
	  description: 'Hybrid file-sharing system based on Client-Server and P2P models.',
	  href: 'https://github.com/timsinashok/data_karkhana',
	  imageSrc: '/assets/images/datakarkhana.png',
	  type: 'Misc',
	  featured: false,
	  isImageLeft: true,
	},
	{
	  name: 'Heal-Di',
	  description: 'Django apps for appointment scheduling, medical records, and user management.',
	  href: 'https://github.com/timsinashok/heal-diapp',
	  imageSrc: '/assets/images/spexy.png',
	  type: 'Web',
	  featured: false,
	  isImageLeft: false,
	},
	{
	  name: 'Nocturnal Seizure Detector',
	  description: 'Wearable watch detecting nocturnal seizures using accelerometer data.',
	  href: 'https://github.com/timsinashok/nocturnal-seizure-detector',
	  imageSrc: '/assets/images/seizure-m5.jpg',
	  type: 'Robotics and IoT',
	  featured: false,
	  isImageLeft: true,
	},
	{
	  name: 'Hidden Plate',
	  description: 'Program obscuring vehicle number plates in images using YOLOv8.',
	  href: 'https://github.com/timsinashok/hidden-plate',
	  type: 'AI/ML',
	  imageSrc: '/assets/images/hidden-plate.png',
	  featured: false,
	  isImageLeft: false,
	},
	{
	  name: '11-11',
	  description: 'Experimental trojan app disguised as a camera, replicating files exponentially.',
	  href: 'https://github.com/timsinashok/11-11',
	  imageSrc: '/assets/images/11-11.png',
	  type: 'Misc',
	  featured: false,
	  isImageLeft: true,
	},
  ];
  
  
const techLogos = [
    '/assets/logo/python.png',
    '/assets/logo/c++.png',
    '/assets/logo/js.png',
	'/assets/logo/django.png',
	'/assets/logo/tensorflow.png',
	'/assets/logo/pytorch.png',
	'/assets/logo/mern.png',
	'/assets/logo/css.png',
	'/assets/logo/html.png',
	'/assets/logo/flask.png',
	'/assets/logo/arduino.png',
	'/assets/logo/fastapi.png',
	'/assets/logo/terminal.png',
	'/assets/logo/bash.png',
	'/assets/logo/linux.png',
	'/assets/logo/postgresql.png',
  ];

const Home = () => {
	const [filter, setFilter] = useState('Featured Projects');

	// const filteredProjects = filter === 'All Projects'
	// 	? projects
	// 	: projects.filter(project => project.type === filter);
	const filteredProjects = filter === 'Featured Projects'
    ? projects.filter(project => project.featured)
    : filter === 'All Projects'
    ? projects
    : projects.filter(project => project.type === filter);

	return (
		<Layout>
		<AnimatedBackground 
        imagePaths={techLogos}
        size={64} // Optional: customize the size of the images
      	/>
		<Section label='Projects'>
			<ProjectContainer>
				<h1 className={styles.h1}>Personal Projects</h1>
				<div className={styles.headerContainer}>
				<div className={styles.navContainer}>
				<nav className={styles.nav}>
					<ul>
					<li>
					<li>
						<NavLink
							to='/'
							onClick={() => setFilter('Featured Projects')}
							className={filter === 'Featured Projects' ? styles.activeNavLink : ''}
						>
							Featured Projects
						</NavLink>
					</li>
						</li>
						<li>
						<NavLink
							to='/'
							onClick={() => setFilter('AI/ML')}
							className={filter === 'AI/ML' ? styles.activeNavLink : ''}
						>
							AI/ML
						</NavLink>
						</li>
						<li>
						<NavLink
							to='/'
							onClick={() => setFilter('Web')}
							className={filter === 'Web' ? styles.activeNavLink : ''}
						>
							Web
						</NavLink>
						</li>
						<li>
						<NavLink
							to='/'
							onClick={() => setFilter('Robotics and IoT')}
							className={filter === 'Robotics and IoT' ? styles.activeNavLink : ''}
						>
							Robotics and IoT
						</NavLink>
						</li>
						<li>
						<NavLink
							to='/'
							onClick={() => setFilter('Misc')}
							className={filter === 'Misc' ? styles.activeNavLink : ''}
						>
							Misc
						</NavLink>
						</li>
						<li>
						<NavLink
							to='/'
							onClick={() => setFilter('All Projects')}
							className={filter === 'All Projects' ? styles.activeNavLink : ''}
						>
							All Projects
						</NavLink>
						</li>
					</ul>
					</nav>
				</div>

				</div>
				{filteredProjects.map((project, index) => (
					<Project
					key={index}
					name={project.name}
					description={project.description}
					githubHref={project.href}
					imageAlt="Image for project"
					imageSrc={project.imageSrc}
					isImageLeft={project.isImageLeft}
					deploymentHref={project.deployment}
					/>
				))}
				</ProjectContainer>
			</Section>
			{/* <Section label='Publications'>
				<h1 className={styles.h1}>Publications</h1>
					<p>
						Coming Soon ...
						
					</p>
			</Section> */}
		</Layout>
	);
};


export default Home;
