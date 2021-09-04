import React from "react"
import { DataTable } from "./lib"

type User = {
  id: string
  name: string
  sex: string
}

const headers = ["id", "name", "sex"]
const data: User[] = [
  { id: "1", name: "Peter", sex: "M" },
  { id: "2", name: "Jake", sex: "M" },
  { id: "3", name: "Megan", sex: "F" },
]

const getCellColor = (name: string, { id }: User): string | undefined => name === "name" && id === "2" ? "red" : undefined

const Actions = (user: User) => <button onClick={() => console.log(user)}>Action</button>

const getCellValue = (name: string, value: any): string => {
  if (name !== "sex") {
    return value
  }

  switch(value) {
    case "M":
      return "Male"
    case "F":
      return "Female"
    default:
      return ""
  }
}

export const App = () => {
  const handleClick = ({ id }: User) => console.log(`Row with id ${id} was clicked`)

  return (
    <div>
      <h1>Hello World</h1>

      <DataTable headers={headers} data={data} actions={Actions} handleRowClick={handleClick} getCellColor={getCellColor} getValue={getCellValue} />
    </div>
  )
}
