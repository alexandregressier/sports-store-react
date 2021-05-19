import { Product } from "../domain"

export type CartAction
    = ReturnType<typeof addToCart>
    | ReturnType<typeof updateCartQuantity>
    | ReturnType<typeof removeFromCart>
    | ReturnType<typeof emptyCart>

export const addToCart = (product: Product, quantity?: number): {
    type: "ADD_TO_CART",
    payload: {
        product: Product
        quantity: number
    }
} => ({
    type: "ADD_TO_CART",
    payload: {
        product,
        quantity: quantity ?? 1,
    }
})

export const updateCartQuantity = (product: Product, quantity: number): {
    type: "UPDATE_CART_QUANTITY",
    payload: {
        product: Product
        quantity: number
    }
} => ({
    type: "UPDATE_CART_QUANTITY",
    payload: {
        product,
        quantity,
    }
})

export const removeFromCart = (product: Product): {
    type: "REMOVE_FROM_CART",
    payload: {
        product: Product
    }
} => ({
    type: "REMOVE_FROM_CART",
    payload: {
        product
    }
})

export const emptyCart = (): {
    type: "EMPTY_CART",
} => ({
    type: "EMPTY_CART",
})