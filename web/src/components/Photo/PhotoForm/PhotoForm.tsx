import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPhotoById, UpdatePhotoInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormPhoto = NonNullable<EditPhotoById['photo']>

interface PhotoFormProps {
  photo?: EditPhotoById['photo']
  onSave: (data: UpdatePhotoInput, id?: FormPhoto['id']) => void
  error: RWGqlError
  loading: boolean
}

const PhotoForm = (props: PhotoFormProps) => {
  const onSubmit = (data: FormPhoto) => {
  
    
    
  
    props.onSave(data, props?.photo?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPhoto> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="photo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          💾 Dinosaur Image URL
        </Label>
        
          <TextField
            name="photo"
            defaultValue={props.photo?.photo}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="photo" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PhotoForm
