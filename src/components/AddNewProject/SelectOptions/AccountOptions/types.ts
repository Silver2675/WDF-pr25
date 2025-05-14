import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../Form/validation'

export interface Account {
  id: number
  name: string
}

export interface AccountProps {
  control: Control<FormSchema>
  errors: FieldErrors<FormSchema>
  name: 'accountId'
  editedAccountName?: string
}
