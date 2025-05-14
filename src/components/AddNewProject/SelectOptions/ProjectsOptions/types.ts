import { Control, FieldErrors } from 'react-hook-form'
import { FormSchema } from '../../Form/validation'

export interface Project {
  id: number
  title: string
}

export interface Customer {
  id: number
  name: string
}

export interface ProjectsOptionsProps {
  control: Control<FormSchema>
  idValue: string
  errors: FieldErrors<FormSchema>
}
