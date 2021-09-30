import React, { ReactElement } from "react"

export const AppVersion = (): ReactElement => {
  const version = process.env.CIRCLE_TAG

  if (!version) {
    return <></>
  }

  return <p>Latest version: {version}</p>
}
