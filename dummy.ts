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

// 게시판 카테고리
export const dummyPostCategories = [
    "feed",
    "wet",
    "eight",
    "they",
    "whenever",
    "biggest",
    "took",
    "radio",
    "metal",
    "due",
    "highest",
    "stopped",
    "identity",
]

// 게시글 리스트
export const dummyPostList = [
    {
        postId: 68,
        postTitle: "person hurried out voice local church watch face want indicate birth nearer reason represent victory discussion shallow composition class handsome single race chemical guess",
        author: "Myrtie",
        viewCount: 409,
        created_at: "12/13/2023"
    },
    {
        postId: 61,
        postTitle: "dark cap subject numeral may anybody when result spite own thick cave rush coach kids accurate loud copper exist charge solution troops government development",
        author: "Rena",
        viewCount: 346,
        created_at: "5/15/2087"
    },
    {
        postId: 21,
        postTitle: "general score kept engineer motor empty field battle swimming frighten gravity birds provide love particles life never becoming children alphabet oxygen official most board",
        author: "Nannie",
        viewCount: 872,
        created_at: "5/2/2123"
    },
    {
        postId: 75,
        postTitle: "are stairs stand damage write brown loss extra particular studying football pencil buy valley standard reason shadow consonant say indicate term frequently bone bend",
        author: "Ada",
        viewCount: 743,
        created_at: "9/20/2091"
    },
    {
        postId: 33,
        postTitle: "addition bill worry donkey becoming shall solar oxygen moving handle figure own what division feathers luck population leaf melted such train answer spend year",
        author: "Ralph",
        viewCount: 182,
        created_at: "9/10/2027"
    },
    {
        postId: 11,
        postTitle: "love type hour branch same particularly raise them change identity before progress free rising ten advice many original stared were throat above ruler engine",
        author: "Ricky",
        viewCount: 183,
        created_at: "8/26/2120"
    },
    {
        postId: 64,
        postTitle: "machinery thee lay mixture potatoes special take instant advice design unless object heavy order branch able rays leave who castle fair another pull wonder",
        author: "Lulu",
        viewCount: 598,
        created_at: "6/6/2073"
    },
    {
        postId: 92,
        postTitle: "dig dropped remove date fighting per himself hit pretty flow nearer swing depth been sign way setting pie myself soon strength apartment herd completely",
        author: "Ruby",
        viewCount: 309,
        created_at: "10/2/2023"
    },
    {
        postId: 45,
        postTitle: "search huge smoke negative hardly afternoon coach made depth close motion gather fly swung due rest far source me respect almost read kept salmon",
        author: "Norman",
        viewCount: 164,
        created_at: "1/14/2058"
    },
]
