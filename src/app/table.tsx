import React, { ReactElement } from "react"
import { DataTable } from "../lib"
import { User } from "./utils"
import "./styles.css"

const headers = ["id", "name", "gender"]
const data: User[] = [
  { id: "1", name: "Peter", gender: "M" },
  { id: "2", name: "Jake", gender: "M" },
  { id: "3", name: "Megan", gender: "F" },
]

const getCellColor = (name: string, { id }: User): string | undefined =>
  name === "name" && id === "2" ? "red" : undefined

const Actions = (user: User) => <button onClick={() => console.log(user)}>Action</button>

const getCellValue = (name: string, value: any): string => {
  if (name !== "sex") {
    return value
  }

  switch (value) {
    case "M":
      return "Male"
    case "F":
      return "Female"
    default:
      return ""
  }
}

const handleClick = ({ id }: User) => console.log(`Row with id ${id} was clicked`)

export const Table = (): ReactElement => (
  <DataTable
    headers={headers}
    data={data}
    actions={Actions}
    handleRowClick={handleClick}
    getCellColor={getCellColor}
    getValue={getCellValue}
  />
)
