import { Project } from './types'

export const getOptions = (projects: Project[]) =>
  projects.map((project) => ({ label: project.title, value: project.id }))
