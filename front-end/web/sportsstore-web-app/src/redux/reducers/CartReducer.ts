import { Product } from "../domain"
import { addToCart, CartActionType, removeFromCart, updateCartQuantity } from "../actions/CartActionCreators"
import "scope-extensions-js"
import { initState, SportsStoreState } from "../state"

export interface CartAction {
    type: CartActionType,
    payload?: {
        product: Product,
        quantity?: number,
    }
}

export const cartReducer = (state: SportsStoreState = initState, action: CartAction): SportsStoreState => {
    const newState: SportsStoreState = { ...state }
    switch (action.type) {
        case CartActionType.CART_ADD:
            (action as ReturnType<typeof addToCart>).payload.let(({ product, quantity }) => {
                let existingProduct = newState.cart.find(it => it.product.id === product.id)
                if (existingProduct) {
                    existingProduct.quantity += quantity
                } else {
                    newState.cart = [...newState.cart, { product, quantity }]
                }
                newState.cartItems += quantity
                newState.cartTotal += product.price * quantity
            })
            return newState
        case CartActionType.CART_UPDATE:
            (action as ReturnType<typeof updateCartQuantity>).payload.let(({ product, quantity }) => {
                newState.cart = newState.cart.map(it => {
                    if (it.product.id === product.id) {
                        (it.quantity - quantity).let(quantityDiff => {
                            newState.cartItems += quantityDiff
                            newState.cartTotal += product.price * quantityDiff
                        })
                        return { product, quantity }
                    } else {
                        return it
                    }
                })
            })
            return newState
        case CartActionType.CART_REMOVE:
            (action as ReturnType<typeof removeFromCart>).payload.run(function () {
                newState.cart.find(it => it.product.id === this.product.id)?.let(({ product, quantity }) => {
                    newState.cart.filter(it => it.product.id !== product.id)
                    newState.cartItems -= quantity
                    newState.cartTotal -= product.price * quantity
                })
            })
            return newState
        case CartActionType.CART_CLEAR:
            return { ...state, cart: [], cartItems: 0, cartTotal: 0 }
    }
    return state
}