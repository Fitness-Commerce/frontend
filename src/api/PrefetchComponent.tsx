import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import getCategories from "./products_api/getCategories";
import getMyProfile from "./test_api/getMyProfile";
import useAuth from "../hooks/useAuth";

// useAuth로 인증해야돼서 프리패칭 컴포넌트가 필요함
const PrefetchComponent = () => {
    const excuteGetMyProfile = useAuth(getMyProfile);
    const queryClient = useQueryClient();

    useEffect(() => {
        
        queryClient.prefetchQuery({
            queryKey: ["productsCategories"],
            queryFn: getCategories,
            cacheTime: Infinity,
        });
        
        queryClient.prefetchQuery({
            queryKey: ["myProfile"],
            queryFn: excuteGetMyProfile,
            cacheTime: Infinity,
        });
    }, []);
        
        return <></>;
};

export default PrefetchComponent;
