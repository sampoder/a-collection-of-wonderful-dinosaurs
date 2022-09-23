import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type PhotoLayoutProps = {
  children: React.ReactNode
}

const PhotosLayout = ({ children }: PhotoLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.photos()}
            className="rw-link"
          >
            🌈 🦕 ✨ A Collection of Wonderful Dinosaurs
          </Link>
        </h1>
        <Link
          to={routes.newPhoto()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Dinosaur
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PhotosLayout
