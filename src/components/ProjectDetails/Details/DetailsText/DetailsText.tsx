import ControlledTextInput from '@/components/ControlledInput/ControlledTextInput'
import React from 'react'
import { StatusDetailsCards } from '../utils'
import { FieldValues } from 'react-hook-form'
import { DetailsTextProps } from './types'
import { readOnlyStatus } from '../../utils'

const DetailsText = <T extends FieldValues>({
  reportId,
  control,
  projectReport,
  errors,
  readOnlyElement,
  titleName,
  titleId,
}: DetailsTextProps<T>) => {
  return (
    <ControlledTextInput
      key={`details-of-${reportId}-${titleName}`}
      control={control}
      errors={errors}
      name={titleId}
      readOnly={readOnlyStatus(readOnlyElement)}
      value={
        !projectReport ? '' : projectReport[titleId as keyof StatusDetailsCards]
      }
    />
  )
}

export default DetailsText
