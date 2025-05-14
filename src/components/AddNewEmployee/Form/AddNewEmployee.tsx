import AddButton from '@/components/Buttons/AddButton/AddButton'
import CancelButton from '@/components/Buttons/CancelButton'
import {
  buttonsBox,
  fieldsBox,
  formBox,
  formPaper,
  formTitle,
} from '@/styles/formStyles'
import { Box, Modal, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormSchema, schema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Body } from './types'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import { toast } from 'react-toastify'
import ReusableField from '../SelectOptions/ReusableField'
import SaveButton from '@/components/Buttons/SaveButton'

interface Props {
  fetchData?: () => void
  accountId: number
}

const AddNewEmployee = ({ fetchData, accountId }: Props) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  const postFormData = handleSubmit(async (data: FormSchema) => {
    setIsLoading(true)
    const body: Body = {
      accountId: accountId,
      givenName: data.givenName,
      surname: data.surname,
      jobTitle: data.jobTitle,
      ...(data.mail?.trim() && { mail: data.mail.trim() }),
    }
    const { ok } = await request<{ status: number }>({
      url: apiUrls.employeesAdd,
      method: 'POST',
      body,
    })
    if (ok) {
      setOpen(false)
      fetchData && fetchData()
      toast.success('Point of contact added successfully.')
    } else {
      toast.error('Something went wrong')
    }
    setIsLoading(false)
  })

  useEffect(() => {
    !open && reset()
  }, [open, reset])

  return (
    <>
      <AddButton handleOpen={() => setOpen(true)} label="New POC" />
      <Modal
        disableScrollLock={true}
        open={open}
        sx={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <Paper elevation={0} square sx={formPaper}>
          <Typography sx={{ ...formTitle, mb: 0 }}>
            Add New Point of Contact
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

export default AddNewEmployee
