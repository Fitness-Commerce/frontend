import { styled } from "styled-components";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IDashboardPost } from "../../../interface/dashboard/DashBoardInterface";
import pastTimeCalculator from "../../../util/pastTimeCalculator";
import { Link } from "react-router-dom";


interface IBashboardPostProp {
    post: IDashboardPost,
    nickname: string
}

const StyledBashboardPost = styled.div`
    display: flex;
    padding: 10px 20px;
    margin: 5px 0;
    background-color: white;
    color: var(--color-black-primary);
    border-radius: 8px;

    .view-count-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: small;
        margin-right: 30px;
        svg {
            margin-bottom: 10px;
        }
    }

    .post-main {
        display: flex;
        flex-direction: column;
        .post-main__title {
            padding: 5px 0;
            font-size: 1rem;
            font-weight: bold;
        }
        .post-main__info {
            display: flex;
            padding: 5px 0;
            font-size: small;
            color: gray;
            span {
                padding: 0 10px;
            }
            .post-main__info__cate, .post-main__info__time {
                border-right: 1px solid gray;
            }
            .post-main__info__cate {
                padding-left: 0px;
            }
        }
    }
`;

const BashboardPost = ({post, nickname}: IBashboardPostProp) => {
    const time = pastTimeCalculator(post.created_at);
    return (
        <Link to={`/post/${post.postId}`}>
        <StyledBashboardPost>
            <div className="view-count-div">
                <FontAwesomeIcon icon={faEye} />
                <span>{post.viewCount}</span>
            </div>
            <div className="post-main">
                <div className="post-main__title">{post.title}</div>
                <div className="post-main__info">
                    <span className="post-main__info__cate">{post.categoryTitle}</span>
                    <span className="post-main__info__time">{time}</span>
                    <span className="post-main__info__nickname">{nickname}</span>
                </div>
            </div>
        </StyledBashboardPost>
        </Link>
    );
}
export default BashboardPost;