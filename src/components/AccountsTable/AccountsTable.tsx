import { tableContainer } from '@/styles/tableStyles'
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableContainer,
} from '@mui/material'
import React from 'react'
import AccountsTableHead from './AccountsTableHead/AccountsTableHead'
import { AccountTableProps } from './types'
import AccountsTableBody from './AccountsTableBody/AccountsTableBody'
import AccountsTableDog from './AccountsTableDog/AccountsTableDog'
import AccountsTableNav from './AccountsTableNav/AccountsTableNav'

const AccountsTable = ({
  filters,
  fetchData,
  filterChange,
  overviews = [],
  title,
  setFilters,
  loading,
  handleSortChange,
  accounts,
}: AccountTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={tableContainer}>
      <AccountsTableNav
        filterChange={filterChange}
        filters={filters}
        fetchData={fetchData}
        title={title}
        setFilters={setFilters}
        accounts={accounts}
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
              <AccountsTableHead />
              <AccountsTableBody
                fetchData={fetchData}
                filters={filters}
                setFilters={setFilters}
                title={title}
                overviews={overviews}
                loading={loading}
                handleSortChange={handleSortChange}
              />
            </>
          ) : (
            <AccountsTableDog loading={loading} />
          )}
        </Table>
      )}
    </TableContainer>
  )
}

export default AccountsTable
