import React, { useEffect, useState } from 'react'
import ControlledSelect from '@/components/ControlledSelect'
import { PhaseProps, Phases } from './types'
import { FieldValues } from 'react-hook-form'
import { getOptions } from './utils'
import { detailsInputLabel } from '@/styles/styles'
import { projectPhasesValues } from '@/components/ProjectDetails/const'

const Phase = <T extends FieldValues>({
  control,
  errors,
  projectPhase,
}: PhaseProps<T>) => {
  const [phases, setPhases] = useState<Phases[]>([])

  useEffect(() => {
    setPhases(projectPhasesValues)
  }, [])

  return (
    <ControlledSelect
      control={control}
      key={`phase-select-${projectPhase}`}
      options={getOptions(phases)}
      name={'projectPhase'}
      label={'Phase'}
      errors={errors}
      loading={false}
      detailsStyles={{ ...detailsInputLabel, width: '176px' }}
    />
  )
}

export default Phase
