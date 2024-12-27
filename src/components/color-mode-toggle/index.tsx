import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";
import "./color-mode-toggle.css";
import { Sun, Moon } from "react-feather";

const DarkMode = () => {
	const { isDarkMode, toggleTheme } = useThemeStore();

	useEffect(() => {
		document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
	}, [isDarkMode, toggleTheme]);

	return (
		<div className='dark_mode'>
			<input
				className='dark_mode_input'
				type='checkbox'
				id='darkmode-toggle'
				onChange={toggleTheme}
				defaultChecked={isDarkMode}
			/>
			<label className='dark_mode_label' htmlFor='darkmode-toggle'>
				{isDarkMode ? <Sun /> : <Moon />}
			</label>
		</div>
	);
};

export default DarkMode;
