import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";
import Login from "./pages/login/Login";



const router = createBrowserRouter([
	{
		path: "/",
		element:
		<>
			<Header />
			<Home />
		</>,
	}, 
	{
		path: "/login",
		element: 
		<>
			<Login />
		</>
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyles />
		<RouterProvider router={router} />
	</>
);
