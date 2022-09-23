import EditPhotoCell from 'src/components/Photo/EditPhotoCell'

type PhotoPageProps = {
  id: number
}

const EditPhotoPage = ({ id }: PhotoPageProps) => {
  return <EditPhotoCell id={id} />
}

export default EditPhotoPage
