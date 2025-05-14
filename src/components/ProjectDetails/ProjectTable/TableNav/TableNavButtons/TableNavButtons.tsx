import GiveReportButton from '@/components/Buttons/GiveReportButton'
import ChangeProjectStatus from '@/components/ProjectDetails/ChangeProjectStatus'
import { buttonsCard } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import React from 'react'
import { TableButtonsProps } from './types'
import DownloadMenu from '@/components/Buttons/DownloadMenu'

const TableNavButtons = ({
  readOnlyElement,
  manager,
  information,
  fetchInformation,
  projectId,
  changeReadOnlyElement,
  reportId,
}: TableButtonsProps) => {
  return (
    !readOnlyElement && (
      <Card
        elevation={0}
        sx={{
          ...buttonsCard,
          color: 'font.gray',
          maxHeight: 50,
          alignItems: 'center',
        }}
      >
        {reportId ? <DownloadMenu reportId={reportId} /> : ''}

        {manager && (
          <ChangeProjectStatus
            information={information}
            projectId={projectId}
            fetchInformation={fetchInformation}
          />
        )}
        <GiveReportButton
          handleOpen={() => changeReadOnlyElement('ADD_REPORT')}
        />
      </Card>
    )
  )
}

export default TableNavButtons
