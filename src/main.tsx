import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import axios from "axios";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Community from "./pages/Community";
import ErrorPage from "./pages/Error";
import Post from "./pages/Post";
import Trade from "./pages/Trade";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./pages/ProfilePage/dashboard";
import Chat from "./pages/ProfilePage/chat";
import Profile from "./pages/ProfilePage/profile";
import ProductForm from "./components/ProductForm";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

// const preFetch 
// queryClient.prefetchQuery({
//     queryKey: ["productsCategories"],
//     queryFn: getCategories
// })

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
                path: "products/:crud",
                element: <ProductForm />,
            },
            {
                path: "community",
                element: <Community />,
            },
            {
                path: "trade/:itemId",
                element: <Trade />,
            },
            {
                path: "post",
                element: <Post />,
            },
        ],
        // errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/user",
        element: (
            <>
                <ProfilePage />
            </>
        ),
        children: [
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
        ],
        errorElement: <ErrorPage />,
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
