import { useState } from "react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import createProduct from "../../api/products_api/createProduct";
import calculateNumber from "../../util/calculateNumber";

import categoriesType from "../../interface/Categories";

import * as S from "./styled";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const counter = calculateNumber();

interface Product {
    itemName: string;
    itemDetail: string;
    categoryTitle: string;
    itemPrice: string;
    images?: FileList;
    // [key: string]: string | FileList;
}

function ProductForm() {
    // const { crud }  = useParams();
    const excuteCreateProduct = useAuth(createProduct);
    const navigate = useNavigate();
    const categories = useQueryClient().getQueryData<categoriesType[]>([
        "productsCategories",
    ]);

    const [product, setProduct] = useState<Product>({
        itemName: "",
        itemDetail: "",
        categoryTitle: "",
        itemPrice: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log(e.target.files);

            setProduct({ ...product, images: e.target.files });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 유효성 검사
        for(const value of Object.values(product)) {
            if(!value) return alert("모든 정보를 기입해주세요")
        }

        const formData = new FormData();

        for (const [key, value] of Object.entries(product)) {
            switch (key) {
                case "images":
                    for(const image of Object.values(value)) {
                        formData.append(`images[${counter.increase()}]`, image as File);
                    }
                    break;
                default:
                    formData.append(key, value);
                    break;
            }
        }
        counter.reset();

        // formData 서버로 전송 후 해당 매물 페이지로 이동
        const excuteAndNavigate = async () => {
            const productId = await excuteCreateProduct(formData);
            navigate(`/trade/${productId}`);
        }
        excuteAndNavigate();
    };

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Input
                type="text"
                name="itemName"
                placeholder="상품판매 제목"
                onChange={handleInputChange}
                required
            />
            <S.Textarea
                name="itemDetail"
                placeholder="상품에 대한 정보를입력해주세요."
                onChange={handleInputChange}
                required
            />
            <S.Select
                name="categoryTitle"
                placeholder="Category"
                onChange={handleInputChange}
                required
            >
                <option key={"index"} value={""}>카테고리를 선택해주세요</option>
                {categories &&
                    categories.map((category) => (
                        <option key={category.id} value={category.title}>
                            {category.title}
                        </option>
                    ))}
            </S.Select>
            <S.Input
                type="number"
                name="itemPrice"
                placeholder="판매 가격"
                onChange={handleInputChange}
                required
            />

            <S.FileInput>
                <label className="product-upload" htmlFor="images">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    파일 선택
                </label>
                <input 
                    id="images"
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleImagesChange}
                    required />
            </S.FileInput>
            
            
            <p>등록하신 첫 번째 이미지가 상품 대표 이미지로 결정됩니다.</p>
            <S.Button type="submit">Submit</S.Button>
        </S.Form>
    );
}

export default ProductForm;
