import EditButton from '@/components/Buttons/EditButton'
import DetailsProjectInformation from '@/components/ProjectDetails/Details/DetailsProjectInformation'
import EditInformation from '@/components/ProjectDetails/EditInformation'
import { Box, Grid } from '@mui/material'
import { ProjectInfoProps } from './types'
import DetailsTechnologies from '@/components/ProjectDetails/Details/DetailsTechnologies/DetailsTechnologies'
import DetailsBusinessContext from '@/components/ProjectDetails/Details/DetailsBusinessContext/DetailsBusinessContext'
import DetailsTeam from '@/components/ProjectDetails/Details/DetailsTeam/DetailsTeam'

const ProjectInformation = ({
  readOnlyElement,
  projectId,
  information,
  team,
  fetchInformation,
  fetchTeam,
  changeReadOnlyElement,
  manager,
}: ProjectInfoProps) => {
  return readOnlyElement === 'EDITING_INFORMATION' ? (
    <EditInformation
      projectId={projectId}
      information={information}
      fetchInformation={fetchInformation}
      fetchTeam={fetchTeam}
      changeReadOnlyElement={() => changeReadOnlyElement(null)}
      readOnlyElement={readOnlyElement}
      team={team}
    />
  ) : (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Grid item xs>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <DetailsProjectInformation
              information={information}
              projectId={projectId}
              startIndex={0}
              endIndex={2}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <DetailsProjectInformation
              information={information}
              projectId={projectId}
              startIndex={2}
              endIndex={6}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <DetailsTechnologies
              information={information}
              label="Technologies:"
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <DetailsTeam team={team} label="Team Members:" />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <DetailsBusinessContext
              information={information}
              label="Business Context:"
            />
          </Box>
        </Box>
      </Grid>

      {manager && !readOnlyElement && (
        <Grid
          item
          sx={{
            position: 'absolute',
            right: { xs: '55%', md: '55%', lg: '60%', xl: '55%' },
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <EditButton
              handleOpen={() => changeReadOnlyElement('EDITING_INFORMATION')}
            />
          </Box>
        </Grid>
      )}
    </Box>
  )
}

export default ProjectInformation
