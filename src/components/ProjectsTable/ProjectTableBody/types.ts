import { MyProjectsType } from '@/components/MyProjects/types'
import { Overview } from '@/components/ProjectsOverviews/types'

export interface tableBodyProps {
  isOverviews?: boolean
  overviews?: Overview[]
  projects?: MyProjectsType[]
  isActive: boolean
}
