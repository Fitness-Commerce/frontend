import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Community from "./pages/Community";
// import Trade from "./pages/Trade";
import ErrorPage from "./pages/Error";
import Post from "./pages/Post";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/header";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./pages/ProfilePage/dashboard";
import Profile from "./pages/ProfilePage/profile";

// FIXME: 테스트용
// import login from "./api/test_api/login";
// import logout from "./api/test_api/logout";
// import signup from "./api/test_api/signup";
// import createCommunity from "./api/test_api/createCummunity";
// import getMyProfile from "./api/test_api/getMyProfile";
// import refresh from "./api/test_api/refresh";

// FIXME: 테스트용
// axios.defaults.headers.common["Authorization"] =
//     localStorage.getItem("accessToken");

// axios.interceptors.response.use(
//     (res) => res,
//     async (err) => {
//         const originRequest = err.config;
//         if (err.response.status === 401 && !originRequest._retry) {
//             originRequest._retry = true;

//             try {
//                 originRequest.headers["Authorization"] = await refresh();
//                 return axios(originRequest);
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     }
// );

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
                // element: <Trade />,
            },
            {
                path: "post/:postId",
                element: <Post />,
            },
            // {
            //     path: "test",
            //     element: (
            //         <>
            //             <button type="button" onClick={login}>
            //                 로그인
            //             </button>
            //             <button type="button" onClick={logout}>
            //                 로그아웃
            //             </button>
            //             <button type="button" onClick={signup}>
            //                 회원가입
            //             </button>
            //             <button type="button" onClick={createCommunity}>
            //                 커뮤니티 생성
            //             </button>
            //             <button type="button" onClick={getMyProfile}>
            //                 내 프로필
            //             </button>
            //         </>
            //     ),
            // },
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
    }
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
