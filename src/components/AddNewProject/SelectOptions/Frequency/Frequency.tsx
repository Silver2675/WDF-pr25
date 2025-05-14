import React from 'react'
import ControlledSelect from '@/components/ControlledSelect'
import { FieldValues } from 'react-hook-form'
import { frequencies } from './const'
import { formInputLabel } from '@/styles/formStyles'
import { detailsInputLabel } from '@/styles/styles'
import { FrequencyProps } from './types'

const Frequency = <T extends FieldValues>({
  control,
  errors,
  name,
  readOnlyElement,
}: FrequencyProps<T>) => {
  return (
    <ControlledSelect
      control={control}
      options={frequencies}
      name={name}
      label="Reporting Frequency"
      errors={errors}
      required
      detailsStyles={
        readOnlyElement === 'EDITING_INFORMATION'
          ? detailsInputLabel
          : formInputLabel
      }
    />
  )
}

export default Frequency
