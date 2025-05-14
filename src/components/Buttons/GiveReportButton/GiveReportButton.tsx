import React from 'react'
import { Button } from '@mui/material'
import { addButton } from '@/styles/buttonsStyles'

interface Props {
  handleOpen: () => void
}

const GiveReportButton = ({ handleOpen }: Props) => {
  return (
    <Button
      onClick={() => handleOpen()}
      variant="contained"
      sx={{ ...addButton, width: 150, height: 40 }}
    >
      Add New Report
    </Button>
  )
}

export default GiveReportButton
