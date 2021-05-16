import * as React from "react"
import { Product } from "../redux/domain"

interface Props {
    cart: { product: Product, quantity: number }[],
    cartTotal: number,
    updateCartQuantity: (product: Product, quantity: number) => any,
    removeFromCart: (product: Product) => any,
}

export const CartDetailsRows = (props: Props) => {
    const handleChange = (product: Product, e: React.FormEvent<HTMLInputElement>) => {
        props.updateCartQuantity(product, Number(e.currentTarget.value))
    }
    return (!props.cart || props.cart.length === 0)
        ? <tr>
            <td colSpan={5}>Your cart is empty</td>
        </tr>
        : <>
            {props.cart.map(({ product, quantity }) =>
                <tr key={product.id}>
                    <td><input type="number" min={1} max={999} value={quantity} onChange={e => handleChange(product, e)}/></td>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2)}</td>
                    <td>{(product.price * quantity).toFixed(2)}</td>
                    <td>
                        <button className="btn btn-sm btn-danger" onClick={() => props.removeFromCart(product)}>
                            Remove
                        </button>
                    </td>
                </tr>
            )}
            <tr>
                <th className="text-right" colSpan={3}>Total</th>
                <th colSpan={2}>{props.cartTotal.toFixed(2)}</th>
            </tr>
        </>
}