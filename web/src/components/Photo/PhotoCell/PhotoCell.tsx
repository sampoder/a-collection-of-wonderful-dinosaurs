import type { FindPhotoById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Photo from 'src/components/Photo/Photo'

export const QUERY = gql`
  query FindPhotoById($id: Int!) {
    photo: photo(id: $id) {
      id
      photo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Photo not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ photo }: CellSuccessProps<FindPhotoById>) => {
  return <Photo photo={photo} />
}
