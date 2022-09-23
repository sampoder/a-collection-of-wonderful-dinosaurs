import { Set, Router, Route } from '@redwoodjs/router'
import PhotosLayout from 'src/layouts/PhotosLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PhotosLayout}>
        <Route path="/new" page={PhotoNewPhotoPage} name="newPhoto" />
        <Route path="/{id:Int}/edit" page={PhotoEditPhotoPage} name="editPhoto" />
        <Route path="/{id:Int}" page={PhotoPhotoPage} name="photo" />
        <Route path="/" page={PhotoPhotosPage} name="photos" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
