'use client'

import {
  Paper,
  Box,
  TableContainer,
  Table,
  Typography,
  Button,
} from '@mui/material'
import React from 'react'
import { FeedbackListGridElement, FeedbackListTable } from '@/styles/styles'
import { TableBody, TableRow, TableCell, TableHead } from '@mui/material'
import {
  tableHead,
  headRow,
  headCells,
  cellStyle,
  accordionRow,
  accordionCells,
  rowStyle,
  accordionIcon,
} from '@/styles/tableStyles'
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone'
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone'
import { grey } from '@mui/material/colors'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '@/constants/dateFormats'

const FeedbackList = ({
  listOfFeedbackProcesses,
  onFeedbackChosen,
  chosenFeedbackId,
  accordion,
  setAccordion,
}: {
  listOfFeedbackProcesses:
    | [
        {
          client: string | null
          project: string | null
          reviewDate: string | null
          reviewRating: number | null
          reviewType: string | null
          reviews: [
            {
              feedbackTypeOfReviews: string | null
              rating: number | null
              id: number | null
            }
          ]
        }
      ]
    | undefined
  onFeedbackChosen: (id: number | null) => void
  chosenFeedbackId: number
  accordion: number[]
  setAccordion: (e: number[]) => void
}) => {
  return (
    <>
      <Box component={Paper} sx={FeedbackListGridElement}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 1000,
            px: 2,
            py: 0.75,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          All Feedback Processes{' '}
          {listOfFeedbackProcesses?.length ? (
            accordion.length === 0 ? (
              <Button
                onClick={() => {
                  setAccordion(
                    Array.from(
                      { length: listOfFeedbackProcesses?.length ?? 0 },
                      (_, index) => index
                    )
                  )
                }}
                variant="contained"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: 2,
                  background: 'rgb(244, 244, 244)',
                  '&:hover': {
                    background: 'rgb(219, 219, 223)',
                  },
                }}
              >
                Expand All
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setAccordion([])
                }}
                variant="contained"
                sx={{
                  textTransform: 'capitalize',
                  borderRadius: 2,
                  background: 'rgb(244, 244, 244)',
                  '&:hover': {
                    background: 'rgb(219, 219, 223)',
                  },
                }}
              >
                Hide All
              </Button>
            )
          ) : (
            <Button sx={{ transform: 'scale(0)' }}>.</Button>
          )}
        </Typography>
        <TableContainer sx={FeedbackListTable}>
          {listOfFeedbackProcesses?.length ? (
            <Table>
              <TableHead sx={tableHead}>
                <TableRow sx={headRow}>
                  <TableCell sx={headCells}>Account</TableCell>
                  <TableCell sx={headCells}>Project Name</TableCell>
                  <TableCell sx={headCells}>Feedback Date</TableCell>
                  <TableCell sx={headCells}>Rating</TableCell>
                  <TableCell sx={{ ...headCells, width: '150px' }}>
                    Review Type
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listOfFeedbackProcesses?.map((element, index) => (
                  <>
                    <TableRow
                      key={index}
                      hover
                      onClick={() => {
                        accordion.includes(index)
                          ? setAccordion(accordion.filter((v) => v !== index))
                          : setAccordion(accordion.concat(index))
                      }}
                      sx={{
                        ...rowStyle,
                        borderBottom: accordion.includes(index)
                          ? '2px lightgrey solid'
                          : '',
                        position: 'relative',
                      }}
                    >
                      <TableCell
                        sx={{
                          ...cellStyle,
                          fontWeight: 'inherit',
                        }}
                      >
                        {element['client']}
                      </TableCell>
                      <TableCell
                        sx={{
                          ...cellStyle,
                          fontWeight: 'inherit',
                        }}
                      >
                        {element['project']}
                      </TableCell>
                      <TableCell
                        sx={{
                          ...cellStyle,
                          fontWeight: 'inherit',
                        }}
                      >
                        {dayjs(element['reviewDate']).format(DATE_FORMAT)}
                      </TableCell>
                      <TableCell
                        sx={{
                          ...cellStyle,
                          fontWeight: 'inherit',
                        }}
                      >
                        {element['reviewRating']}
                      </TableCell>
                      <TableCell
                        sx={{
                          ...cellStyle,
                          fontWeight: 'inherit',
                        }}
                      >
                        {element['reviewType']}
                      </TableCell>
                      {accordion.includes(index) ? (
                        <ExpandLessTwoToneIcon sx={accordionIcon} />
                      ) : (
                        <ExpandMoreTwoToneIcon sx={accordionIcon} />
                      )}
                    </TableRow>
                    {element.reviews.map((e, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          ...accordionRow,
                          display: accordion.includes(index) ? '' : 'none',
                          backgroundColor:
                            e.id === chosenFeedbackId ? grey[200] : '',
                        }}
                        onClick={() =>
                          onFeedbackChosen(
                            e.id === chosenFeedbackId ? -2 : e.id
                          )
                        }
                        hover
                      >
                        <TableCell sx={{ ...cellStyle, ...accordionCells }}>
                          {element.client}
                        </TableCell>
                        <TableCell sx={{ ...cellStyle, ...accordionCells }}>
                          {element.project}
                        </TableCell>
                        <TableCell sx={{ ...cellStyle, ...accordionCells }}>
                          {dayjs(element.reviewDate).format(DATE_FORMAT)}
                        </TableCell>
                        <TableCell sx={{ ...cellStyle, ...accordionCells }}>
                          {e.rating}
                        </TableCell>
                        <TableCell sx={{ ...cellStyle, ...accordionCells }}>
                          {e.feedbackTypeOfReviews}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography
              sx={{
                paddingLeft: 3,
                paddingTop: 1.5,
                textAlign: 'left',
                color: 'gray',
                fontSize: { md: 11, lg: 12, xl: 14 },
                borderBottom: 0,
              }}
            >
              There are no feedbacks to display
            </Typography>
          )}
        </TableContainer>
      </Box>
    </>
  )
}

export default FeedbackList
