import { Redirect, Route, Switch } from "react-router-dom"
import { loadData } from "../data/ActionCreators"
import { Product, ShopState } from "../data/ShopState"
import { Shop } from "./Shop"
import { useEffect } from "react"
import { DataType } from "../data/Types"
import { connect } from "react-redux"
import { RootState } from "../data/DataStore"

const mapStateToProps = (state: RootState) => ({
    ...state // Map all the state
} as ShopState)

const mapDispatchToProps = {
    loadData
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof mapDispatchToProps

interface ShopProps {
    categories: string[]
    products: Product[]
}

type Props = StateProps & DispatchProps & ShopProps

const filterProductsByCategory = (products: Product[] = [], category?: string) =>
    (!category || category === "All")
        ? products
        : products.filter(it => it.category.toLowerCase() === category.toLowerCase())

export const ShopConnector =
    connect<StateProps, DispatchProps, ShopProps, RootState>(mapStateToProps, mapDispatchToProps)((props: Props) => {
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