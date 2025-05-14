import { detailsCard, titleAndStatusBox, detailsTitle } from '@/styles/styles'
import { Card, Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { statusCardsConfig } from '../const'
import { StatusDetailsCards } from '../utils'
import { FieldValues } from 'react-hook-form'
import DetailsText from '../DetailsText/DetailsText'
import DetailsStatuses from '../DetailsStatuses'
import { DetailsStatusCardsProps } from './types'
import { readOnlyStatus } from '../../utils'

const DetailsStatusCards = <T extends FieldValues>({
  projectReport,
  reportId,
  control,
  errors,
  readOnlyElement,
  statuses,
}: DetailsStatusCardsProps<T>) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: '100%',
        py: 2,
      }}
    >
      {statusCardsConfig.map((title) => (
        <Grid
          item
          key={title.titleId}
          xs={12}
          sm={6}
          md={4}
          sx={{
            display:
              (projectReport?.[title.titleId] !== undefined &&
                projectReport?.[title.titleId] !== null) ||
              !readOnlyStatus(readOnlyElement)
                ? 'block'
                : 'none',
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
                ...titleAndStatusBox,
              }}
            >
              <Typography
                key={`details-title-name-${reportId}-${title.titleName}`}
                sx={detailsTitle}
              >
                {title.titleName}
              </Typography>
              <DetailsStatuses
                titleName={title.titleName}
                titleId={title.titleId}
                projectReport={projectReport}
                reportId={reportId}
                control={control}
                errors={errors}
                readOnlyElement={readOnlyElement}
                statuses={statuses}
              />
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
                titleId={title.titleDetails as keyof StatusDetailsCards}
                projectReport={projectReport}
                reportId={reportId}
                control={control}
                errors={errors}
                readOnlyElement={readOnlyElement}
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default DetailsStatusCards
