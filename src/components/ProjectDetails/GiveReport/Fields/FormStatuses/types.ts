import {
  DetailsCardsType,
  StatusDetailsCards,
} from '@/components/ProjectDetails/Details/utils'
import { FieldValues, Control, FieldErrors } from 'react-hook-form'
import { FormSchemaReport } from '../../validation'

export interface Statuses {
  id: number
  name: string
  description: string
}

export interface FormStatusesProps<T extends FieldValues> {
  control: Control<FormSchemaReport | T>
  errors?: FieldErrors<FormSchemaReport | T>
  labelId: keyof DetailsCardsType | keyof StatusDetailsCards
  statuses: Statuses[]
}
