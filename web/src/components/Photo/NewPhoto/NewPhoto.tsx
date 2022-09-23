import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PhotoForm from 'src/components/Photo/PhotoForm'

import type { CreatePhotoInput } from 'types/graphql'

const CREATE_PHOTO_MUTATION = gql`
  mutation CreatePhotoMutation($input: CreatePhotoInput!) {
    createPhoto(input: $input) {
      id
    }
  }
`

const NewPhoto = () => {
  const [createPhoto, { loading, error }] = useMutation(
    CREATE_PHOTO_MUTATION,
    {
      onCompleted: () => {
        toast.success('Photo created')
        navigate(routes.photos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePhotoInput) => {
    createPhoto({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">👋 New Dinosaur</h2>
      </header>
      <div className="rw-segment-main">
        <PhotoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPhoto
