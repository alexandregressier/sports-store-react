import * as React from "react"
import { CategoryNavigation } from "./CategoryNavigation"
import { ProductList } from "./ProductList"
import { CartSummary } from "./CartSummary"
import { Props } from "./Connector"

export const Shop = (props: Props) =>
    <div className="container-fluid">
        <div className="row">
            <div className="col bg-dark text-white">
                <div className="navbar-brand">SPORTS STORE</div>
                <CartSummary {...props} />
            </div>
        </div>
        <div className="row">
            <div className="col-3 p-2">
                <CategoryNavigation baseUrl="/shop/products" categories={props.categories}/>
            </div>
            <div className="col-9 p-2">
                <ProductList products={props.products} addToCart={props.addToCart}/>
            </div>
        </div>
    </div>