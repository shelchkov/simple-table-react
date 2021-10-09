import React from "react"
import { Table } from "./table"

export const Tables = () => (
  <div>
    <Table />

    <div className="customised-table">
      <p className="table-title">Customised styles</p>
      <Table />
    </div>
  </div>
)
