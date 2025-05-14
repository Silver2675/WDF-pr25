import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { yelllowFormButton } from '@/styles/buttonsStyles'

interface Props extends ButtonProps {
  onSubmit?: () => void
}

const SaveButton = ({ onSubmit, title, ...props }: Props) => {
  return (
    <Button
      {...props}
      variant="contained"
      onClick={onSubmit}
      sx={{ ...yelllowFormButton, width: 105, height: '75%' }}
    >
      {title ?? 'Save'}
    </Button>
  )
}

export default SaveButton
