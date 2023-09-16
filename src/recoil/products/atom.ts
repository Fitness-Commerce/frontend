import { atom } from "recoil";
import { sortLabel, filterLabel } from "../../contance/products";

// 전체보기 또는 지역보기 상태
export const viewModeState = atom({
    key: "recoilViewMode",
    default: sortLabel[0], // 기본값은 전체보기로 설정
});

// 정렬 기준 선택 상태 (가격, 조회수, 날짜)
export const sortOptionState = atom({
    key: "recoilSortOption",
    default: filterLabel[0], // 최신 순으로 설정
});

// 카테고리 기준 선택 상태
export const SelectedCategoryState = atom({
    key: "recoilSelectedCategory",
    default: ""
});