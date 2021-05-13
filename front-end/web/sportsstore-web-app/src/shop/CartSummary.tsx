import * as React from "react"
import { Link } from "react-router-dom"

export const CartSummary = (props: {
    cartItems: number
    cartTotal: number
}) => {
    const showSummary = () =>
        props.cartItems > 0
            ? <span>
                {props.cartItems} item(s),
                ${props.cartTotal.toFixed(2)}
            </span>
            : <span>Your cart: (empty)</span>

    const getLinkClasses = () =>
        `btn btn-sm bg-dark text-white ${props.cartItems === 0 ? "disabled": ""}`

    return <div className="float-right">
        <small>
            {showSummary()}
            <Link className={getLinkClasses()} to="/shop/cart">
                <i className="fa fa-shopping-cart"/>
            </Link>
        </small>
    </div>
}