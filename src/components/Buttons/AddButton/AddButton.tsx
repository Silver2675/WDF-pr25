import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { addButton } from '@/styles/buttonsStyles'
interface Props {
  handleOpen: () => void
  label: string
}

const AddButton = ({ handleOpen, label }: Props) => {
  return (
    <Button
      onClick={handleOpen}
      startIcon={<AddIcon />}
      variant={'contained'}
      sx={addButton}
    >
      {label}
    </Button>
  )
}

export default AddButton
