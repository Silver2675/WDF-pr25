import NextProjectButton from '@/components/Buttons/NextProjectButton'
import { Overview } from '@/components/ProjectsOverviews/types'
import { routes } from '@/constants/routes'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  projectId: string
  overviews: Overview[]
}

const NextProject = ({ projectId, overviews }: Props) => {
  const router = useRouter()
  const nextId = overviews
    ?.map((project) => project.id)
    .sort()
    .find((id) => id > parseInt(projectId))
  const moveToNextProject = () => router.push(routes.project(nextId))

  return (
    <NextProjectButton
      handleClick={moveToNextProject}
      nextId={nextId}
      tooltipTitle="Next Project"
    />
  )
}

export default NextProject
