import product1 from "./src/assets/product1.webp";
import {
  IDashboardPost,
  IDashboardProduct,
} from "./src/interface/dashboard/DashBoardInterface";

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
    "비타민",
    "오메가3",
    "식이섬유",
    "유산균",
    "닭가슴살",
    "단백질",
    "부스터",
    "다이어트",
    "쉐이커",
    "용품",
    "아르기닌",
    "기타",
];

// 상품 정렬 기준
export const dummySortLabel = ["지역", "가격", "마켓", "정렬", "결과 내 검색"];

// 게시판 카테고리
export const dummyPostCategories = [
  "자유게시판",
  "팁 공유",
  "멸치 양식장",
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
];

// 게시글 리스트
export const dummyPostList = [
  {
    postId: 68,
    postTitle:
      "person hurried out voice local church watch face want indicate birth nearer reason represent victory discussion shallow composition class handsome single race chemical guess",
    author: "Myrtie",
    viewCount: 409,
    created_at: "12/13/2023",
  },
  {
    postId: 61,
    postTitle:
      "dark cap subject numeral may anybody when result spite own thick cave rush coach kids accurate loud copper exist charge solution troops government development",
    author: "Rena",
    viewCount: 346,
    created_at: "5/15/2087",
  },
  {
    postId: 21,
    postTitle:
      "general score kept engineer motor empty field battle swimming frighten gravity birds provide love particles life never becoming children alphabet oxygen official most board",
    author: "Nannie",
    viewCount: 872,
    created_at: "5/2/2123",
  },
  {
    postId: 75,
    postTitle:
      "are stairs stand damage write brown loss extra particular studying football pencil buy valley standard reason shadow consonant say indicate term frequently bone bend",
    author: "Ada",
    viewCount: 743,
    created_at: "9/20/2091",
  },
  {
    postId: 33,
    postTitle:
      "addition bill worry donkey becoming shall solar oxygen moving handle figure own what division feathers luck population leaf melted such train answer spend year",
    author: "Ralph",
    viewCount: 182,
    created_at: "9/10/2027",
  },
  {
    postId: 11,
    postTitle:
      "love type hour branch same particularly raise them change identity before progress free rising ten advice many original stared were throat above ruler engine",
    author: "Ricky",
    viewCount: 183,
    created_at: "8/26/2120",
  },
  {
    postId: 64,
    postTitle:
      "machinery thee lay mixture potatoes special take instant advice design unless object heavy order branch able rays leave who castle fair another pull wonder",
    author: "Lulu",
    viewCount: 598,
    created_at: "6/6/2073",
  },
  {
    postId: 92,
    postTitle:
      "dig dropped remove date fighting per himself hit pretty flow nearer swing depth been sign way setting pie myself soon strength apartment herd completely",
    author: "Ruby",
    viewCount: 309,
    created_at: "10/2/2023",
  },
  {
    postId: 45,
    postTitle:
      "search huge smoke negative hardly afternoon coach made depth close motion gather fly swung due rest far source me respect almost read kept salmon",
    author: "Norman",
    viewCount: 164,
    created_at: "1/14/2058",
  },
];

// FIXME 더미 상품 리스트 (dashboard)
export const productTemp: IDashboardProduct[] = [
  {
    itemId: 1,
    categoryName: "스포츠/레저",
    itemName: "덤벨 5kg",
    itemDetail: "2021년에 구매했던 5kg 검은색 덤벨입니다.",
    itemPrice: 15000,
    itemStatus: "RESERVED",
    mainImageUrl: "https://i.pinimg.com/564x/9b/c0/e4/9bc0e4671b4a94a5264946634faa0310.jpg",
    viewCount: 4,
    createdAt: "10/2/2023",
    updatedAt: "10/2/2023",
  },
  {
    itemId: 1,
    categoryName: "스포츠/레저",
    itemName: "덤벨 5kg",
    itemDetail: "2021년에 구매했던 5kg 검은색 덤벨입니다.",
    itemPrice: 15000,
    itemStatus: "RESERVED",
    mainImageUrl: "https://i.pinimg.com/564x/9b/c0/e4/9bc0e4671b4a94a5264946634faa0310.jpg",
    viewCount: 4,
    createdAt: "10/2/2023",
    updatedAt: "10/2/2023",
  },
  {
    itemId: 1,
    categoryName: "스포츠/레저",
    itemName: "덤벨 5kg",
    itemDetail: "2021년에 구매했던 5kg 검은색 덤벨입니다.",
    itemPrice: 15000,
    itemStatus: "RESERVED",
    mainImageUrl: "https://i.pinimg.com/564x/9b/c0/e4/9bc0e4671b4a94a5264946634faa0310.jpg",
    viewCount: 4,
    createdAt: "10/2/2023",
    updatedAt: "10/2/2023",
  },
  {
    itemId: 1,
    categoryName: "스포츠/레저",
    itemName: "덤벨 5kg",
    itemDetail: "2021년에 구매했던 5kg 검은색 덤벨입니다.",
    itemPrice: 15000,
    itemStatus: "RESERVED",
    mainImageUrl: "https://i.pinimg.com/564x/9b/c0/e4/9bc0e4671b4a94a5264946634faa0310.jpg",
    viewCount: 4,
    createdAt: "10/2/2023",
    updatedAt: "10/2/2023",
  },
  {
    itemId: 1,
    categoryName: "스포츠/레저",
    itemName: "덤벨 5kg",
    itemDetail: "2021년에 구매했던 5kg 검은색 덤벨입니다.",
    itemPrice: 15000,
    itemStatus: "RESERVED",
    mainImageUrl: "https://i.pinimg.com/564x/9b/c0/e4/9bc0e4671b4a94a5264946634faa0310.jpg",
    viewCount: 4,
    createdAt: "10/2/2023",
    updatedAt: "10/2/2023",
  },
  {
    itemId: 2,
    categoryName: "스포츠/레저",
    itemName: "신타 6엣지 파우더",
    itemDetail: "신타 6 엣지 프로틴 파우더 드링크 믹스, 초콜릿 밀크셰이크",
    itemPrice: 52230,
    itemStatus: "SELLING",
    mainImageUrl: "https://i.pinimg.com/564x/dd/31/8d/dd318da3b5a0e57eb9eb3b22ba54ed31.jpg",
    viewCount: 11,
    createdAt: "11/2/2023",
    updatedAt: "11/2/2023",
  },
  {
    itemId: 2,
    categoryName: "스포츠/레저",
    itemName: "신타 6엣지 파우더",
    itemDetail: "신타 6 엣지 프로틴 파우더 드링크 믹스, 초콜릿 밀크셰이크",
    itemPrice: 52230,
    itemStatus: "SELLING",
    mainImageUrl: "https://i.pinimg.com/564x/dd/31/8d/dd318da3b5a0e57eb9eb3b22ba54ed31.jpg",
    viewCount: 11,
    createdAt: "11/2/2023",
    updatedAt: "11/2/2023",
  },
  {
    itemId: 2,
    categoryName: "스포츠/레저",
    itemName: "신타 6엣지 파우더",
    itemDetail: "신타 6 엣지 프로틴 파우더 드링크 믹스, 초콜릿 밀크셰이크",
    itemPrice: 52230,
    itemStatus: "SELLING",
    mainImageUrl: "https://i.pinimg.com/564x/dd/31/8d/dd318da3b5a0e57eb9eb3b22ba54ed31.jpg",
    viewCount: 11,
    createdAt: "11/2/2023",
    updatedAt: "11/2/2023",
  },
  {
    itemId: 3,
    categoryName: "스포츠/레저",
    itemName: "이고진 밸런스 보드",
    itemDetail: "핑크색 밸런스보드 팝니다.",
    itemPrice: 60000,
    itemStatus: "SOLD",
    mainImageUrl: "https://i.pinimg.com/564x/26/6c/24/266c2460fc25315f10ae151d074d325e.jpg",
    viewCount: 3,
    createdAt: "15/2/2023",
    updatedAt: "15/2/2023",
  },
  {
    itemId: 4,
    categoryName: "스포츠/레저",
    itemName: "이고진 밸런스 보드",
    itemDetail: "핑크색 밸런스보드 팝니다.",
    itemPrice: 60000,
    itemStatus: "SOLD",
    mainImageUrl: "https://i.pinimg.com/564x/26/6c/24/266c2460fc25315f10ae151d074d325e.jpg",
    viewCount: 3,
    createdAt: "15/2/2023",
    updatedAt: "15/2/2023",
  },
  {
    itemId: 3,
    categoryName: "스포츠/레저",
    itemName: "이고진 밸런스 보드",
    itemDetail: "핑크색 밸런스보드 팝니다.",
    itemPrice: 60000,
    itemStatus: "SOLD",
    mainImageUrl: "https://i.pinimg.com/564x/26/6c/24/266c2460fc25315f10ae151d074d325e.jpg",
    viewCount: 3,
    createdAt: "15/2/2023",
    updatedAt: "15/2/2023",
  },
  {
    itemId: 3,
    categoryName: "스포츠/레저",
    itemName: "이고진 밸런스 보드",
    itemDetail: "핑크색 밸런스보드 팝니다.",
    itemPrice: 60000,
    itemStatus: "SOLD",
    mainImageUrl: "https://i.pinimg.com/564x/26/6c/24/266c2460fc25315f10ae151d074d325e.jpg",
    viewCount: 3,
    createdAt: "15/2/2023",
    updatedAt: "15/2/2023",
  },
  {
    itemId: 3,
    categoryName: "스포츠/레저",
    itemName: "이고진 밸런스 보드",
    itemDetail: "핑크색 밸런스보드 팝니다.",
    itemPrice: 60000,
    itemStatus: "SOLD",
    mainImageUrl: "https://i.pinimg.com/564x/26/6c/24/266c2460fc25315f10ae151d074d325e.jpg",
    viewCount: 3,
    createdAt: "15/2/2023",
    updatedAt: "15/2/2023",
  }
];

// FIXME 더미 게시글 리스트 (dashboard)
export const postTemp: IDashboardPost[] = [
  {
    postId: 0,
    categoryTitle: "팁 공유",
    title: "작년에 제가...",
    content: "작년에 제가 78키로였다면 믿으시겠습니까? 3개월만에 30키로 빼고 1년쉬고 1년만에 8키로 요요 56키로에서 49키로까지 4개월만에 빼고 유지중💪",
    viewCount: 28,
    created_at: "1/2/2023",
    updated_at: "1/2/2023",
  },
  {
    postId: 1,
    categoryTitle: "팁 공유",
    title: "50대 운동러 입니다.",
    content: `50대 운동러 입니다.
    첫음 잡아본 정면포즈 ㅎㅎㅎ
    다이어트 중이라 뱃살이 좀 빠졌네요.
    옆구리 쪽은 풀업을 많이해서 그런지 잔잔한
    근육이 생겼습니다. 따로 먹는 약은 없고 일반식사만 해서 그런지 근육에 볼륨은 없네요.`,
    viewCount: 3,
    created_at: "2/21/2023",
    updated_at: "2/21/2023",
  },
  {
    postId: 2,
    categoryTitle: "팁 공유",
    title: "흠 체지방",
    content: `체지방 4.7퍼 나왔는데
    아무리 봐도 4.7퍼 몸이아닌데
    인바디 믿어도 될까요?`,
    viewCount: 121,
    created_at: "9/2/2023",
    updated_at: "9/2/2023",
  },
  {
    postId: 3,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
  {
    postId: 4,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
  {
    postId: 5,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
  {
    postId: 6,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
  {
    postId: 7,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
  {
    postId: 8,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
  {
    postId: 9,
    categoryTitle: "팁 공유",
    title: '데드 질문',
    content: `컨벤셔널 데드리프트하면 원래 등엔 자극이 안오나요??
    하체엔 오는데 등엔 안 오네요`,
    viewCount: 51,
    created_at: "1/3/2023",
    updated_at: "1/3/2023",
  },
];