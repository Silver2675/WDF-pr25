import React from 'react'
import Chip from '@mui/material/Chip'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DetailsTechnologiesProps } from './types'
import { detailsInputLabel } from '@/styles/styles'

const DetailsTechnologies = ({
  information,
  label,
}: DetailsTechnologiesProps) => {
  return (
    <>
      <InputLabel
        sx={{
          ...detailsInputLabel,
          fontSize: { md: 17, sm: 13, xs: 12 },
          pt: 0,
        }}
      >
        {label}
      </InputLabel>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {information.technologies && information.technologies.length > 0 ? (
          information.technologies.map((tech, index) => (
            <Chip
              label={tech}
              key={index}
              color="primary"
              sx={{
                paddingTop: '13px',
                paddingBottom: '13px',
                paddingLeft: '0px',
                paddingRight: '0px',
                fontSize: '0.875rem',
                height: '24px',
                '& .MuiChip-deleteIcon': {
                  fontSize: '16px',
                  padding: '2px',
                },
              }}
            />
          ))
        ) : (
          <Typography
            sx={{
              whiteSpace: 'pre-line',
              wordBreak: 'break-word',
              maxWidth: '100%',
              textDecoration: 'underline',
              textDecorationColor: '#d8d8d9',
              textDecorationThickness: '0.75px',
              textUnderlineOffset: '4px',
            }}
          >
            NA
          </Typography>
        )}
      </Box>
    </>
  )
}

export default DetailsTechnologies
