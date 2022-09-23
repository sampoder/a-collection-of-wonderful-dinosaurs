import PhotoCell from 'src/components/Photo/PhotoCell'

type PhotoPageProps = {
  id: number
}

const PhotoPage = ({ id }: PhotoPageProps) => {
  return <PhotoCell id={id} />
}

export default PhotoPage
