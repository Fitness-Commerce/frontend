import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { useAxios } from "../../../hooks/useAxios";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import Header from "../../../components/header";
import ProductCard from "../../../components/ProductsLayout/ProductCard";
import { IDashboardPost, IDashboardProduct } from "../../../interface/dashboard/DashBoardInterface";
import LoadingSpinner from "../../../components/LoadingSpinner";
import BashboardPost from "./BashboardPost";
import profile from "../../../assets/profile.jpeg";

import getMyProfile from "../../../api/test_api/getMyProfile";
import getDashboardProduct from "../../../api/profile_api/getDashboardProduct";
import getDashboardPost from "../../../api/profile_api/getDashboardPost";


const Dashboard = () => {
    // const request = useAxios();
    const excuteGetMyProfile = useAuth(getMyProfile);
    const excuteGetMyProduct = useAuth(getDashboardProduct);
    const excuteGetMyPost = useAuth(getDashboardPost);

    const [onSale, setOnSale] = useState<IDashboardProduct[]>([]);
    const [reserved, setReserved] = useState<IDashboardProduct[]>([]);
    const [soldOut, setSoldOut] = useState<IDashboardProduct[]>([]);

    const [posts, setPosts] = useState<IDashboardPost[]>([]);
    
    const [viewState, setViewState] = useState("SELLING");

    const scrollBoxProduct = useRef<HTMLDivElement | null>(null);
    const scrollBoxPost = useRef<HTMLDivElement | null>(null);

    const scrollToTopProduct = () => {
        if(scrollBoxProduct.current) {
            scrollBoxProduct.current.scrollTop = 0;
        }
    }
    const scrollToTopPost = () => {
        if(scrollBoxPost.current) {
            scrollBoxPost.current.scrollTop = 0;
        }
    }


    // 유저 프로필 정보
    const {isLoading: profileIsLoading, error: profileError, data: profileData } = useQuery({
        queryKey: ['myProfile'],
        queryFn: excuteGetMyProfile
    })

    // 유저가 등록한 상품 리스트
    const { isLoading: productIsLoading, error: productError, data: productData } = useQuery({
        queryKey: ['dashboardProduct'],
        queryFn: excuteGetMyProduct
    })

    // 유저가 게시한 게시글
    const { isLoading: postIsLoading, error: postError, data: postData } = useQuery({
        queryKey: ['dashboardPost'],
        queryFn: excuteGetMyPost
    })
    
    useEffect(() => {
        if(productData) {
            setOnSale(productData.filter((e: { itemStatus: string; }) => e.itemStatus === "SELLING"));
            setReserved(productData.filter((e: { itemStatus: string; }) => e.itemStatus === "RESERVED"));
            setSoldOut(productData.filter((e: { itemStatus: string; }) => e.itemStatus === "SOLD"));
        }
        if(postData) {
            setPosts(postData);
        }
    }, [productData, postData])


    if (profileIsLoading || productIsLoading || postIsLoading) return <LoadingSpinner />
    if (profileError || productError || postError) return <>An error has occurred</>;
    

    return (
        <S.Dashboard>
            <Header />
            <div className="dashboard__container">

                <div className="dashboard__container__head">
                    {/* nickname */}
                    <h3 className="dashboard__container__head__user">
                        <div className="dashboard__container__head__user__welcome">Welcome!</div>
                        <Link className="dashboard__container__head__user__img" to="/user/profile"><img src={profile} alt="profile-img" /></Link>
                        <div className="dashboard__container__head__user__nickname">{profileData.nickname}</div>
                    </h3>
                    {/* table */}
                    <table>
                        <thead className="table__head">
                            <tr>
                                <td className="table__head__td">판매완료</td>
                                <td className="table__head__td">판매 중</td>
                                <td className="table__head__td">예약 중</td>
                                <td className="table__head__td">게시글</td>
                            </tr>
                        </thead>
                        <tfoot className="table__count">
                            <tr>
                                <td>{soldOut.length ? soldOut.length : 0}</td>
                                <td>{onSale.length ? onSale.length : 0}</td>
                                <td>{reserved.length ? reserved.length : 0}</td>
                                {/* FIXME */}
                                <td>{postData && postData.length}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="dashboard__container__content">
                    <div className="dashboard__container__content__product">
                        
                        <ul>
                            <li className="dashboard__onSale dashboard__circle" onClick={() => {
                                scrollToTopProduct();
                                setViewState("SELLING");
                            }}></li>
                            <li className="dashboard__reserved dashboard__circle" onClick={() => {
                                scrollToTopProduct();
                                setViewState("RESERVED");
                            }}></li>
                            <li className="dashboard__soldOut dashboard__circle" onClick={() => {
                                scrollToTopProduct();
                                setViewState("SOLD")
                            }}></li>
                        </ul>
                        
                        <div className="scroll-box">
                            <div className="scroll-box__cards" ref={scrollBoxProduct}>
                                {viewState === "SELLING" ? 
                                onSale.map((e, index) => (
                                    <ProductCard type="dashboard" dashboardInfo={e} key={index} />
                                )) : viewState === "RESERVED" ? 
                                reserved.map((e, index) => (
                                    <ProductCard type="dashboard" dashboardInfo={e} key={index} />
                                )) : soldOut.map((e, index) => (
                                    <ProductCard type="dashboard" dashboardInfo={e} key={index} />
                                ))}
                                {!productData.length && <span style={{"textAlign": "center"}}>등록된 상품이 없습니다.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="dashboard__container__content__post">
                        <div className="dashboard__container__content__post__head">
                            <span>작성한 글</span>
                            <FontAwesomeIcon icon={faCaretUp} onClick={scrollToTopPost} />
                        </div>
                        <div className="bashboard__container__content__post__scroll" ref={scrollBoxPost}>
                            {posts.length ? 
                            posts.map((post, index) => (
                                <BashboardPost post={post} key={index} nickname={"lofi-J"} />
                            )) : <span style={{"textAlign": "center"}}>등록된 게시글이 없습니다.</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </S.Dashboard>
    );
}

export default Dashboard;