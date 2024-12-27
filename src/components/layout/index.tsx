import AppFooter from "../app-footer";
import AppHeader from "../app-header";

const Home = ({ children }: any) => {
	return (
		<div className='container'>
			<AppHeader 
			hideIntro={false}
			/>
			<main>{children}</main>
			<AppFooter />
		</div>
	);
};

export default Home;
