import React, { useCallback, useEffect, useState } from 'react'
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableContainer,
} from '@mui/material'
import { yellow } from '@mui/material/colors'
import { request } from '@/server/backend/types/request'
import { apiUrls } from '@/constants/apiUrls'
import AccountsProjectsTableNav from './AccountsProjectsTableNav'
import AccountsProjectsTableHead from './AccountsProjectsTableHead'
import AccountsProjectsTableBody from './AccountsProjectsTableBody'
import AccountsProjectsTableDog from './AccountsProjectsTableDog'
import { tableContainer } from '@/styles/tableStyles'
import { AccountProjectsTableProps, AccountsProjectsOverview } from './types'

const AccountsProjectsTable = ({ accountId }: AccountProjectsTableProps) => {
  const [overviews, setOverviews] = useState<AccountsProjectsOverview[]>([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({ isActive: true })

  const fetchAccountsProjectsOverviews = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<AccountsProjectsOverview[]>({
      url: apiUrls.accountsProjects(accountId),
      method: 'POST',
      body: { isActive: filters.isActive },
    })

    if (ok && response) {
      setOverviews(response)
    }
    setLoading(false)
  }, [accountId, filters.isActive])

  useEffect(() => {
    fetchAccountsProjectsOverviews()
  }, [fetchAccountsProjectsOverviews])

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        ...tableContainer,
        position: 'relative',
        gridColumnStart: '2',
        gridColumnEnd: '2',
        gridRowStart: '1',
        gridRowEnd: '2',
        width: '100%',
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
        mb: 0,
        mt: 0,
      }}
    >
      <AccountsProjectsTableNav
        filters={filters}
        setFilters={setFilters}
        filterChange={(status) => {
          setFilters({ isActive: status === 'active' })
        }}
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
              <AccountsProjectsTableHead />
              <AccountsProjectsTableBody
                fetchData={fetchAccountsProjectsOverviews}
                overviews={overviews}
                loading={loading}
              />
            </>
          ) : (
            <AccountsProjectsTableDog loading={loading} />
          )}
        </Table>
      )}
    </TableContainer>
  )
}

export default AccountsProjectsTable
