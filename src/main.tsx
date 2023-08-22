import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Products from "./pages/Products";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

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
