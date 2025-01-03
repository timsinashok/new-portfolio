import "./App.css";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},

]);

function App() {
	return (
		<div className='app flow'>
			{/* <AnimatedBackground /> */}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
