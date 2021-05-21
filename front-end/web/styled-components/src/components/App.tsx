import React from "react"
import { Button } from "components/common"
import { createGlobalStyle } from "styled-components"

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
        <h1>styled-components</h1>
        <Button>Primary Button</Button>
        <Button secondary>Secondary Button</Button>
    </>