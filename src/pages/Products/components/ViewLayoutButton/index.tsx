import * as S from "./styled";
import GridView from "../../../../assets/grid_view.svg";
import ListView from "../../../../assets/list_view.svg";

interface ViewLayoutButtonProps {
    isGridLayout: boolean;
    setGridLayout: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewLayoutButton = ({
    isGridLayout,
    setGridLayout,
}: ViewLayoutButtonProps) => {
    return (
        <S.Wrapper>
            <button
                className="products__view-layout-btn"
                type="button"
                onClick={() => setGridLayout((state) => !state)}
            >
                <img src={isGridLayout ? ListView : GridView} />
            </button>
        </S.Wrapper>
    );
};

export default ViewLayoutButton;
