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
import React, { useEffect, useState } from 'react'
import {
  leftCellStyle,
  rightCellStyle,
  tableContainer,
} from '@/styles/tableStyles'
import { fetchAccountsBasicInformation } from '../api'
import { AccountsBasicInformationProps } from './types'
import { AccountsBasicInformation as AccountsBasicInformationTypes } from '../types'
import { initialValues } from './const'
import EditAccount from '@/components/EditAccount/Form/EditAccount'
import { yellow } from '@mui/material/colors'

const AccountsBasicInformation = ({
  accountId,
  fetchData,
}: AccountsBasicInformationProps) => {
  const [accountsBasicInformation, setAccountsBasicInformation] =
    useState<AccountsBasicInformationTypes>(initialValues)
  const [isLoading, setIsLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const loadInformation = async () => {
      const basicInformation = await fetchAccountsBasicInformation(accountId)
      if (basicInformation) {
        setAccountsBasicInformation(basicInformation)
      }
      setIsLoading(false)
    }

    loadInformation()
  }, [accountId, modalOpen])

  return (
    <TableContainer
      component={Paper}
      sx={{
        ...tableContainer,
        position: 'relative',
        gridColumnStart: '1',
        gridColumnEnd: '2',
        gridRowStart: '1',
        gridRowEnd: '3',
        width: '100%',
        maxWidth: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        boxShadow: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingRight: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 1000,
            paddingLeft: 2.5,
            paddingTop: 1.7,
            paddingBottom: 1.7,
          }}
        >
          Account Information
        </Typography>
        <EditAccount
          accountData={{
            id: accountsBasicInformation.id,
            name: accountsBasicInformation.name,
            description: accountsBasicInformation.description,
            website: accountsBasicInformation.website,
            deliveryManagerGivenName:
              accountsBasicInformation.deliveryManager?.givenName ?? '',
            deliveryManagerSurname:
              accountsBasicInformation.deliveryManager?.surname ?? '',
            deliveryManagerId:
              accountsBasicInformation.deliveryManager?.id ?? 0,
          }}
          fetchData={fetchData}
          setModalOpen={setModalOpen}
        />
      </Box>
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
          }}
        >
          <CircularProgress
            size={64}
            sx={{ position: 'relative', marginTop: '50%' }}
          />
        </Box>
      ) : (
        <Table
          sx={{
            borderTop: 0.5,
            borderColor: 'secondary.light',
            tableLayout: 'auto',
            width: '100%',
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell sx={leftCellStyle}>Name</TableCell>
              <TableCell sx={rightCellStyle}>
                {accountsBasicInformation.name
                  ? accountsBasicInformation.name
                  : '-'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={leftCellStyle}>Description</TableCell>
              <TableCell sx={rightCellStyle}>
                {accountsBasicInformation.description
                  ? accountsBasicInformation.description
                  : '-'}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={leftCellStyle}>Website</TableCell>
              <TableCell sx={rightCellStyle}>
                {accountsBasicInformation.website ? (
                  <a
                    href={accountsBasicInformation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: yellow[600],
                      textDecoration: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    {accountsBasicInformation.website}
                  </a>
                ) : (
                  '-'
                )}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={leftCellStyle}>Delivery Manager</TableCell>
              <TableCell sx={rightCellStyle}>
                {accountsBasicInformation.deliveryManager
                  ? `${
                      accountsBasicInformation.deliveryManager.givenName ??
                      'null'
                    } ${
                      accountsBasicInformation.deliveryManager.surname ?? 'null'
                    }`
                  : '-'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </TableContainer>
  )
}

export default AccountsBasicInformation
