'use client'

import { Box } from '@mui/material'
import { boxContainer } from '@/styles/styles'
import Statuses from './Statuses/Statuses'
import { ProjectStatuses } from '../types'

interface Props {
  id: number
  statuses?: ProjectStatuses
}

const OverallStatus = ({ id, statuses }: Props) => {
  return (
    <Box sx={boxContainer} key={`overall-status-${id}`}>
      <Statuses
        key={`plan-status-report-${id}`}
        status={statuses?.planTimeStatus}
        name={'Plan'}
      />
      <Statuses
        key={`scope-status-report-${id}`}
        status={statuses?.scopeStatus}
        name={'Scope'}
      />
      <Statuses
        key={`cost-status-report-${id}`}
        status={statuses?.costStatus}
        name={'Cost'}
      />
      <Statuses
        key={`risk-status-report-${id}`}
        status={statuses?.riskStatus}
        name={'Risk'}
      />
      <Statuses
        key={`resources-status-report-${id}`}
        status={statuses?.resourcesStatus}
        name={'Resources'}
      />
    </Box>
  )
}

export default OverallStatus
