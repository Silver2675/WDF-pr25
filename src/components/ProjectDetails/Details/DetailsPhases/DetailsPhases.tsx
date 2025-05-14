import Phase from '@/components/ProjectDetails/GiveReport/Fields/Phase/Phase'
import Phases from '@/components/ProjectDetails/Phases'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { DetailsPhasesProps } from './types'
import { readOnlyStatus } from '../../utils'

const DetailsPhases = <T extends FieldValues>({
  readOnlyElement,
  reportId,
  projectReport,
  control,
  errors,
}: DetailsPhasesProps<T>) => {
  return readOnlyStatus(readOnlyElement) ? (
    <Phases
      key={`phase-${reportId}`}
      status={projectReport?.projectPhase}
      id={reportId}
    />
  ) : (
    <Phase
      control={control}
      errors={errors}
      projectPhase={projectReport?.projectPhase}
    />
  )
}

export default DetailsPhases
