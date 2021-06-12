export interface ItemI {
    id?: number,
    itemId: number | undefined,
    name: string,
    model: string,
    price: number,
    img: string | string[]
}

export interface FatchedItemsI extends ItemI {
    category: number,
    img: string[]
}