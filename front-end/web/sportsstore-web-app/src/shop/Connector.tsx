import { Redirect, Route, Switch } from "react-router-dom"
import { loadData } from "../redux/actions/ShopActionCreators"
import { DataType, Product } from "../redux/domain"
import { Shop } from "./Shop"
import { Component } from "react"
import { connect } from "react-redux"
import { addToCart, clearCart, removeFromCart, updateCartQuantity } from "../redux/actions/CartActionCreators"
import { SportsStoreState } from "../redux/state"
import { CartDetails } from "./CartDetails"

const mapStateToProps = (state: SportsStoreState) => ({ ...state } as SportsStoreState)
const mapDispatchToProps = { loadData, addToCart, updateCartQuantity, removeFromCart, clearCart }

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

export type Props = StateProps & DispatchProps

const filterProductsByCategory = (products: Product[] = [], category?: string) =>
    (!category || category === "All")
        ? products
        : products.filter(it => it.category.toLowerCase() === category.toLowerCase())

export const Connector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component<Props> {
        componentDidMount() {
            this.props.loadData(DataType.CATEGORIES)
            this.props.loadData(DataType.PRODUCTS)
        }
        render = () => <Switch>
            <Route path="/shop/products/:category?" render={routeProps =>
                <Shop {...this.props} {...routeProps} products={
                    filterProductsByCategory(this.props.products, routeProps.match.params.category)}/>
            }/>
            <Route path="/shop/cart" render={routeProps =>
                <CartDetails {...this.props} {...routeProps}/>
            }/>
            <Redirect to="/shop/products"/>
        </Switch>
    }
)