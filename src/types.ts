export interface IItem {
    name: string,
    model: string,
    category: number,
    type: number,
    // shortDescription: string,
    description: string,
    features: string[],
    images_500: string[],
    images_55: string[],
    price: number,
    id: number
}

export interface IMainPageItem {
    id: number,
    name: string,
    model: string,
    description: string,
    price: number,
    image: string,
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