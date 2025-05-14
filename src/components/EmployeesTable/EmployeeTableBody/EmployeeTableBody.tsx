import React from 'react'
import { routes } from '@/constants/routes'
import { rowStyle, cellStyle } from '@/styles/tableStyles'
import { TableBody, TableRow, TableCell } from '@mui/material'
import { useRouter } from 'next/navigation'
import { tableDataOverviews } from '../utils'
import { employeeTableColumns } from '../const'
import { EmployeesTableProps } from './types'

const EmployeeTableBody = ({ overviews }: EmployeesTableProps) => {
  const router = useRouter()

  const tableData = tableDataOverviews(overviews)

  const columnsConfig = employeeTableColumns()

  return (
    <TableBody>
      {tableData?.map((employee) => (
        <TableRow
          hover
          onClick={() =>
            router.push(
              routes.employee((employee.employeeMail ?? 0).toString())
            )
          }
          key={employee.employeeMail ?? 0}
          sx={rowStyle}
        >
          {columnsConfig.map((column, index) => (
            <TableCell
              key={`cell-${employee.employeeMail ?? 0}-${index}`}
              sx={{
                ...cellStyle,
                paddingLeft: column.paddingLeft ? 2.5 : '',
                paddingRight: columnsConfig.length - index == 1 ? 2.5 : '',
              }}
            >
              {employee[column.headerId as keyof typeof employee]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

export default EmployeeTableBody
