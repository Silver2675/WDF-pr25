import React from 'react'
import {
  Typography,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tooltip,
  Box,
  IconButton,
} from '@mui/material'
import { EmployeeInfoGridElement } from '@/styles/styles'
import { employeeInfoStyle } from '@/styles/tableStyles'
import { EmployeeProfile } from '../types'
import BarChartIcon from '@mui/icons-material/BarChart'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '@/constants/dateFormats'

export const EmployeeInfo = ({
  employeeProfile,
  switchToChart,
  chosenFeedbackId,
}: {
  employeeProfile: EmployeeProfile | undefined
  chosenFeedbackId: number
  switchToChart: (id: number | null) => void | undefined
}) => {
  return (
    <>
      <TableContainer component={Paper} sx={EmployeeInfoGridElement}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 1000,
            px: 3,
            py: 0.75,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Employee Information
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Button sx={{ transform: 'scale(0)' }}>.</Button>
            <Tooltip title={"Employee's performance"}>
              <IconButton
                onClick={() =>
                  -1 === chosenFeedbackId
                    ? switchToChart(-2)
                    : switchToChart(-1)
                }
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0.72,
                  minHeight: 0,
                  minWidth: 0,
                }}
              >
                <BarChartIcon
                  sx={{
                    fontSize: '25px',
                  }}
                  color="primary"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Typography>
        <TableContainer>
          <Table sx={{ borderTop: 0.5, borderColor: 'gray' }}>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    ...employeeInfoStyle,
                    color: 'gray',
                    paddingTop: 1.5,
                    paddingBottom: 1,
                    paddingLeft: 3,
                  }}
                >
                  Employee
                </TableCell>
                <TableCell
                  sx={{
                    ...employeeInfoStyle,
                    paddingTop: 1.5,
                    paddingBottom: 1,
                  }}
                >
                  {`${employeeProfile?.firstName ?? ''} ${
                    employeeProfile?.surname ?? ''
                  }`}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
                >
                  Last Feedback Date
                </TableCell>
                <TableCell sx={employeeInfoStyle}>
                  {dayjs(
                    employeeProfile?.listOfFeedbackProcesses?.at(0)?.reviewDate
                  ).format(DATE_FORMAT)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
                >
                  Current Account
                </TableCell>
                <TableCell sx={employeeInfoStyle}>
                  {employeeProfile?.client}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
                >
                  Current Project
                </TableCell>
                <TableCell sx={employeeInfoStyle}>
                  {employeeProfile?.project}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TableContainer>
    </>
  )
}
