import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { outlinedButtonGray } from '@/styles/buttonsStyles'

interface Props extends ButtonProps {
  handleClose: () => void
}

const CancelButton = ({ handleClose, title, ...props }: Props) => {
  return (
    <Button
      {...props}
      onClick={() => handleClose()}
      variant="outlined"
      sx={{ ...outlinedButtonGray, height: '75%', width: 105 }}
    >
      {title ?? 'Cancel'}
    </Button>
  )
}
export default CancelButton
