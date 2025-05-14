import { tableContainer } from '@/styles/tableStyles'
import {
  TableContainer,
  Paper,
  Table,
  Box,
  CircularProgress,
} from '@mui/material'
import React from 'react'
import { FeedbacksTableProps } from './types'
import FeedbackTableBody from './FeedbackTableBody'
import FeedbackTableNav from './FeedbackTableNav'
import FeedbackTableHead from './FeedbackTableHead'
import { mainLayout } from '@/styles/styles'
import FeedbackTableDog from './FeedbackTableDog'

const FeedbacksTable = ({
  filters,
  fetchData,
  filterChange,
  overviews = [],
  title,
  setFilters,
  loading,
  handleSortChange,
  customers,
  employees,
  projects,
}: FeedbacksTableProps) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        ...tableContainer,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <FeedbackTableNav
        filterChange={filterChange}
        filters={filters}
        fetchData={fetchData}
        title={title}
        setFilters={setFilters}
        employees={employees}
        projects={projects}
        customers={customers}
      />
      {loading ? (
        <Box sx={mainLayout}>
          <CircularProgress size={64} sx={{ position: 'fixed', top: '50%' }} />
        </Box>
      ) : (
        <Table>
          {overviews.length > 0 ? (
            <>
              <FeedbackTableHead
                orderBy={filters.orderBy || ''}
                onSort={handleSortChange}
              />
              <FeedbackTableBody overviews={overviews} />
            </>
          ) : (
            <FeedbackTableDog loading={loading} />
          )}
        </Table>
      )}
    </TableContainer>
  )
}

export default FeedbacksTable
