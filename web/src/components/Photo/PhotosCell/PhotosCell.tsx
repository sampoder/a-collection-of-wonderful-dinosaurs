import type { FindPhotos } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Photos from 'src/components/Photo/Photos'

export const QUERY = gql`
  query FindPhotos {
    photos {
      id
      photo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No photos yet. '}
      <Link
        to={routes.newPhoto()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ photos }: CellSuccessProps<FindPhotos>) => {
  return <Photos photos={photos} />
}
