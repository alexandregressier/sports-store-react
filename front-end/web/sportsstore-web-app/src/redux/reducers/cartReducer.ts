import { CartAction, removeFromCart } from "../actions/cartActions"
import "scope-extensions-js"
import { initState, SportsStoreState } from "../state"

export const cartReducer = (state: SportsStoreState = initState, action: CartAction): SportsStoreState => {
    const newState: SportsStoreState = { ...state }
    switch (action.type) {
        case "ADD_TO_CART":
            action.payload.let(({ product, quantity }) => {
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

        case "UPDATE_CART_QUANTITY":
            action.payload.let(({ product, quantity }) => {
                newState.cart = newState.cart.map(it => {
                    if (it.product.id === product.id) {
                        (quantity - it.quantity).let(quantityDiff => {
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

        case "REMOVE_FROM_CART":
            (action as ReturnType<typeof removeFromCart>).payload.run(function () {
                newState.cart.find(it => it.product.id === this.product.id)?.let(({ product, quantity }) => {
                    newState.cart = newState.cart.filter(it => it.product.id !== product.id)
                    newState.cartItems -= quantity
                    newState.cartTotal -= product.price * quantity
                })
            })
            return newState

        case "EMPTY_CART":
            return { ...state, cart: [], cartItems: 0, cartTotal: 0 }
    }
}