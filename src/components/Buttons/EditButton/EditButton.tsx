import { IconButton } from '@mui/material'
import React from 'react'
import CreateIcon from '@mui/icons-material/Create'

interface Props {
  handleOpen: () => void
}

const EditButton = ({ handleOpen }: Props) => {
  return (
    <IconButton onClick={() => handleOpen()}>
      <CreateIcon
        sx={{ color: 'font.gray', fontSize: { md: '1.5rem', xs: '1rem' } }}
      />
    </IconButton>
  )
}

export default EditButton
