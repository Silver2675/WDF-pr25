import { tableContainer } from '@/styles/tableStyles'
import {
  TableContainer,
  Paper,
  Table,
  Box,
  CircularProgress,
} from '@mui/material'
import React from 'react'
import { EmployeesTableProps } from './types'
import EmployeeTableBody from './EmployeeTableBody/EmployeeTableBody'
import EmployeeTableNav from './EmployeeTableNav/EmployeeTableNav'
import EmployeeTableHead from './EmployeeTableHead/EmployeeTableHead'
import { mainLayout } from '@/styles/styles'
import EmployeeTableDog from './EmployeeTableDog'

const EmployeesTable = ({
  filters,
  fetchData,
  filterChange,
  overviews = [],
  title,
  setFilters,
  loading,
  handleSortChange,
  projects,
  employees,
  customers,
}: EmployeesTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0} sx={tableContainer}>
      <EmployeeTableNav
        filterChange={filterChange}
        filters={filters}
        fetchData={fetchData}
        title={title}
        setFilters={setFilters}
        customers={customers}
        projects={projects}
        employees={employees}
      />
      {loading ? (
        <Box sx={mainLayout}>
          <CircularProgress size={64} sx={{ position: 'fixed', top: '50%' }} />
        </Box>
      ) : (
        <Table>
          {overviews.length > 0 ? (
            <>
              <EmployeeTableHead
                orderBy={filters.orderBy || ''}
                onSort={handleSortChange}
              />
              <EmployeeTableBody
                filters={filters}
                setFilters={setFilters}
                title={''}
                overviews={overviews}
                loading={loading}
                handleSortChange={handleSortChange}
              />
            </>
          ) : (
            <EmployeeTableDog loading={loading} />
          )}
        </Table>
      )}
    </TableContainer>
  )
}

export default EmployeesTable
