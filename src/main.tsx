import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";


const router = createBrowserRouter([
	{
		path: "/",
		element: <>
			<Header />
			<Home />
		</>,
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyles />
		<RouterProvider router={router} />
	</>
);
