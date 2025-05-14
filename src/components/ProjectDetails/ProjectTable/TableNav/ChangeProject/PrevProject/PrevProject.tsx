import PrevProjectButton from '@/components/Buttons/PrevProjectButton'
import { Overview } from '@/components/ProjectsOverviews/types'
import { routes } from '@/constants/routes'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  projectId: string
  overviews: Overview[]
}

const PrevProject = ({ projectId, overviews }: Props) => {
  const router = useRouter()
  const prevId = overviews
    ?.map((project) => project.id)
    .sort((a, b) => (a < b ? 1 : -1))
    .find((id) => id < parseInt(projectId))
  const moveToPrevProject = () => router.push(routes.project(prevId))

  return (
    <PrevProjectButton
      handleClick={moveToPrevProject}
      prevId={prevId}
      tooltipTitle="Previous Project"
    />
  )
}

export default PrevProject
