import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const photos: QueryResolvers['photos'] = () => {
  return db.photo.findMany()
}

export const photo: QueryResolvers['photo'] = ({ id }) => {
  return db.photo.findUnique({
    where: { id },
  })
}

export const createPhoto: MutationResolvers['createPhoto'] = ({ input }) => {
  return db.photo.create({
    data: input,
  })
}

export const updatePhoto: MutationResolvers['updatePhoto'] = ({
  id,
  input,
}) => {
  return db.photo.update({
    data: input,
    where: { id },
  })
}

export const deletePhoto: MutationResolvers['deletePhoto'] = ({ id }) => {
  return db.photo.delete({
    where: { id },
  })
}
