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
    }
]