import type { Prisma, Photo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PhotoCreateArgs>({
  photo: {
    one: { data: { photo: 'String852953' } },
    two: { data: { photo: 'String6500048' } },
  },
})

export type StandardScenario = ScenarioData<Photo, 'photo'>
