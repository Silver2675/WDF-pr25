import { BasicInformation } from '@/components/ProjectDetails/types'
import { Box, InputLabel, Typography } from '@mui/material'
import React from 'react'
import { labelsBasicInfoConfig } from '../const'
import { mappedInformation } from '../utils'
import { basicInfoStyles } from '@/styles/tableStyles'
import { detailsInputLabel } from '@/styles/styles'

interface Props {
  information: BasicInformation
  projectId: string
  startIndex: number
  endIndex: number
}

const DetailsProjectInformation = ({
  information,
  projectId,
  startIndex,
  endIndex,
}: Props) => {
  return (
    <>
      {labelsBasicInfoConfig.slice(startIndex, endIndex).map((label, index) => {
        const value = mappedInformation(information)[label.labelId];
        let displayValue = value;
        let shouldDisplay = true;

        if (label.labelId === 'dateOfFirstReport' || label.labelId === 'terminationDate') {
          shouldDisplay = information.isActive
            ? label.labelId === 'dateOfFirstReport'
            : label.labelId === 'terminationDate';
          displayValue = shouldDisplay ? value : '';
        }

        return shouldDisplay ? (
          <Box
            key={label.labelName}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { md: 1, xs: 0.5 },
              marginRight: 2,
            }}
          >
            <InputLabel
              key={`details-fields-${projectId}-${label.labelName}`}
              sx={{
                ...detailsInputLabel,
                fontSize: { md: 17, sm: 13, xs: 12 },
                pt: 0,
              }}
            >
              {label.labelName} :
            </InputLabel>
            <Typography key={`label-${projectId}-${index}`} sx={basicInfoStyles}>
              {displayValue}
            </Typography>
          </Box>
        ) : null;
      })}
    </>
  )
}

export default DetailsProjectInformation
