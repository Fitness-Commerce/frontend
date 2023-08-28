import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Community from "./pages/Community";
import Trade from "./pages/Trade";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Navigation />
                <Outlet />
            </>
        ),
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "community",
                element: <Community />,
            },
            {
                path: "trade",
                element: <Trade />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <GlobalStyles />
            <RouterProvider router={router} />
            <ReactQueryDevtools />
        </RecoilRoot>
    </QueryClientProvider>
);
