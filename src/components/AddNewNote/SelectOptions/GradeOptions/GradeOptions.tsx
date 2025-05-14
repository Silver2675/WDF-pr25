'use client'

import React from 'react'
import ControlledSelect from '@/components/ControlledSelect'
import { GradesOptionsProps } from './types'
import { formInputLabel } from '@/styles/formStyles'

const gradesOptions = [
  { label: '1 - Unsatisfactory', value: '1' },
  { label: '2 - Poor', value: '2' },
  { label: '3 - Needs Improvement', value: '3' },
  { label: '4 - Satisfactory', value: '4' },
  { label: '5 - Good', value: '5' },
  { label: '6 - Excellent', value: '6' },
]

const GradesOptions = ({ control, errors, disabled }: GradesOptionsProps) => {
  return (
    <ControlledSelect
      control={control}
      options={gradesOptions}
      name="grade"
      label="Grade"
      errors={errors}
      disabled={disabled}
      detailsStyles={formInputLabel}
    />
  )
}

export default GradesOptions
