import React from "react"
import { AppVersion } from "./app-version"
import { Tables } from "./tables"
import "./styles.css"

export const App = () => (
  <div className="main">
    <p className="title">Simple Table React</p>

    <AppVersion />

    <Tables />
  </div>
)
