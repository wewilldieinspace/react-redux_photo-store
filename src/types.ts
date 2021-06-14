export interface IItem {
    name: string,
    model: string,
    category: number,
    type: number,
    shortDescription: string,
    description: string,
    features: string[],
    price: number,
    images: string[],
    id: number
}

export interface ICatalogItem {
    name: string,
    model: string,
    category: number,
    type: number,
    price: number,
    images: string[],
    id: number
}

export interface ICartItem {
    name: string,
    model: string,
    type: string,
    image: string, 
    id: number
}

export interface ISortItems {
    name: string,
    type: string,
    elements: string[]
}