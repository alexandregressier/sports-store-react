import { Product } from "./domain"

export interface SportsStoreState {
    categories: string[],
    products: Product[],
    cart: { product: Product, quantity: number }[],
    cartItems: number,
    cartTotal: number,
}

export const initState: SportsStoreState = {
    categories: [],
    products: [],
    cart: [],
    cartItems: 0,
    cartTotal: 0,
}