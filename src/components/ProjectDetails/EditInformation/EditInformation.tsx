import { FormSchemaSelect, schema } from './validation'
import Frequency from '@/components/AddNewProject/SelectOptions/Frequency'
import ReporterOptions from '@/components/AddNewProject/SelectOptions/ReporterOptions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Card, Grid } from '@mui/material'
import { request } from '@/server/backend/types/request'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Body, EditInfoProps, TeamBody } from './types'
import { apiUrls } from '@/constants/apiUrls'
import { basicInfoEdit, buttonsCard } from '@/styles/tableStyles'
import SaveButton from '@/components/Buttons/SaveButton'
import CancelButton from '@/components/Buttons/CancelButton'
import { informationDefaultValues } from './utils'
import TechnologiesOptions from '@/components/AddNewProject/SelectOptions/TechnologiesOptions/TechnologiesOptions'
import BusinessContextField from '@/components/AddNewProject/SelectOptions/BusinessContextField/BusinessContextField'
import TeamMembersOptions from '@/components/AddNewProject/SelectOptions/TeamMembersOptions'
import TeamLeaderOptions from '@/components/AddNewProject/SelectOptions/TeamLeaderOptions/TeamLeaderOptions'

const EditInformation = ({
  projectId,
  fetchInformation,
  fetchTeam,
  changeReadOnlyElement,
  readOnlyElement,
  information,
  team,
}: EditInfoProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormSchemaSelect>({
    resolver: zodResolver(schema),
    defaultValues: informationDefaultValues(information, team),
  })

  const patchFormData = handleSubmit(async (data: FormSchemaSelect) => {
    const body: Body = {
      name: information.name,
      accountId: information.account.id,
      reporterId: data.employeeId.value,
      dateOfFirstReport: information.dateOfFirstReport,
      reportingFrequency: data.reportingFrequency.value,
      businessContext: data.businessContext,
      technologies: data.technologies,
    }

    const teamBody: TeamBody = {
      teamLeaderIds: data.teamLeaders,
      employeeIds: data.teamMembers,
    }

    const { ok: projectOk } = await request<{ status: number }>({
      url: apiUrls.patchProject(projectId),
      method: 'PATCH',
      body,
    })

    if (projectOk) {
      const { ok: teamOk } = await request<{ status: number }>({
        url: apiUrls.patchProjectTeam(projectId),
        method: 'PATCH',
        body: teamBody,
      })

      if (teamOk) {
        fetchInformation()
        fetchTeam()
        changeReadOnlyElement(null)
        toast.success('Project edited successfully.')
      } else {
        toast.error('Something went wrong with updating the team.')
      }
    } else {
      toast.error('Something went wrong with updating the project.')
    }
  })

  const teamLeaderIdsValues = watch('teamLeaders')

  return (
    <form>
      <Box sx={basicInfoEdit}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <ReporterOptions
              control={control}
              errors={errors}
              name="employeeId"
              readOnlyElement={readOnlyElement}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Frequency
              control={control}
              errors={errors}
              name="reportingFrequency"
              readOnlyElement={readOnlyElement}
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <BusinessContextField
              control={control}
              errors={errors}
              name="businessContext"
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <TechnologiesOptions
              control={control}
              errors={errors}
              currentTechnologies={information.technologies}
              name="technologies"
              label="Technologies:"
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <TeamLeaderOptions
              control={control}
              errors={errors}
              name="teamLeaders"
              label="Team Leaders"
              accountId={information.account.id}
              currentTeamLeaders={team.teamLeaders}
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            <TeamMembersOptions
              control={control}
              errors={errors}
              name="teamMembers"
              label="Team Members"
              teamLeaderIds={teamLeaderIdsValues}
              accountId={information.account.id}
              currentMembers={team.teamMembers}
            />
          </Grid>
          <Grid>
            <Card
              elevation={0}
              sx={{
                ...buttonsCard,
                p: 3,
              }}
            >
              <CancelButton handleClose={() => changeReadOnlyElement(null)} />
              <SaveButton onSubmit={patchFormData} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </form>
  )
}

export default EditInformation
