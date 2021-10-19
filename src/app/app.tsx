import React from "react"
import { AppVersion } from "./app-version"
import "./styles.css"
import { Tables } from "./tables"

export const App = () => (
  <div className="main">
    <p className="title">Simple Table React</p>

    <AppVersion />

    <Tables />
  </div>
)
