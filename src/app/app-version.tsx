import React, { ReactElement } from "react"

export const AppVersion = (): ReactElement => {
  const version = process.env.TAG_NAME
  let text = "Documentation"

  if (version) {
    text = `Latest version: ${version}`
  }

  return (
    <div className="app-version">
      <a href="https://www.npmjs.com/package/simple-table-react">{text}</a>
    </div>
  )
}
