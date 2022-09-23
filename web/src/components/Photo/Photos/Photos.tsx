import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Photo/PhotosCell'

import type { DeletePhotoMutationVariables, FindPhotos } from 'types/graphql'

const DELETE_PHOTO_MUTATION = gql`
  mutation DeletePhotoMutation($id: Int!) {
    deletePhoto(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (value: string | number) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const PhotosList = ({ photos }: FindPhotos) => {
  const [deletePhoto] = useMutation(DELETE_PHOTO_MUTATION, {
    onCompleted: () => {
      toast.success('Photo deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePhotoMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete dinosaur ' + id + '?')) {
      deletePhoto({ variables: { id } })
    }
  }

  return (
    <div className="dino-grid">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.photo} />
            <nav className="rw-table-actions">
              <Link
                to={routes.editPhoto({ id: photo.id })}
                title={'Edit Dinosaur ' + photo.id}
                className="rw-button rw-button-small rw-button-blue"
              >
                🎨 Edit
              </Link>
              <button
                type="button"
                title={'Delete Dinosaur ' + photo.id}
                className="rw-button rw-button-small rw-button-red"
                onClick={() => onDeleteClick(photo.id)}
              ><span>
                🗡️ <span className="strikethrough">Murder</span>{' '}Delete
                </span>
              </button>
            </nav>
          </div>
        ))}
    </div>
  )
}

export default PhotosList
