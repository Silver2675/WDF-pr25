'use client'
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from '@mui/material'
import { EmployeeDetailsProps } from '../types'
import React from 'react'
import {
  employeeInfoStyle,
  EmployeeInfoLoadingAnimationBox,
  EmployeeInfoContent,
} from '@/styles/tableStyles'

const DetailsTable = ({ feedback, isLoading }: EmployeeDetailsProps) => {
  return isLoading ? (
    <>
      <Box sx={EmployeeInfoLoadingAnimationBox}>
        <CircularProgress size={64} sx={{}} />
      </Box>
    </>
  ) : (
    <>
      <TableContainer component={Paper} sx={EmployeeInfoContent}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 1000,
            paddingLeft: 2.5,
            paddingTop: 0.5,
            paddingBottom: 0.5,
          }}
        >
          Employee Information
        </Typography>
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
                sx={{ ...employeeInfoStyle, paddingTop: 1.5, paddingBottom: 1 }}
              >
                {feedback?.name}&nbsp;
                {feedback?.surname}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
              >
                Feedback Date
              </TableCell>
              <TableCell sx={employeeInfoStyle}>
                {feedback?.feedbackDate}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
              >
                Account
              </TableCell>
              <TableCell sx={employeeInfoStyle}>{feedback?.client}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
              >
                Project Name
              </TableCell>
              <TableCell sx={employeeInfoStyle}>
                {feedback?.projectName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...employeeInfoStyle, color: 'gray', paddingLeft: 3 }}
              >
                Author
              </TableCell>
              <TableCell sx={employeeInfoStyle}>
                {feedback?.coordinator}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default DetailsTable
