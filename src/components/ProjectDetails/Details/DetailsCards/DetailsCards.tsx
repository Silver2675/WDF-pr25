import { detailsCard, detailsTitle, typographyBox } from '@/styles/styles'
import { Grid, Card, Box, Typography } from '@mui/material'
import React from 'react'
import { cardsConfig } from '../const'
import { FieldValues } from 'react-hook-form'
import DetailsText from '../DetailsText/DetailsText'
import { DetailsCardsProps } from './types'
import { readOnlyStatus } from '../../utils'

const DetailsCards = <T extends FieldValues>({
  projectReport,
  reportId,
  control,
  errors,
  readOnlyElement,
}: DetailsCardsProps<T>) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '100%',
        py: 2,
      }}
    >
      {cardsConfig.map((title) => (
        <Grid
          item
          key={title.titleId}
          xs={12}
          sm={6}
          md={4}
          sx={{
            display:
              !projectReport?.[title.titleId] && readOnlyStatus(readOnlyElement)
                ? 'none'
                : 'block',
          }}
        >
          <Card
            key={`details-cards-${reportId}-${title.titleName}`}
            elevation={0}
            sx={{
              ...detailsCard,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              key={`details-title-${reportId}-${title.titleName}`}
              sx={{
                ...typographyBox,
              }}
            >
              <Typography
                key={`details-title-name-${reportId}-${title.titleName}`}
                sx={detailsTitle}
              >
                {title.titleName}
              </Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <DetailsText
                titleName={title.titleName}
                titleId={title.titleId}
                reportId={reportId}
                control={control}
                errors={errors}
                readOnlyElement={readOnlyElement}
                projectReport={projectReport}
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default DetailsCards
