import { ReadOnlyElement } from '@/components/ProjectDetails/ProjectTable/types'
import { FieldValues, Control, FieldErrors, Path } from 'react-hook-form'

export interface Frequency {
  value: string
}

export interface FrequencyProps<T extends FieldValues> {
  control: Control<T>
  errors: FieldErrors<T>
  name: Path<T>
  readOnlyElement?: ReadOnlyElement
}
