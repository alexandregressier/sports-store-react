import React from "react"
import { createGlobalStyle } from "styled-components"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"

const GlobalStyle = createGlobalStyle`
  body {
      min-height: 100vh;
      margin: 0;

      color: black;
      background-color: white;

      font-family: "Kaushan Script", serif;
  }
`

export const App = () =>
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    </>