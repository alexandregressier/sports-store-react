import { Product } from "../domain"

export enum CartActionType {
    CART_ADD = "cart_add",
    CART_UPDATE = "cart_update",
    CART_REMOVE = "cart_remove",
    CART_CLEAR = "cart_clear"
}

export const addToCart = (product: Product, quantity?: number) => ({
    type: CartActionType.CART_ADD,
    payload: {
        product,
        quantity: quantity ?? 1,
    }
})

export const updateCartQuantity = (product: Product, quantity: number) => ({
    type: CartActionType.CART_UPDATE,
    payload: { product, quantity }
})

export const removeFromCart = (product: Product) => ({
    type: CartActionType.CART_REMOVE,
    payload: { product }
})

export const clearCart = () => ({
    type: CartActionType.CART_CLEAR
})