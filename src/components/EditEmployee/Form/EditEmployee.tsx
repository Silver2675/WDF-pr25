import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
import {
  buttonsBox,
  fieldsBox,
  formBox,
  formPaper,
  formTitle,
} from '@/styles/formStyles'
import { Box, IconButton, Modal, Paper, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FormSchema, schema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Body } from './types'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import { toast } from 'react-toastify'
import CreateIcon from '@mui/icons-material/Create'
import ReusableField from '@/components/AddNewEmployee/SelectOptions/ReusableField'

interface Props {
  fetchData?: () => void
  employeeData?: {
    accountId: number
    id: number | null | undefined
    givenName: string | null | undefined
    surname: string | null | undefined
    mail: string | null | undefined
    jobTitle: string | null | undefined
  }
}

const EditEmployee = ({ fetchData, employeeData }: Props) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [, setModalOpen] = useState(false)
  const isInitialized = useRef(false)
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      givenName: '',
      surname: '',
      mail: '',
      jobTitle: '',
    },
  })

  const postFormData = handleSubmit(async (data: FormSchema) => {
    setIsLoading(true)

    const body: Body = {
      accountId: employeeData?.accountId,
      givenName: data.givenName,
      surname: data.surname,
      ...(data.mail?.trim() && { mail: data.mail.trim() }),
      jobTitle: data.jobTitle,
    }

    const { ok } = await request<{ status: number }>({
      url: apiUrls.employeesEdit(employeeData?.id as number),
      method: 'PATCH',
      body,
    })

    if (ok) {
      setOpen(false)
      fetchData && fetchData()
      toast.success('Point of contact updated successfully.')
    } else {
      toast.error('Something went wrong')
    }
    setIsLoading(false)
  })

  useEffect(() => {
    if (!open) {
      reset()
      isInitialized.current = false
    }
  }, [open, reset])

  useEffect(() => {
    if (employeeData) {
      setValue(
        'givenName',
        employeeData.givenName === '-' ? '' : (employeeData.givenName as string)
      )
      setValue(
        'surname',
        employeeData.surname === '-' ? '' : (employeeData.surname as string)
      )
      setValue(
        'mail',
        employeeData.mail === '-' ? '' : (employeeData.mail as string)
      )
      setValue(
        'jobTitle',
        employeeData.jobTitle === '-' ? '' : (employeeData.jobTitle as string)
      )
    }
  }, [setValue, open, employeeData])

  useEffect(() => {
    setModalOpen(open)
  }, [open, setModalOpen])

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <CreateIcon
          sx={{ color: 'font.gray', fontSize: { md: '1.5rem', xs: '1rem' } }}
        />
      </IconButton>
      <Modal
        disableScrollLock={true}
        open={open}
        onClose={() => setOpen(false)}
        sx={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <Paper elevation={0} square sx={formPaper}>
          <Typography sx={{ ...formTitle, mb: 0 }}>
            Edit Point of Contact {employeeData?.givenName}{' '}
            {employeeData?.surname}
          </Typography>
          <form onSubmit={postFormData}>
            <Box sx={{ ...formBox }}>
              <Box sx={fieldsBox}>
                <ReusableField
                  control={control}
                  errors={errors}
                  name="givenName"
                  label="Given Name"
                />
                <ReusableField
                  control={control}
                  errors={errors}
                  name="surname"
                  label="Surname"
                />
                <ReusableField
                  control={control}
                  errors={errors}
                  name="mail"
                  label="E-Mail"
                  type="email"
                />
                <ReusableField
                  control={control}
                  errors={errors}
                  name="jobTitle"
                  label="Job Title"
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

export default EditEmployee
