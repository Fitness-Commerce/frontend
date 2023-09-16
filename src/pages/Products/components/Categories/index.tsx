import { useQuery } from "@tanstack/react-query";

import CategoryButton from "../CategoryButton";
import LoadingSpinner from "../../../../components/LoadingSpinner";

import getCategories from "../../../../api/products_api/getCategories";

function Categories() {
    const {
        data: categories,
        isError,
        isLoading,
        error,
    } = useQuery(["productsCategories"], getCategories);

    if (isLoading) return <LoadingSpinner />;
    if (isError) throw error;

    return (
        <nav>
            <ul className="category__nav-wrapper">
                {categories &&
                    categories.map((category) => {
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
