export enum DataType {
    PRODUCTS = "products",
    CATEGORIES = "categories",
}

export interface Product {
    id: number,
    name: string,
    category: string,
    description: string,
    price: number,
}