import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../../../recoil/login/atom";

import { CREATE_PRODUCT } from "../../../../contance/routeURL";

import * as S from "./styled";
import GridView from "../../../../assets/grid_view.svg";
import ListView from "../../../../assets/list_view.svg";

interface ViewLayoutProps {
    isGridLayout: boolean;
    setGridLayout: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewLayout = ({ isGridLayout, setGridLayout }: ViewLayoutProps) => {
    const navigate = useNavigate();
    const login = useRecoilValue(isLogin);

    return (
        <S.Wrapper>
            <button
                className="products__view-layout-btn"
                type="button"
                onClick={() => setGridLayout((state) => !state)}
            >
                <img src={isGridLayout ? ListView : GridView} />
            </button>
            {login && (
                <S.LinkToProductForm onClick={() => navigate(CREATE_PRODUCT)}>
                    <span>상품 등록</span>
                </S.LinkToProductForm>
            )}
        </S.Wrapper>
    );
};

export default ViewLayout;
