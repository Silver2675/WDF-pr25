import { DetailsProps } from './types'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchemaReport, schema } from '../GiveReport/validation'
import { Box } from '@mui/material'
import DetailsCards from './DetailsCards'
import DetailsRow from './DetailsRow'
import DetailsStatusCards from './DetailsStatusCards'
import { reportDefaultValues } from './utils'
import { useEffect } from 'react'
import CancelSaveChanges from './CancelSaveChanges'
import { readOnlyStatus } from '../utils'

const Details = ({
  projectReport,
  reportId,
  projectId,
  fetchReport,
  changeReadOnlyElement,
  readOnlyElement,
  setCurrentReportId,
  reportsDates,
  information,
  statuses,
  fetchNewestReport,
  fetchInformation,
}: DetailsProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchemaReport>({
    resolver: zodResolver(schema),
    defaultValues: reportDefaultValues(projectReport, readOnlyElement),
  })

  useEffect(() => {
    if (!readOnlyStatus(readOnlyElement)) {
      reset(reportDefaultValues(projectReport, readOnlyElement))
    }
  }, [projectReport, reset, readOnlyElement])

  return (
    <form>
      <Box
        sx={{
          px: 2,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <DetailsRow
            projectReport={projectReport}
            setCurrentReportId={setCurrentReportId}
            reportId={reportId}
            projectId={projectId}
            changeReadOnlyElement={() =>
              changeReadOnlyElement('EDITING_REPORT')
            }
            readOnlyElement={readOnlyElement}
            control={control}
            reportsDates={reportsDates}
            information={information}
            errors={errors}
          />
          <CancelSaveChanges
            handleSubmit={handleSubmit}
            readOnlyElement={readOnlyElement}
            reportId={reportId}
            projectReport={projectReport}
            projectId={projectId}
            changeReadOnlyElement={changeReadOnlyElement}
            fetchReport={fetchReport}
            fetchInformation={fetchInformation}
            fetchNewestReport={fetchNewestReport}
          />
        </Box>

        <DetailsStatusCards
          projectReport={projectReport}
          reportId={reportId}
          readOnlyElement={readOnlyElement}
          control={control}
          statuses={statuses}
          errors={errors}
        />
        <DetailsCards
          projectReport={projectReport}
          reportId={reportId}
          readOnlyElement={readOnlyElement}
          control={control}
          errors={errors}
        />
      </Box>
    </form>
  )
}

export default Details
