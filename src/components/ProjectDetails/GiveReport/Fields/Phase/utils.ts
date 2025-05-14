import { Phases } from './types'

export const getOptions = (phases: Phases[]) =>
  phases.map((phase) => ({ label: phase.name, value: phase.id }))
