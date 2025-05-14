// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
import AccountOptions from '@/components/AddNewProject/SelectOptions/AccountOptions'
import CreateIcon from '@mui/icons-material/Create'
import DescriptionField from '@/components/AddNewAccount/SelectOptions/DescriptionField'
import WebsiteField from '@/components/AddNewAccount/SelectOptions/WebsiteField/WebsiteField'
import DeliveryManagerOptions from '@/components/AddNewAccount/SelectOptions/DeliveryManagerOptions'

interface Props {
  fetchData?: () => void
  accountData?: {
    id: number | null | undefined
    name: string | null | undefined
    description: string | null | undefined
    website: string | null | undefined
    deliveryManagerGivenName: string | null | undefined
    deliveryManagerSurname: string | null | undefined
    deliveryManagerId: number | null | undefined
  }
  setModalOpen: (open: boolean) => void
}

const EditAccount = ({ fetchData, accountData, setModalOpen }: Props) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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
      accountId: undefined,
      description: '',
      website: '',
    },
  })

  const postFormData = handleSubmit(async (data: FormSchema) => {
    setIsLoading(true)

    const body: Body = {
      name: data.accountId.label,
      description: data.description || '',
      website: data.website || '',
      ...(data.deliveryManagerId?.value && {
        deliveryManagerId: data.deliveryManagerId.value,
      }),
    }

    const { ok } = await request<{ status: number }>({
      url: apiUrls.accountsPatch(accountData?.id as number),
      method: 'PATCH',
      body,
    })

    if (ok) {
      setOpen(false)
      fetchData && fetchData()
      toast.success('Account updated successfully.')
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
    if (accountData) {
      setValue('accountId', {
        label: accountData.name as string,
        value: accountData.id as string | number,
      })
      setValue('deliveryManagerId', {
        label:
          `${accountData.deliveryManagerGivenName} ${accountData.deliveryManagerSurname}` as string,
        value: accountData.deliveryManagerId as string | number,
      })
      setValue(
        'description',
        accountData.description === '-'
          ? ''
          : (accountData.description as string)
      )
      setValue(
        'website',
        accountData.website === '-' ? '' : (accountData.website as string)
      )
    }
  }, [setValue, open, accountData])

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
            Edit Account {accountData?.name}
          </Typography>
          <form onSubmit={postFormData}>
            <Box sx={{ ...formBox }}>
              <Box sx={fieldsBox}>
                <AccountOptions
                  control={control}
                  errors={errors}
                  name="accountId"
                  freesolo={true}
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

export default EditAccount
