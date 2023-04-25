import React, { ReactElement, useState } from "react"
import { DataTable } from "../lib"
import { User } from "./utils"

const headers = ["id", "name", "gender"]
const data: User[] = [
  { id: "1", name: "Peter", gender: "M" },
  { id: "2", name: "Jake", gender: "M" },
  { id: "3", name: "Megan", gender: "F" },
]

const getCellColor = (name: string, { id }: User): string | undefined =>
  name === "name" && id === "2" ? "red" : undefined

const getCellValue = (name: string, value: unknown): string => {
  if (name !== "gender") {
    return `${value}`
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

export const Table = (): ReactElement => {
  const [text, setText] = useState("")

  const Actions = ({ name }: User) => (
    <button onClick={() => setText(`Use clicked "action" for user with name ${name}`)}>Action</button>
  )

  const handleClick = ({ id }: User) => setText(`Row with id ${id} was clicked`)

  return (
    <div>
      <DataTable
        headers={headers}
        data={data}
        actions={Actions}
        handleRowClick={handleClick}
        getCellColor={getCellColor}
        getValue={getCellValue}
      />
      <p className="table-caption">{text}</p>
    </div>
  )
}
