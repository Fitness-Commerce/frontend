import product1 from "./src/assets/product1.webp";

// type itmes_res = [
//     {
//       item_id: number;
//         member_id: number;
//         item_category_id: number;
//         item_name: string;
//         item_detail: string;
//         item_price: number;
//         item_status: string;
//         //item_quantity: number;
//         item_images: string;
//         item_content: string;
//         created_at: timestamp;
//         updated_at?: timestamp;
//     }
//  ];

export const dummyItems = [
    {
        item_id: 1,
        member_id: 0,
        item_category_id: 0,
        item_name: "헬스(웨이트) 기구 정리",
        item_detail: "detail...",
        item_price: 2000000,
        item_status: "거래가능",
        item_images: product1,
        created_at: "2023.08.18.01.31",
        updated_at: undefined,
    },
];

// 상품 카테고리
export const dummyCategories = [
    "모바일/디지털",
    "컴퓨터/주변기기",
    "가전제품/카메라",
    "차량/오토바이",
    "스포츠/레저",
    "여성의류",
    "남성의류",
    "뷰티/미용",
    "스타굿즈/수집품",
    "식품",
    "취미",
    "기타",
];

// 상품 정렬 기준
export const dummySortLabel = ["지역", "가격", "마켓", "정렬", "결과 내 검색"];
