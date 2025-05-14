import { ReadOnlyElement } from '@/components/ProjectDetails/ProjectTable/types'
import { FieldValues, Control, FieldErrors, Path } from 'react-hook-form'

export interface DeliveryManager {
  id: number
  givenName: string
  surname: string
  isJiter: boolean
}

export interface DeliveryManagerProps<T extends FieldValues> {
  control: Control<T>
  errors: FieldErrors<T>
  name: Path<T>
  readOnlyElement?: ReadOnlyElement
}
