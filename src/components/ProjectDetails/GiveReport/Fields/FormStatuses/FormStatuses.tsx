import { FormStatusesProps } from './types'
import { FieldValues } from 'react-hook-form'
import { getOptions } from './utils'
import ControlledSelect from '@/components/ControlledSelect'
import { statusStyles } from './const'
import { Chip } from '@mui/material'
import { RenderOptionType } from '@/components/ControlledSelect/types'
import { detailsInputLabel } from '@/styles/styles'

const FormStatuses = <T extends FieldValues>({
  control,
  errors,
  labelId,
  statuses,
}: FormStatusesProps<T>) => {
  const renderOption: RenderOptionType = (props, option) => (
    <li {...props} key={option.label + option.value}>
      <Chip
        key={`chip-${option.label}-${option.value}`}
        sx={statusStyles[option.label]}
        label={statusStyles[option.label]?.name}
      />
    </li>
  )

  return (
    <ControlledSelect
      control={control}
      renderOption={renderOption}
      options={getOptions(statuses)}
      name={labelId}
      label={''}
      errors={errors}
      detailsStyles={detailsInputLabel}
    />
  )
}

export default FormStatuses
