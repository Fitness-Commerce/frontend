import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";
import axios from "axios";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Community from "./pages/Community";
import Trade from "./pages/Trade";
import ErrorPage from "./pages/Error";
import Post from "./pages/Post";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./pages/ProfilePage/dashboard";
import Chat from "./pages/ProfilePage/chat";
import Profile from "./pages/ProfilePage/profile";
import ProductForm from "./components/ProductForm";

// FIXME: 테스트용
import login from "./api/test_api/login";
import logout from "./api/test_api/logout";
import signup from "./api/test_api/signup";
import createCommunity from "./api/test_api/createCummunity";
import getMyProfile from "./api/test_api/getMyProfile";
import refresh from "./api/test_api/refresh";
import getCategories from "./api/products_api/getCategories";
import createProductsCategory from "./api/test_api/createProductsCategory";
import getProductList from "./api/products_api/getProductList";



// FIXME: 테스트용
axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("accessToken");

axios.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originRequest = err.config;
        if (err.response.status === 401 && !originRequest._retry) {
            originRequest._retry = true;

            try {
                originRequest.headers["Authorization"] = await refresh();
                return axios(originRequest);
            } catch (err) {
                console.log(err);
            }
        }
    }
);

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
            {
                path: "test",
                element: (
                    <>
                        <button type="button" onClick={login}>
                            로그인
                        </button>
                        <button type="button" onClick={logout}>
                            로그아웃
                        </button>
                        <button type="button" onClick={signup}>
                            회원가입
                        </button>
                        <button type="button" onClick={createCommunity}>
                            커뮤니티 생성
                        </button>
                        <button type="button" onClick={getMyProfile}>
                            내 프로필
                        </button>
                        <button type="button" onClick={createProductsCategory}>
                            카테고리 추가
                        </button>
                        <button type="button" onClick={getCategories}>
                            카테고리 목록
                        </button>
                        <button type="button" onClick={getProductList}>
                            매물 리스트
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
