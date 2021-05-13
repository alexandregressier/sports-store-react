import { fromArray } from "fp-ts/NonEmptyArray"
import * as O from "fp-ts/lib/Option"
import { pipe } from "fp-ts/function"
import { Product } from "../redux/domain"

export const ProductList = (props: {
    products: Product[],
    addToCart: any,
}) =>
    pipe(
        fromArray(props.products),
        O.map(it => it.map(product =>
            <div key={product.id} className="card m-1 p-1 bg-light">
                <h4>
                    {product.name}
                    <span className="badge badge-pill badge-primary float-right">
                        ${product.price.toFixed()}
                    </span>
                </h4>
                <div className="card-text bg-white p-1">
                    {product.description}
                    <button className="btn btn-success btn-sm float-right" onClick={() => props.addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        )),
        O.fold(
            () => <h5 className="p2">No Products</h5>,
            it => <>{it}</>
        ),
    )