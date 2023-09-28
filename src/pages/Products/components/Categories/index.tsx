import { useQuery } from "@tanstack/react-query";

import CategoryButton from "../CategoryButton";
import getCategories from "../../../../api/products_api/getCategories";
import LoadingSpinner from "../../../../components/LoadingSpinner";

function Categories() {
    const {
        data: categories,
        isError,
        isLoading,
        error,
    } = useQuery(["productsCategories"], getCategories);

    const filtered = categories?.filter((e) => {
        return e.title !== "기타";
    })
    const etc = categories?.filter(e => e.title === "기타");

    if (isLoading) return <LoadingSpinner />;
    if (isError) throw error;

    return (
        <ul className="category__nav-wrapper">
            {filtered &&
                filtered.map((category) => {
                    return (
                        <CategoryButton
                            key={category.id}
                            id={category.id}
                            title={category.title}
                        />
                    );
                })}
                {etc && <CategoryButton id={etc[0]?.id} title={etc[0]?.title} /> }
        </ul>
    );
}

export default Categories;
