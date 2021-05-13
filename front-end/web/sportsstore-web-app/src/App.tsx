import React from "react"
import { Provider } from "react-redux"
import { sportsStoreDataStore } from "./redux/store"
import { Connector } from "./shop/Connector"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"

export const App = () =>
    <Provider store={sportsStoreDataStore}>
        <Router>
            <Switch>
                <Route path="/shop" component={Connector}/>
                <Redirect to="/shop"/>
            </Switch>
        </Router>
    </Provider>