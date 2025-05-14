import AddButton from '@/components/Buttons/AddButton/AddButton'
import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
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
import AccountOptions from '../SelectOptions/AccountOptions/AccountOptions'
import { Body } from './types'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import { toast } from 'react-toastify'
import DescriptionField from '../SelectOptions/DescriptionField'
import WebsiteField from '../SelectOptions/WebsiteField/WebsiteField'
import DeliveryManagerOptions from '../SelectOptions/DeliveryManagerOptions'

interface Props {
  fetchData?: () => void
}

const AddNewAccount = ({ fetchData }: Props) => {
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
      name: data.accountId.label,
      description: data.description,
      website: data.website,
      deliveryManagerId: data.deliveryManagerId.value,
    }
    const { ok } = await request<{ status: number }>({
      url: apiUrls.accounts,
      method: 'POST',
      body,
    })
    if (ok) {
      setOpen(false)
      fetchData && fetchData()
      toast.success('Account added successfully.')
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
      <AddButton handleOpen={() => setOpen(true)} label="New Account" />
      <Modal
        disableScrollLock={true}
        open={open}
        sx={{ paddingTop: '2%', paddingBottom: '2%' }}
      >
        <Paper elevation={0} square sx={formPaper}>
          <Typography sx={{ ...formTitle, mb: 0 }}>Add New Account</Typography>
          <form onSubmit={postFormData}>
            <Box sx={{ ...formBox }}>
              <Box sx={{ ...fieldsBox }}>
                <AccountOptions
                  control={control}
                  errors={errors}
                  name="accountId"
                />
                <span style={{ height: '10px' }} />
                <DescriptionField
                  control={control}
                  errors={errors}
                  name="description"
                />
                <span style={{ height: '10px' }} />
                <WebsiteField
                  control={control}
                  errors={errors}
                  name="website"
                />
                <span style={{ height: '10px' }} />
                <DeliveryManagerOptions
                  control={control}
                  errors={errors}
                  name="deliveryManagerId"
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

export default AddNewAccount
