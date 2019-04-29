import { graphql } from "react-apollo"
import gql from "graphql-tag"

interface ResponseType {
  remoteValue: number
}

export interface withDataProps {
  loading: boolean
  remoteValue: number | undefined
}

export const withData = graphql<{}, ResponseType, {}, withDataProps>(
  gql`
    query getRemoteValue {
      remoteValue
    }
  `,
  {
    props: ({ data }) =>
      data == null
        ? { loading: false, remoteValue: undefined }
        : {
            loading: data.loading,
            remoteValue: data.remoteValue
          }
  }
)
