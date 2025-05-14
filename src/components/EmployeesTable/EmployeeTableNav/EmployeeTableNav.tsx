import { tableNav } from '@/styles/tableStyles'
import { Card } from '@mui/material'
import React from 'react'
import { EmployeeTableNavProps } from './types'
import FilterData from '@/components/EmployeesOverviews/FilterData/FilterData'

const EmployeeTableNav = ({
  filters,
  setFilters,
  customers,
  projects,
  employees,
}: EmployeeTableNavProps) => {
  return (
    <>
      <Card elevation={0} sx={{ ...tableNav, alignItems: 'start' }}>
        <Card elevation={0} sx={{}}>
          <FilterData
            filters={filters}
            setFilters={setFilters}
            customers={customers}
            projects={projects}
            employees={employees}
          />
        </Card>
      </Card>
    </>
  )
}

export default EmployeeTableNav
