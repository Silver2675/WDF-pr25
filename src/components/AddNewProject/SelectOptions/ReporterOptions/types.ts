import { ReadOnlyElement } from '@/components/ProjectDetails/ProjectTable/types'
import { FieldValues, Control, FieldErrors, Path } from 'react-hook-form'

export interface Reporter {
  id: number
  givenName: string
  surname: string
}

export interface ReporterProps<T extends FieldValues> {
  control: Control<T>
  errors: FieldErrors<T>
  name: Path<T>
  readOnlyElement?: ReadOnlyElement
}
