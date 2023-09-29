import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

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
import Profile from "./pages/ProfilePage/profile";
import ProductForm from "./components/ProductForm";

//FIXME: 테스트용
import login from "./api/test_api/login";
import signup from "./api/test_api/signup";
import createProductsCategory from "./api/test_api/createProductsCategory";
import testCreateProducts from "./api/test_api/testCreateProducts";
import createCommunity from "./api/test_api/createCummunity";
import getProductCategories from "./api/products_api/getProductCategories";
import getPostCategories from "./api/posts_api/getPostCategories";
import logout from "./api/user_api/logout";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
        },
    },
});

queryClient.prefetchQuery({
    queryKey: ["productsCategories"],
    queryFn: getProductCategories,
    cacheTime: Infinity,
});

queryClient.prefetchQuery({
    queryKey: ["postsCategories"],
    queryFn: getPostCategories,
    cacheTime: Infinity,
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
                path: "post/:postId",
                element: <Post />,
            },
            {
                path: "test",
                element: (
                    <>
                        <button type="button" onClick={login}>
                            로그인
                        </button>
                        <button type="button" onClick={signup}>
                            회원가입
                        </button>
                        <button type="button" onClick={createProductsCategory}>
                            카테고리 생성
                        </button>
                        <button type="button" onClick={testCreateProducts}>
                            더미 매물
                        </button>
                        <button type="button" onClick={createCommunity}>
                            게시판 생성
                        </button>
                        <button type="button" onClick={logout}>
                            로그아웃
                        </button>
                    </>
                ),
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
        ],
        errorElement: <ErrorPage />,
    },
    {
        path: "/user/dashboard",
        element: (
            <>
                <Dashboard />
            </>
        ),
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <GlobalStyles />
                <RouterProvider router={router} />
                <ReactQueryDevtools />
            </RecoilRoot>
        </QueryClientProvider>
    </StrictMode>
);
