import { ReadOnlyElement } from '@/components/ProjectDetails/ProjectTable/types'
import { FieldValues, Control, FieldErrors, Path } from 'react-hook-form'

export interface TeamLeader {
  id: number
  givenName: string
  surname: string
  isJiter?: boolean
}

export interface OptionItem {
  label: string
  value: number
}

export interface TeamLeaderProps<T extends FieldValues> {
  control: Control<T>
  errors: FieldErrors<T>
  name: Path<T>
  readOnlyElement?: ReadOnlyElement
}
