'use client'

import React, { useEffect } from 'react'
import ReporterOptions from '../SelectOptions/ReporterOptions/ReporterOptions'
import ProjectsOptions from '../SelectOptions/ProjectsOptions/ProjectsOptions'
import SaveButton from '@/components/Buttons/SaveButton'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Typography, Modal, Paper, Box } from '@mui/material'
import { request } from '@/server/backend/types/request'
import Frequency from '../SelectOptions/Frequency'
import CancelButton from '@/components/Buttons/CancelButton/CancelButton'
import AddButton from '@/components/Buttons/AddButton/AddButton'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, schema } from './validation'
import { toast } from 'react-toastify'
import { Body } from './types'
import {
  buttonsBox,
  fieldsBox,
  formBox,
  formPaper,
  formTitle,
} from '@/styles/formStyles'
import dayjs from 'dayjs'
import { apiUrls } from '@/constants/apiUrls'
import ControlledDatePicker from '@/components/ControlledDatePicker'
import AccountOptions from '../SelectOptions/AccountOptions/AccountOptions'
import TeamLeaderOptions from '../SelectOptions/TeamLeaderOptions/TeamLeaderOptions'
import BusinessContextField from '../SelectOptions/BusinessContextField/BusinessContextField'
import TechnologiesOptions from '../SelectOptions/TechnologiesOptions/TechnologiesOptions'
import TeamMembersOptions from '../SelectOptions/TeamMembersOptions'

interface Props {
  fetchData?: () => void
}

const AddNew = ({ fetchData }: Props) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const methods = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = methods

  const postFormData = handleSubmit(async (data: FormSchema) => {
    setIsLoading(true)
    const body: Body = {
      name: data.name.label,
      accountId: data.accountId.value,
      reporterId: data.reporterId.value,
      dateOfFirstReport: dayjs(data.dateOfFirstReport).format('YYYY-MM-DD'),
      reportingFrequency: data.reportingFrequency.value,
      businessContext: data?.businessContext,
      technologies: data?.technologies,
      teamLeaderIds: data?.teamLeaderIds,
      employeeIds: data?.employeeIds,
    }

    const { ok } = await request<{ status: number }>({
      url: apiUrls.project,
      method: 'POST',
      body,
    })
    if (ok) {
      setOpen(false)
      fetchData && fetchData()
      toast.success('Project added successfully.')
    } else {
      toast.error('Something went wrong.')
    }
    setIsLoading(false)
  })

  const accountIdValue = watch('accountId')
  const teamLeaderIdsValues = watch('teamLeaderIds')

  useEffect(() => {
    if (!open) reset()
  }, [open, reset])

  return (
    <>
      <AddButton handleOpen={() => setOpen(true)} label="New Project" />
      <Modal
        disableScrollLock={true}
        open={open}
        sx={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <Paper elevation={0} square sx={formPaper}>
          <Typography sx={{ ...formTitle, mb: 0 }}>Add New Project</Typography>
          <form onSubmit={postFormData}>
            <Box sx={{ ...formBox }}>
              <Box sx={fieldsBox}>
                <AccountOptions
                  control={control}
                  errors={errors}
                  name={'accountId'}
                />
                <ProjectsOptions
                  control={control}
                  idValue={accountIdValue?.label}
                  errors={errors}
                />
                <ReporterOptions
                  control={control}
                  errors={errors}
                  name="reporterId"
                />
                <TeamLeaderOptions
                  control={control}
                  errors={errors}
                  name="teamLeaderIds"
                  label="Team Leaders"
                  accountId={accountIdValue?.value as number}
                />
                <TeamMembersOptions
                  control={control}
                  errors={errors}
                  name="employeeIds"
                  label="Team Members"
                  teamLeaderIds={teamLeaderIdsValues}
                  accountId={accountIdValue?.value as number}
                />
                <BusinessContextField
                  control={control}
                  errors={errors}
                  name="businessContext"
                />
                <TechnologiesOptions
                  control={control}
                  errors={errors}
                  label="Technologies"
                  name="technologies"
                  currentTechnologies={[]}
                />
                <ControlledDatePicker
                  errors={errors}
                  control={control}
                  name="dateOfFirstReport"
                  label="Date of First Report"
                  message="Required"
                />
                <Frequency<FormSchema>
                  control={control}
                  errors={errors}
                  name="reportingFrequency"
                />
              </Box>
              <Box sx={{ ...buttonsBox, mt: -5 }}>
                <CancelButton handleClose={() => setOpen(false)} />
                <SaveButton disabled={isLoading} onSubmit={postFormData} />
              </Box>
            </Box>
          </form>
        </Paper>
      </Modal>
    </>
  )
}

export default AddNew
