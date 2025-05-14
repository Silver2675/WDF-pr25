import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../validation'

export interface Phases {
  id: number
  name: string
}

export interface PhaseProps<T extends FieldValues> {
  control: Control<FormSchemaReport | T>
  errors?: FieldErrors<FormSchemaReport | T>
  projectPhase?: string | number | null
}
