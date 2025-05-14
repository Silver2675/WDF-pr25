import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from '@mui/material'
import {
  FeedbackDisplayContent,
  FeedbackDisplayGridElement,
} from '@/styles/styles'
import { displayedAnswers, employeeInfoStyle } from '@/styles/tableStyles'
import { apiUrls } from '@/constants/apiUrls'
import { request } from '@/server/backend/types/request'
import { Feedback } from '@/components/FeedbackDetails/types'
import { routes } from '@/constants/routes'
import { useRouter } from 'next/navigation'
import { LineChart } from '@mui/x-charts'
import { EmployeeProfile } from '../types'
import dayjs from 'dayjs'
import { yellow } from '@mui/material/colors'
import EmployeeFeedbackSummaryDog from './EmployeeFeedbackSummaryDog'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

type AxisData = {
  dataIndex: number
  axisValue?: number | Date | string
  seriesValues: Record<string, number | null | undefined>
}

export const EmployeeFeedbackSummary = ({
  feedbackId,
  feedbacks,
  onChartClick,
}: {
  feedbackId: number | undefined
  feedbacks: EmployeeProfile | undefined
  onChartClick: (event: MouseEvent, data: null | AxisData) => void
}) => {
  const [feedback, setFeedback] = useState<Feedback>()
  const [stateFeedbackId, setStateFeedbackId] = useState(feedbackId)
  const router = useRouter()

  useEffect(() => {
    setStateFeedbackId(feedbackId)
  }, [feedbackId])

  const fetchFeedback = async (stateFeedbackId: number | undefined) => {
    try {
      const { ok, response } = await request<Feedback>({
        url: apiUrls.feedback(stateFeedbackId ?? 0),
        method: 'GET',
      })

      if (ok && response) {
        return response
      }
      throw new Error('Failed to fetch feedback')
    } catch (error) {
      console.error('Error fetching feedback:', error)
      return null
    }
  }

  useEffect(() => {
    ;(async () =>
      stateFeedbackId !== -1 &&
      stateFeedbackId !== -2 &&
      setFeedback((await fetchFeedback(stateFeedbackId)) as Feedback))()
  }, [stateFeedbackId])
  feedback

  const chartContainerRef = useRef<HTMLDivElement>(null)
  const [chartHeight, setChartHeight] = useState<number>(400)

  const updateChartHeight = () => {
    if (chartContainerRef.current) {
      const containerHeight = chartContainerRef.current.offsetHeight
      setChartHeight(containerHeight)
    }
  }

  useEffect(() => {
    if (stateFeedbackId === -1) {
      setTimeout(() => {
        updateChartHeight()
      }, 0)

      window.addEventListener('resize', updateChartHeight)
      return () => window.removeEventListener('resize', updateChartHeight)
    }
  }, [stateFeedbackId])

  const renderChart = () => {
    const listOfFeedbackProcesses = [
      ...(feedbacks?.listOfFeedbackProcesses ?? []),
    ]

    if (listOfFeedbackProcesses.length === 0) {
      return <></>
    }

    const aggregatedFeedbacks = listOfFeedbackProcesses.reduce((acc, curr) => {
      const dateKey = curr.reviewDate

      if (!dateKey) return acc

      if (!acc[dateKey]) {
        acc[dateKey] = { totalRating: 0, count: 0 }
      }
      acc[dateKey].totalRating += curr.reviewRating!
      acc[dateKey].count += 1
      return acc
    }, {} as Record<string, { totalRating: number; count: number }>)

    const aggregatedData = Object.entries(aggregatedFeedbacks).map(
      ([date, { totalRating, count }]) => ({
        reviewDate: date,
        reviewRating: totalRating / count,
        isAverage: count > 1,
      })
    )

    const sortedFeedbacks = aggregatedData.sort(
      (a, b) =>
        dayjs(a.reviewDate, 'YYYY-MM-DD').unix() -
        dayjs(b.reviewDate, 'YYYY-MM-DD').unix()
    )

    const xData = sortedFeedbacks.map((e) =>
      dayjs(e.reviewDate, 'YYYY-MM-DD').unix()
    )
    const yData = sortedFeedbacks.map((e) => e.reviewRating)
    const isAverageData = sortedFeedbacks.map((e) => e.isAverage)

    return (
      <Box
        ref={chartContainerRef}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '95%',
          overflow: 'hidden',
        }}
      >
        <LineChart
          xAxis={[
            {
              data: xData,
              valueFormatter: (value) => dayjs.unix(value).format('DD-MM-YYYY'),
            },
          ]}
          yAxis={[
            {
              min: 0,
              max: 6,
              tickInterval: [1, 2, 3, 4, 5, 6],
            },
          ]}
          series={[
            {
              data: yData,
              color: yellow[600],
              valueFormatter: (v, { dataIndex }) => {
                const isAverage = isAverageData[dataIndex]
                return isAverage
                  ? `${v!.toFixed(1)} (average for the day)`
                  : `${v!.toFixed(1)}`
              },
            },
          ]}
          onAxisClick={onChartClick}
          height={chartHeight}
        />
      </Box>
    )
  }

  const renderFeedbackDetails = () => (
    <>
      <TableContainer>
        <Table sx={{ borderTop: 0.5, borderColor: 'gray', borderBottom: 0.5 }}>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  ...employeeInfoStyle,
                  paddingTop: 1.5,
                  paddingBottom: 1,
                  paddingLeft: 3,
                }}
              >
                Author: {feedback?.coordinator}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={FeedbackDisplayContent}>
        {feedback?.questionAnswers?.map(
          ({ question, answers, grades }, index) => (
            <Box key={index} sx={{ marginBottom: 1 }}>
              <Typography sx={{ ...displayedAnswers, paddingBottom: 0.5 }}>
                <strong>{question}</strong>
              </Typography>

              {answers && !grades && answers.length > 0 && (
                <Box>
                  {answers.map((answer, idx) => (
                    <Typography sx={{ ...displayedAnswers }} key={idx}>
                      {`Answer ${idx + 1}: `}
                      {answer.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  ))}
                </Box>
              )}

              {grades && !answers && grades.length > 0 && (
                <Box>
                  {grades.map((grade, idx) => (
                    <Typography sx={{ ...displayedAnswers }} key={idx}>
                      {`Answer ${idx + 1}: ${grade}`}
                    </Typography>
                  ))}
                </Box>
              )}

              {grades && answers && grades.length > 0 && answers.length > 0 && (
                <>
                  <Box>
                    {grades.map((grade, idx) => (
                      <Typography sx={{ ...displayedAnswers }} key={idx}>
                        {`Grade: ${grade}`}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ paddingTop: 1.4 }}>
                    {answers.map((answer, idx) => (
                      <Typography sx={{ ...displayedAnswers }} key={idx}>
                        {`Content: `}
                        {answer.split('\n').map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </Typography>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          )
        )}
      </Box>
    </>
  )
  return (
    <>
      <Paper sx={FeedbackDisplayGridElement}>
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
          {stateFeedbackId === -1
            ? "Employee's Performance"
            : 'Feedback Details'}
          {stateFeedbackId !== -1 && stateFeedbackId !== -2 ? (
            <>
              <Button
                variant="contained"
                onClick={() =>
                  router.push(
                    stateFeedbackId
                      ? routes.feedback(stateFeedbackId.toString() ?? '0')
                      : '/_not-found'
                  )
                }
                sx={{ textTransform: 'capitalize', borderRadius: 2 }}
              >
                Go to feedback
              </Button>
            </>
          ) : (
            <Button>.</Button>
          )}
        </Typography>
        {stateFeedbackId === -1 ? (
          feedbacks && renderChart()
        ) : stateFeedbackId === -2 ? (
          <EmployeeFeedbackSummaryDog
            loading={false}
          ></EmployeeFeedbackSummaryDog>
        ) : (
          renderFeedbackDetails()
        )}
      </Paper>
    </>
  )
}
