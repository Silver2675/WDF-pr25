import { Modal, Paper, Box, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import { toast } from 'react-toastify'
import CancelButton from '@/components/Buttons/CancelButton'
import SaveButton from '@/components/Buttons/SaveButton'
import { formPaper, formBox, buttonsBox, fieldsBox } from '@/styles/formStyles'

interface Props {
  employeeData: {
    accountId: number
    id: number
    givenName: string
    surname: string
  }
  fetchData?: () => void
}

const DeleteEmployee = ({ employeeData, fetchData }: Props) => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)
    const { ok } = await request<{ status: number }>({
      url: apiUrls.employeesEdit(employeeData.id),
      method: 'DELETE',
    })

    if (ok) {
      toast.success(
        `Point of contact ${employeeData.givenName} ${employeeData.surname} deleted successfully.`
      )
      fetchData && fetchData()
      setOpen(false)
    } else {
      toast.error('Failed to delete the point of contact.')
    }
    setIsLoading(false)
  }

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <DeleteIcon
          sx={{ color: 'font.gray', fontSize: { md: '1.5rem', xs: '1rem' } }}
        />
      </IconButton>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <Paper
          elevation={0}
          square
          sx={{ ...formPaper, height: '200px', width: '500px' }}
        >
          <Box sx={{ ...formBox, gap: 1, width: '400px' }}>
            <Box sx={fieldsBox}>
              <Typography>
                Are you sure you want to delete point of contact{' '}
                <strong>
                  {employeeData.givenName} {employeeData.surname}
                </strong>
                ?
              </Typography>
            </Box>
            <Box sx={buttonsBox}>
              <CancelButton handleClose={() => setOpen(false)} title="No" />
              <SaveButton
                disabled={isLoading}
                onSubmit={handleDelete}
                title="Yes"
              />
            </Box>
          </Box>
        </Paper>
      </Modal>
    </>
  )
}

export default DeleteEmployee
