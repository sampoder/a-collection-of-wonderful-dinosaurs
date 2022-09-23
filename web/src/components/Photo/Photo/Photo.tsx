import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { DeletePhotoMutationVariables, FindPhotoById } from 'types/graphql'

const DELETE_PHOTO_MUTATION = gql`
  mutation DeletePhotoMutation($id: Int!) {
    deletePhoto(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime?: string) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

interface Props {
  photo: NonNullable<FindPhotoById['photo']>
}

const Photo = ({ photo }: Props) => {
  const [deletePhoto] = useMutation(DELETE_PHOTO_MUTATION, {
    onCompleted: () => {
      toast.success('Photo deleted')
      navigate(routes.photos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePhotoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete dinosaur ' + id + '?')) {
      deletePhoto({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Photo {photo.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{photo.id}</td>
            </tr><tr>
              <th>Photo</th>
              <td>{photo.photo}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPhoto({ id: photo.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(photo.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Photo
