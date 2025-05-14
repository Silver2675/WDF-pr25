import React from 'react'
import { Button } from '@mui/material'
import { outlinedButtonGray } from '@/styles/buttonsStyles'

interface Props {
  handleClose: () => void
}

const TerminateButton = ({ handleClose }: Props) => {
  return (
    <Button
      onClick={handleClose}
      variant="outlined"
      sx={{ ...outlinedButtonGray, width: 'auto' }}
    >
      Terminate Project
    </Button>
  )
}
export default TerminateButton
