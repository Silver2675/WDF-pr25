import { FieldValues, FieldPath, Control, FieldErrors } from 'react-hook-form'

export interface Option {
  label: string
  value: string | number
}
export interface ControlledSelectProps<
  T extends FieldValues,
  N extends FieldPath<T>
> {
  options: Option[]
  control: Control<T>
  name: N
  label: string
  errors?: FieldErrors<T>
  loading?: boolean
  renderOption?: RenderOptionType
  detailsStyles?: object
  required?: boolean
  defaultValue?: { label: string; value: number }
  disabled?: boolean
  freeSolo?: boolean
  onFocus?: () => void
}

export type RenderOptionType = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: Option
) => React.ReactNode
