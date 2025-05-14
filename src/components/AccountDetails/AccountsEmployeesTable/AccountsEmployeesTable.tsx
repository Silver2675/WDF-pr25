import { tableContainer } from '@/styles/tableStyles'
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableContainer,
} from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { AccountsEmployeesOverview, AccountTableProps } from './types'
import AccountsEmployeesTableHead from './AccountsEmployeesTableHead'
import AccountsEmployeesTableBody from './AccountsEmployeesTableBody'
import AccountsEmployeesTableNav from './AccountsEmployeesTableNav'
import { yellow } from '@mui/material/colors'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import AccountsEmployeesTableDog from './AccountsEmployeesTableDog/AccountsEmployeesTableDog'

const AccountsEmployeesTable = ({ accountId }: AccountTableProps) => {
  const [overviews, setOverviews] = useState<AccountsEmployeesOverview[]>([])
  const [loading, setLoading] = useState(false)

  const fetchEmployeesOverviews = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<AccountsEmployeesOverview[]>({
      url: apiUrls.accountPoc(accountId),
      method: 'POST',
      body: {},
    })

    if (ok && response) {
      setOverviews(response as AccountsEmployeesOverview[])
    }
    setLoading(false)
  }, [accountId])

  useEffect(() => {
    fetchEmployeesOverviews()
  }, [fetchEmployeesOverviews])

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        ...tableContainer,
        position: 'relative',
        gridColumnStart: '2',
        gridColumnEnd: '3',
        gridRowStart: '2',
        gridRowEnd: '3',
        width: '100%',
        mt: 0,
        '&::-webkit-scrollbar': {
          width: '8px',
          backgroundColor: 'background.main',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: yellow[600],
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#fdd017',
        },
      }}
    >
      <AccountsEmployeesTableNav
        fetchData={fetchEmployeesOverviews}
        accountId={accountId}
      />
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress
            size={64}
            sx={{ position: 'absolute', top: '50%' }}
          />
        </Box>
      ) : (
        <Table>
          {overviews.length > 0 ? (
            <>
              <AccountsEmployeesTableHead />
              <AccountsEmployeesTableBody
                fetchData={fetchEmployeesOverviews}
                overviews={overviews}
                loading={loading}
                accountId={accountId}
              />
            </>
          ) : (
            <>
              <AccountsEmployeesTableDog loading={loading} />
            </>
          )}
        </Table>
      )}
    </TableContainer>
  )
}

export default AccountsEmployeesTable
