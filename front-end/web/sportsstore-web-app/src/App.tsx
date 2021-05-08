import React from "react"
import { Provider } from "react-redux"
import { sportsStoreDataStore } from "./data/DataStore"
import { ShopConnector } from "./shop/ShopConnector"
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom"

export const App = () =>
    <Provider store={sportsStoreDataStore}>
        <Router>
            <Switch>
                <Route path="/shop" component={ShopConnector}/>
                <Redirect to="/shop"/>
            </Switch>
        </Router>
    </Provider>