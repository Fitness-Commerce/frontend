import { useQueryClient } from "@tanstack/react-query";

import CategoryButton from "../CategoryButton";

import categoriesType from "../../../../interface/Categories";

function Categories() {
    // 프리패칭된 카테고리 목록 가져오기
    const queryClient = useQueryClient();
    const categories = queryClient.getQueryData<categoriesType[]>(["productsCategories"]) || [];

    return (
        <nav>
            <ul className="category__nav-wrapper">
                {categories &&
                    categories?.map((category) => {
                        return (
                            <CategoryButton
                                key={category.id}
                                id={category.id}
                                title={category.title}
                            />
                        );
                    })}
            </ul>
        </nav>
    );
}

export default Categories;
