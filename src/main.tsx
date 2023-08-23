import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Community from "./pages/Community";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";
import Navigation from "./components/Navigation";


const router = createBrowserRouter([
	{
		path: "/",
		element: <>
			<Header />
			<Navigation />
			<Outlet />
		</>,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "products",
				element: <Products />
			},
			{
				path: "community",
				element: <Community />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyles />
		<RouterProvider router={router} />
	</>
);
