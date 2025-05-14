import { detailsInputLabel } from '@/styles/styles'
import { InputLabel, TextField } from '@mui/material'
import React from 'react'

interface Props {
  status?: number | null
  id?: number | null
}

export const phasesNames: {
  [key: number]: {
    name: string
  }
} = {
  [0]: {
    name: 'Initiation',
  },
  [1]: {
    name: 'Delivery',
  },
  [2]: {
    name: 'Deployment',
  },
  [3]: {
    name: 'Maintenance',
  },
  [4]: {
    name: 'Finished',
  },
}

const Phases = ({ status, id }: Props) => {
  return (
    <>
      <InputLabel
        sx={{
          ...detailsInputLabel,
          display: status !== null && status !== undefined ? 'block' : 'none',
        }}
      >
        Phase
      </InputLabel>
      <TextField
        variant="standard"
        key={`phase-of-${id}`}
        InputProps={{ readOnly: true }}
        value={status !== null && status !== undefined ? phasesNames[status].name : ''}
        sx={{ display: status !== null && status !== undefined ? 'block' : 'none' }}
      />
    </>
  )
}


export default Phases
