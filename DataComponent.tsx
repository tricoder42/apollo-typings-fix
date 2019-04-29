import * as React from "react"
import { withData, withDataProps } from "./query"

type DataComponentProps = {
  value: number
} & withDataProps

export const DataComponent = withData(
  ({ remoteValue, value }: DataComponentProps) => (
    <div>
      Value: {value}, Remote Value: {remoteValue}
    </div>
  )
)
