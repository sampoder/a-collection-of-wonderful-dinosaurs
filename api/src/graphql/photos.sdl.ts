export const schema = gql`
  type Photo {
    id: Int!
    photo: String!
  }

  type Query {
    photos: [Photo!]! @requireAuth
    photo(id: Int!): Photo @requireAuth
  }

  input CreatePhotoInput {
    photo: String!
  }

  input UpdatePhotoInput {
    photo: String
  }

  type Mutation {
    createPhoto(input: CreatePhotoInput!): Photo! @requireAuth
    updatePhoto(id: Int!, input: UpdatePhotoInput!): Photo! @requireAuth
    deletePhoto(id: Int!): Photo! @requireAuth
  }
`
