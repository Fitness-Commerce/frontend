export default interface ProductType {
    id: number;
    memberId: number;
    itemCategoryId: number;
    itemName: string;
    itemDetail: string;
    itemPrice: number;
    itemStatus: string;
    buyerId: number;
    itemImagesUrl: URL[];
    viewCount: number;
    createdAt: string;
    updatedAt?: string;
}

export interface ProductListType {
    totalPages: number;
    content: ProductType[];
}