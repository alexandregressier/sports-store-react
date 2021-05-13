import { Redirect, Route, Switch } from "react-router-dom"
import { DataType, loadData } from "../redux/actions/ShopActionCreators"
import { Product } from "../redux/domain"
import { Shop } from "./Shop"
import { useEffect } from "react"
import { connect } from "react-redux"
import { addToCart, clearCart, removeFromCart, updateCartQuantity } from "../redux/actions/CartActionCreators"
import { SportsStoreState } from "../redux/state"

const mapStateToProps = (state: SportsStoreState) => ({ ...state } as SportsStoreState)
const mapDispatchToProps = { loadData, addToCart, updateCartQuantity, removeFromCart, clearCart }

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export type Props = StateProps & DispatchProps

const filterProductsByCategory = (products: Product[] = [], category?: string) =>
    (!category || category === "All")
        ? products
        : products.filter(it => it.category.toLowerCase() === category.toLowerCase())

export const Connector =
    connect(mapStateToProps, mapDispatchToProps)((props: Props) => {
        useEffect(() => {
            props.loadData(DataType.CATEGORIES)
            props.loadData(DataType.PRODUCTS)
        })
        return <Switch>
            <Route path="/shop/products/:category?" render={(routeProps) =>
                <Shop {...props} {...routeProps}
                      products={filterProductsByCategory(props.products, routeProps.match.params.category)}/>
            }/>
            <Redirect to="/shop/products"/>
        </Switch>
    })