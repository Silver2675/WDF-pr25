import { detailsInputLabel } from '@/styles/styles'
import { InputLabel, Box, Typography } from '@mui/material'
import React from 'react'
import { BasicInformation } from '../../types'

interface Props {
  information: BasicInformation
  label: string
}

const DetailsBusinessContext = ({ information, label }: Props) => {
  const displayText = information.businessContext
    ? information.businessContext
    : 'NA'
  const isNA = displayText === 'NA'

  return (
    <Box>
      <InputLabel
        sx={{
          ...detailsInputLabel,
          fontSize: { md: 17, sm: 13, xs: 12 },
          pt: 0,
        }}
      >
        {label}
      </InputLabel>
      <Typography
        sx={{
          whiteSpace: 'pre-line',
          wordBreak: 'break-word',
          maxWidth: '100%',
          textDecoration: isNA ? 'underline' : 'none',
          textDecorationColor: isNA ? '#d8d8d9;' : 'transparent',
          textDecorationThickness: isNA ? '0.75px' : 'transparent',
          textUnderlineOffset: isNA ? '4px' : '0',
        }}
      >
        {displayText}
      </Typography>
    </Box>
  )
}

export default DetailsBusinessContext
