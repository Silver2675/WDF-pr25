import { tableNav } from '@/styles/tableStyles'
import { Card, Grid, Box } from '@mui/material'
import { useAuthorize } from '@/utils/useAuthorize'
import TableTitle from './TableTitle'
import TableNavButtons from './TableNavButtons'
import ChangeProject from './ChangeProject'
import { TableNavProps } from './types'
import ProjectInformation from './ProjectInformation'

const TableNav = ({
  readOnlyElement,
  information,
  team,
  projectId,
  fetchInformation,
  fetchTeam,
  changeReadOnlyElement,
  projectReport,
  setCurrentReportId,
  reportId,
}: TableNavProps) => {
  const { authorized: manager } = useAuthorize('Manager')

  return (
    <Card
      elevation={0}
      sx={{
        ...tableNav,
        flexDirection: 'column',
        alignItems: 'flex-start',
        px: 2,
        paddingTop: 3,
        paddingBottom: 2,
      }}
    >
      <Grid container alignItems="center">
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3.6,
            }}
          >
            <ChangeProject projectId={projectId} />
            <TableTitle information={information} />
          </Box>
        </Grid>

        <Grid item xs>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <TableNavButtons
              readOnlyElement={readOnlyElement}
              manager={manager}
              information={information}
              fetchInformation={fetchInformation}
              projectId={projectId}
              changeReadOnlyElement={() => changeReadOnlyElement('ADD_REPORT')}
              projectReport={projectReport}
              setCurrentReportId={setCurrentReportId}
              reportId={reportId}
            />
          </Box>
        </Grid>
      </Grid>

      <Box mt={2} sx={{ alignItems: 'flex-start' }}>
        <ProjectInformation
          readOnlyElement={readOnlyElement}
          projectId={projectId}
          information={information}
          team={team}
          fetchInformation={fetchInformation}
          fetchTeam={fetchTeam}
          changeReadOnlyElement={changeReadOnlyElement}
          manager={manager}
        />
      </Box>
    </Card>
  )
}

export default TableNav
