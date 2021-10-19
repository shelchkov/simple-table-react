import React, { ReactElement } from "react"

export const AppVersion = (): ReactElement => {
  const version = process.env.CIRCLE_TAG

  if (!version) {
    return <></>
  }

  return (
    <div className="app-version">
      <a href="https://www.npmjs.com/package/simple-table-react">Latest version: {version}</a>
    </div>
  )
}
