import * as React from "react"
import { DataComponent } from "./DataComponent"

export const App = () => {
  return (
    <div>
      {/* Valid: `value` is DataComponent prop */}
      <DataComponent value={42} />

      {/* Invalid: `remoteValue` is injected by HOC */}
      <DataComponent remoteValue={42} />

      {/* Invalid: `invalid` isn't DataComponent prop */}
      <DataComponent invalid="xyz" />
    </div>
  )
}
