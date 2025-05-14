import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
import { apiUrls } from '@/constants/apiUrls'
import { formPaper, formBox, fieldsBox, buttonsBox } from '@/styles/formStyles'
import { request } from '@/server/backend/types/request'
import { Modal, Paper, Box, Typography } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ProjectStatusProps } from './types'

const ChangeProjectStatus = ({
  information,
  projectId,
  fetchInformation,
}: ProjectStatusProps) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [buttonTitle, setButtonTitle] = useState('')

  useEffect(() => {
    if (information?.isActive) {
      setMessage('Are you sure you want to inactivate project?')
      setButtonTitle('Inactivate')
    } else {
      setMessage('Are you sure you want to activate project?')
      setButtonTitle('Activate')
    }
  }, [information])

  const changeStatus = useCallback(async () => {
    if (projectId) {
      setIsLoading(true)
      const { ok } = await request<{ status: number }>({
        url: apiUrls.patchProjectChangeStatus(projectId),
        method: 'PATCH',
      })
      if (ok) {
        setOpen(false)
        toast.success('Project status changed successfully.')
        fetchInformation()
      } else {
        toast.error('Something went wrong.')
      }
      setIsLoading(false)
    }
  }, [projectId, fetchInformation])
  return (
    <>
      <CancelButton handleClose={() => setOpen(true)} title={buttonTitle} />
      <Modal open={open} sx={{ paddingTop: 5 }}>
        <Paper
          elevation={0}
          square
          sx={{ ...formPaper, height: '200px', width: '500px' }}
        >
          <Box sx={{ ...formBox, gap: 1, width: '400px' }}>
            <Box sx={fieldsBox}>
              <Typography>{message}</Typography>
            </Box>
            <Box sx={buttonsBox}>
              <CancelButton handleClose={() => setOpen(false)} title="No" />
              <SaveButton
                disabled={isLoading}
                onSubmit={changeStatus}
                title="Yes"
              />
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  )
}

export default ChangeProjectStatus
