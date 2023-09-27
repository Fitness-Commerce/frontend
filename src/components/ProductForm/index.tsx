import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import createProduct from "../../api/products_api/createProduct";
import calculateNumber from "../../util/calculateNumber";

import categoriesType from "../../interface/Categories";

import * as S from "./styled";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

import SpinnerSVG from "../../assets/Spinner.svg"

const counter = calculateNumber();

interface Product {
    itemName: string;
    itemDetail: string;
    categoryTitle: string;
    itemPrice: string;
}

function ProductForm() {
    // TODO: 수정할때 데이터 가져와야됨
    // const { crud }  = useParams();
    const [fileArray, setFileArray] = useState<File[]>([]);
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

    const [previewSrc, setPreviewSrc] = useState<string[]>([]);

    // input으로 숫자만 입력 받게하고 그 값으로 원화 표기 변수를 생성 후
    // 해당 값을 보여줌
    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        if (e.target.name === "itemPrice") {
            let price = e.target.value.replace(/\D/g, "");
            price = Number(price).toLocaleString();
            e.target.value = price;
        }
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // 파일 추가
    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const tmp: File[] = [];
            for (let i = e.target.files?.length - 1; i >= 0; i--) {
                tmp.push(e.target.files.item(i) as File);
            }
            setFileArray((prev) => [...prev, ...tmp]);
        }
    };

    // 파일 삭제
    const handleFileDelete = (
        e: React.MouseEvent<HTMLButtonElement>,
        index: number
    ) => {
        e.preventDefault();
        setFileArray((prev) => prev.filter((_, i) => i !== index)); // 상태 불변성을 위한 filter / 원본을 바꾸는 splice는 맞지 않음
    };

    // 파일 변경
    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFile = e.target.files[0];
            setFileArray((prev) =>
                prev.map((file, i) => (i === index ? newFile : file))
            );
        }
    };

    // 파일 업로드
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // 유효성 검사
        for (const value of Object.values(product)) {
            if (!value) return alert("모든 정보를 기입해주세요");
        }

        // product(상품 정보)와 fileArray(이미지들)을 request에 담기
        const request = { ...product, images: fileArray };

        const formData = new FormData();

        // 이미지, 가격은 따로 가공이 필요함
        for (const [key, value] of Object.entries(request)) {
            switch (key) {
                case "images":
                    for (const image of value) {
                        formData.append(`images[${counter.increase()}]`, image);
                    }
                    break;
                case "itemPrice": {
                    const price = (value as string).replace(/,/g, "");
                    formData.append(key, price);
                    break;
                }
                default:
                    formData.append(key, value as string);
                    break;
            }
        }
        counter.reset();

        // formData 서버로 전송 후 해당 매물 페이지로 이동
        const excuteAndNavigate = async () => {
            const productId = await excuteCreateProduct(formData);
            navigate(`/trade/${productId}`);
        };
        excuteAndNavigate();
    };

    // 파일 미리보기
    useEffect(() => {
        if (fileArray.length) {
            const newPreviewSrc = Array(fileArray.length).fill(""); // 새 previewSrc 배열 생성
            fileArray.forEach((file, index) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    newPreviewSrc[index] = reader.result as string; // 해당 인덱스 값 업데이트
                    setPreviewSrc([...newPreviewSrc]); // 상태 업데이트
                };
            });
        }
    }, [fileArray]);

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
                <option key={"index"} value={""}>
                    카테고리를 선택해주세요
                </option>
                {categories &&
                    categories.map((category) => (
                        <option key={category.id} value={category.title}>
                            {category.title}
                        </option>
                    ))}
            </S.Select>

            <S.Input
                type="text"
                name="itemPrice"
                placeholder="판매 가격"
                value={product.itemPrice}
                onChange={handleInputChange}
                required
            />

            {/* 파일 목록 */}
            <S.FileInput>
                {/* 파일을 실질적으로 가져오는 input (보여지진 않음) */}
                <input
                    id="images"
                    type="file"
                    name="images"
                    accept="image/*"
                    multiple
                    onChange={handleImagesChange}
                    required
                />
                {fileArray.length > 0 ?
                    fileArray.map((file, index) => (
                        <div
                            className="product_file-container"
                            key={self.crypto.randomUUID()}
                        >
                            <img
                                className="product_file-preview"
                                src={previewSrc[index] || SpinnerSVG}
                                alt="미리보기"
                            />

                            {/* 파일 이름 (클릭하면 교체) */}
                            <span
                                className="product_file-name"
                                onClick={() =>
                                    document
                                        .getElementById(`file-input-${index}`)
                                        ?.click()
                                }
                            >
                                {file.name}
                            </span>

                            {/* 각 파일에 대한 별도의 input 필드 */}
                            <input
                                id={`file-input-${index}`}
                                type="file"
                                name={`images-${index}`}
                                accept="image/*"
                                style={{ display: "none" }} // 숨김 처리
                                onChange={(e) => handleFileChange(e, index)}
                            />

                            {/* 삭제 버튼 */}
                            <button
                                type="button"
                                className="product_file-delete-btn"
                                onClick={(e) => handleFileDelete(e, index)}
                            >
                                &times;
                            </button>
                        </div>
                    )) : <p>선택된 파일이 없습니다</p>}
            </S.FileInput>

            {/* 파일 추가 버튼 */}
            <S.UploadLabelContainer>
                <label htmlFor="images">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    {fileArray.length > 0 ? "파일 추가" : "파일 선택"}
                </label>
                <p>등록하신 첫 번째 이미지가 상품 대표 이미지로 결정됩니다.</p>
            </S.UploadLabelContainer>
            <S.Button type="submit">Submit</S.Button>
        </S.Form>
    );
}

export default ProductForm;
