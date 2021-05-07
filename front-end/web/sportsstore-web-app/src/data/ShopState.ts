export interface ShopState {
    categories: string[],
    products: Product[],
    orders: Order[],
}

export interface Product {
    id: number,
    name: string,
    category: string,
    description: string,
    price: number,
}

export interface Order {
    products: Product[]
}