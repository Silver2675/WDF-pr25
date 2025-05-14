import { Box } from '@mui/material'
import React from 'react'
import { labelsConfig } from '../../const'
import { FieldValues } from 'react-hook-form'
import DetailsNumbers from '../../DetailsNumbers'
import DetailsDate from '../../DetailsDate'
import DetailsPhases from '../../DetailsPhases/DetailsPhases'
import { DetailsReportProps } from './types'
import { readOnlyStatus } from '@/components/ProjectDetails/utils'

const DetailsReportInformation = <T extends FieldValues>({
  projectReport,
  reportId,
  control,
  errors,
  readOnlyElement,
  reportsDates,
  setCurrentReportId,
}: DetailsReportProps<T>) => {
  return labelsConfig.map((label, index) => (
    <Box
      key={label.labelName}
      sx={{
        display:
          (projectReport?.[label.labelId] !== undefined &&
            projectReport?.[label.labelId] !== null) ||
          !readOnlyStatus(readOnlyElement)
            ? 'inline-flex'
            : 'none',
        flexDirection: 'column',
      }}
    >
      {!label.phase && !label.reportDate && (
        <DetailsNumbers
          projectReport={projectReport}
          reportId={reportId}
          control={control}
          errors={errors}
          readOnlyElement={readOnlyElement}
          titleName={label.labelName}
          titleId={label.labelId}
          index={index}
        />
      )}
      {label.reportDate && (
        <DetailsDate
          projectReport={projectReport}
          reportId={reportId}
          control={control}
          errors={errors}
          readOnlyElement={readOnlyElement}
          titleName={label.labelName}
          titleId={label.labelId}
          index={index}
          reportsDates={reportsDates}
          setCurrentReportId={setCurrentReportId}
        />
      )}

      {label.phase && (
        <DetailsPhases
          readOnlyElement={readOnlyElement}
          projectReport={projectReport}
          reportId={reportId}
          control={control}
          errors={errors}
        />
      )}
    </Box>
  ))
}

export default DetailsReportInformation
