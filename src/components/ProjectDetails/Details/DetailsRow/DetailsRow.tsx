import { Box } from '@mui/material'
import React from 'react'
import DetailsReportInformation from './DetailsReportInformation'
import DetailsNextReport from './DetailsNextReport/DetailsNextReport'
import EditButton from '@/components/Buttons/EditButton'
import { DetailsRowProps } from './types'
import { FieldValues } from 'react-hook-form'
import ChangeReport from '../../ProjectTable/TableNav/ChangeReport/ChangeReport'

const DetailsRow = <T extends FieldValues>({
  projectReport,
  setCurrentReportId,
  reportId,
  projectId,
  control,
  errors,
  readOnlyElement,
  reportsDates,
  changeReadOnlyElement,
  information,
}: DetailsRowProps<T>) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {projectReport && (
        <DetailsNextReport
          projectId={projectId}
          information={information}
          readOnlyElement={readOnlyElement}
          projectReport={projectReport}
        />
      )}

      <DetailsReportInformation
        projectReport={projectReport}
        setCurrentReportId={setCurrentReportId}
        reportId={reportId}
        control={control}
        readOnlyElement={readOnlyElement}
        errors={errors}
        reportsDates={reportsDates}
      />
      {!readOnlyElement && (
        <EditButton
          handleOpen={() => changeReadOnlyElement('EDITING_REPORT')}
        />
      )}
      {projectReport && !readOnlyElement ? (
        <ChangeReport
          setCurrentReportId={setCurrentReportId}
          reportsDates={reportsDates}
          projectReport={projectReport}
        />
      ) : null}
    </Box>
  )
}

export default DetailsRow
