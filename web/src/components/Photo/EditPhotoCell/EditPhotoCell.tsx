import type { EditPhotoById, UpdatePhotoInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PhotoForm from 'src/components/Photo/PhotoForm'

export const QUERY = gql`
  query EditPhotoById($id: Int!) {
    photo: photo(id: $id) {
      id
      photo
    }
  }
`
const UPDATE_PHOTO_MUTATION = gql`
  mutation UpdatePhotoMutation($id: Int!, $input: UpdatePhotoInput!) {
    updatePhoto(id: $id, input: $input) {
      id
      photo
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ photo }: CellSuccessProps<EditPhotoById>) => {
  const [updatePhoto, { loading, error }] = useMutation(
    UPDATE_PHOTO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Photo updated')
        navigate(routes.photos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePhotoInput,
    id: EditPhotoById['photo']['id']
  ) => {
    updatePhoto({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Dinosaur #{photo?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PhotoForm photo={photo} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
