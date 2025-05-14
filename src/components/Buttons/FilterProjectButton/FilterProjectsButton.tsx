import React from 'react'
import { Button } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { outlinedButtonGray } from '@/styles/buttonsStyles'

interface Props {
  handleOpen: () => void
  title: string
}

const FilterProjectsButton = ({ handleOpen, title }: Props) => {
  return (
    <Button
      onClick={handleOpen}
      startIcon={<FilterListIcon />}
      variant={'outlined'}
      sx={{ ...outlinedButtonGray, width: 'auto' }}
    >
      {title}
    </Button>
  )
}

export default FilterProjectsButton
