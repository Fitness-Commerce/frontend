export interface IDashboardProduct {
    itemId: number,
    categoryName: string,
    itemName: string,
    itemDetail: string,
    itemPrice: number,
    itemStatus: string,
    mainImageUrl: string,
    viewCount: number,
    createdAt: string,
    updatedAt: string
}

export interface IDashboardPost {
    postId: number,
    categoryTitle: string,
    title: string,
    content: string,
    viewCount: number,
    created_at: string,
    updated_at: string
}
