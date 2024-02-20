import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	About,
	AdvanceJava,
	CPP,
	CoreJava,
	DSA,
	Dashboard,
	Database,
	Dotnet,
	Error,
	HomeLayout,
	Landing,
	Login,
	Register,
	SDM,
	SingleDayPage,
	WPT,
} from "./pages";
// loaders
import { loader as cppLoader } from "./pages/CPP";
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <Error />,
			},
			{
				path: "advance-java",
				element: <AdvanceJava />,
			},
			{
				path: " cpp/:_id ",
				element: <SingleDayPage />,
			},
			{
				path: "core-java",
				element: <CoreJava />,
			},
			{
				path: "cpp",
				element: <CPP />,
				loader: cppLoader,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "database",
				element: <Database />,
			},
			{
				path: "dsa",
				element: <DSA />,
			},
			{
				path: "dotnet",
				element: <Dotnet />,
			},
			{
				path: "sda",
				element: <SDM />,
			},
			{
				path: "wpt",
				element: <WPT />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
